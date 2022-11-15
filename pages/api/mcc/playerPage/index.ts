// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { defaultGameList } from "../../../../utility/defaultGame";

import { defaultStats } from "../../../../utility/defaultStats";

type Data = {
    stats: Object;
    gameList: Object;
};

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    res.status(200).json({ stats: defaultStats, gameList: defaultGameList });
}
