import { createTheme, Grid, ThemeProvider, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { UserSideBar } from "../../../components/UserSideBar";
import defaultStats from "../../../utility/defaultStats";
import { parseCareerStats, parseGames } from "../../../utility/parseStats";
import Grid2 from "@mui/material/Unstable_Grid2";
import { NextPage } from "next";
import {
    getLocalGames,
    getLocalStats,
    setLocalGames,
    setLocalStats,
} from "../../../utility/sessionStorageManager";

import {
    defaultGameList,
    DefaultGameTotals,
} from "../../../utility/defaultGame";
import { RecentGameAccordian } from "../../../components/RecentGameAccordian";
import { KillGraph } from "../../../components/KillGraph";
import { GameTypeGraph } from "../../../components/GameTypeGraph";
import { GameVersionGraph } from "../../../components/GameVersionGraph";
import { hostname } from "os";

const lib = require("lib")({
    token: process.env.NEXT_PUBLIC_API_TOKEN,
});

interface MCCUserPageProps {}

const MCCUserPage: NextPage<MCCUserPageProps> = ({}) => {
    const theme = createTheme({
        palette: {
            primary: {
                main: "#3f51b5",
                light: "#bcccdc",
                dark: "#334e68",
            },
            secondary: {
                main: "#f50057",
            },
            text: {
                primary: "#cfcfcf",
                secondary: "#7e7e7e",
                disabled: "#cfcfcf",
            },
            divider: "#bcccdc",
        },
        components: {
            MuiPaper: {
                styleOverrides: {
                    root: {
                        margin: "0.5rem",
                        padding: "0.5rem",
                        backgroundColor: "#486581",
                    },
                },
            },
            MuiGrid2: {
                styleOverrides: {
                    root: {
                        marginTop: "1rem",
                        marginLeft: "1rem",
                    },
                },
            },
        },
    });

    const router = useRouter();
    const { username } = router.query;
    const [statsResult, setStatsResult] = React.useState(defaultStats);
    const [gameListResult, setGameListResult] = React.useState(defaultGameList);
    const [gameTotals, setGameTotals] = React.useState(DefaultGameTotals);

    useEffect(() => {
        if (router.isReady) {
            const fetchData = async () => {
                const currentTime = Date.now();
                var updateTime = Number(
                    window.sessionStorage.getItem("updateTime" + username)
                );

                const updateInterval = 1000 * 60 * 15;
                // milliseconds to seconds to minutes

                if (
                    (updateTime === null ||
                        currentTime - updateTime > updateInterval) &&
                    username !== undefined
                ) {
                    var updateTime = Number(
                        window.sessionStorage.getItem("updateTime" + username)
                    );

                    fetch(
                        `${window.location.origin}/api/mcc/playerPage/${username}?updateTime=${updateTime}`
                    ).then((res) => {
                        if (res.ok) {
                            res.json()
                                .then((data) => {
                                    setLocalStats(data.stats, username);
                                    setStatsResult(data.stats);
                                    setLocalGames(data.gameList, username);
                                    setGameListResult(data.gameList.games);
                                    setGameTotals(data.gameList.totals);
                                })
                                .catch((err) => console.error(err));
                        }
                    });
                } else {
                    const parsedStats = getLocalStats(username);
                    const parsedGames = getLocalGames(username);

                    setGameListResult(parsedGames.games);
                    setGameTotals(parsedGames.totals);

                    console.log("old");

                    setStatsResult(parsedStats);
                }
            };

            fetchData().catch(console.error);
        }
    }, [username, router.isReady]);
    const recentGamesMap = gameListResult.data.map((obj, key) => {
        return (
            <RecentGameAccordian
                key={"panel" + key}
                gridKey={key}
                stats={JSON.stringify(obj)}
            />
        );
    });

    return (
        <div>
            <ThemeProvider theme={theme}>
                <Grid2
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="flex-start"
                >
                    <Grid2>
                        <UserSideBar stats={JSON.stringify(statsResult)} />
                    </Grid2>
                    <Grid2>{recentGamesMap}</Grid2>
                    <Grid2 sx={{ marginRight: "5rem" }}>
                        <KillGraph
                            stats={JSON.stringify(gameTotals.killDeath)}
                        />
                        <GameTypeGraph
                            stats={JSON.stringify(gameTotals.gameModes)}
                        />
                        <GameVersionGraph
                            stats={JSON.stringify(gameTotals.gameVersions)}
                        />
                    </Grid2>
                </Grid2>
            </ThemeProvider>
        </div>
    );
};

export default MCCUserPage;
