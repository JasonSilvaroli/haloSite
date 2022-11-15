// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { parseCareerStats, parseGames } from "../../../../utility/parseStats";
import {
    setLocalStats,
    setLocalGames,
    getLocalStats,
    getLocalGames,
} from "../../../../utility/sessionStorageManager";

type Data = {
    stats: Object;
    gameList: Object;
};

const lib = require("lib")({
    token: process.env.NEXT_PUBLIC_API_TOKEN,
});

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const { username, updateTime } = req.query;

    const updatedTime = Number(updateTime);

    const currentTime = Date.now();

    const updateInterval = 1000 * 60 * 15;
    // milliseconds to seconds to minutes

    const [statsResult, apperanceResult, gameListResult] = await Promise.all([
        lib.halo.mcc["@0.2.0"].player.stats["service-record"].summary({
            gamertag: username,
        }),
        lib.halo.mcc["@0.2.0"].player.appearance({
            gamertag: username, // required
        }),
        lib.halo.mcc["@0.2.0"].player.stats.matches.list({
            gamertag: username,
            page: 1,
        }),
    ]);

    const parsedStats = parseCareerStats(statsResult, apperanceResult);

    const parsedGames = parseGames(gameListResult);

    console.log("new");

    res.status(200).json({ stats: parsedStats, gameList: parsedGames });
}
