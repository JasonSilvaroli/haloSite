import { ThemeProvider } from "@emotion/react";
import { Avatar, createTheme, Paper, Typography } from "@mui/material";
import React from "react";
import Grid2 from "@mui/material/Unstable_Grid2";
import { RankBox } from "./RankBox";
import { StatBox } from "./StatBox";
import { RankedBox } from "./RankedBox";

interface UserSideBarProps {
    stats: string;
}

export const UserSideBar: React.FC<UserSideBarProps> = ({ stats }) => {
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
                        padding: "0.5rem",
                        backgroundColor: "#486581",
                        borderRadius: "1rem",
                        maxWidth: "100%",
                    },
                },
            },
        },
    });

    const playerStats = JSON.parse(stats);

    const smallStatMap = Object.entries(playerStats.small).map((entry: any) => {
        const [key, value] = entry;

        return (
            <Grid2 key={key} sx={{ marginTop: "0.5rem" }}>
                <StatBox stat={value.data} name={value.name} />
            </Grid2>
        );
    });

    const largeStatMap = Object.entries(playerStats.large).map((entry: any) => {
        const [key, value] = entry;

        return (
            <Grid2 key={key} sx={{ marginTop: "0.5rem" }}>
                <StatBox stat={value.data} name={value.name} large />
            </Grid2>
        );
    });

    const xboxRankedStatMap = Object.entries(playerStats.ranks[0]).map(
        (entry: any) => {
            const [key, value] = entry;

            const statMap = value.map((data: any, index: any) => {
                return (
                    <Grid2 key={index}>
                        <RankedBox stats={JSON.stringify(data)} />
                    </Grid2>
                );
            });

            return (
                <Grid2
                    key={key}
                    sx={{ marginTop: "1rem", width: "85%" }}
                    rowSpacing={1}
                >
                    <Typography>Xbox</Typography>
                    {statMap}
                </Grid2>
            );
        }
    );

    const pcRankedStatMap = Object.entries(playerStats.ranks[1]).map(
        (entry: any) => {
            const [key, value] = entry;

            const statMap = value.map((data: any, index: any) => {
                return (
                    <Grid2 key={index}>
                        <RankedBox stats={JSON.stringify(data)} />
                    </Grid2>
                );
            });

            return (
                <Grid2
                    key={key}
                    sx={{ marginTop: "1rem", width: "85%" }}
                    rowSpacing={1}
                >
                    <Typography>PC</Typography>
                    {statMap}
                </Grid2>
            );
        }
    );

    return (
        <ThemeProvider theme={theme}>
            <Paper sx={{ width: "20rem" }}>
                <Grid2
                    container
                    direction="column"
                    justifyContent="flex-start"
                    alignItems="center"
                >
                    <Grid2
                        container
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                        sx={{ width: "85%", marginTop: "0.5rem" }}
                        id={"header"}
                    >
                        <Grid2
                            container
                            direction="column"
                            justifyContent="center"
                            alignItems="flex-start"
                        >
                            <Grid2>
                                <Typography
                                    sx={{
                                        fontFamily: "Red Rose",
                                        fontSize: "1.5rem",
                                    }}
                                >
                                    {playerStats.apperance.gamertag}
                                </Typography>
                            </Grid2>
                            <Grid2>
                                <Typography
                                    sx={{
                                        fontFamily: "Red Rose",
                                        fontSize: "1rem",
                                    }}
                                >
                                    {playerStats.apperance.clanTag}
                                </Typography>
                            </Grid2>
                        </Grid2>
                        <Grid2 maxWidth={"5rem"}>
                            <Avatar
                                alt="emblem"
                                src={playerStats.apperance.avatarUrl}
                                sx={{
                                    width: "4rem",
                                    height: "4rem",
                                }}
                            />
                        </Grid2>
                    </Grid2>
                    <Grid2 sx={{ marginTop: "2rem", width: "85%" }}>
                        <RankBox stats={JSON.stringify(playerStats.xp)} />
                    </Grid2>
                    <Grid2
                        container
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                        sx={{ marginTop: "1rem", width: "85%" }}
                    >
                        {largeStatMap}
                    </Grid2>
                    <Grid2
                        container
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                        sx={{ marginTop: "1rem", width: "85%" }}
                    >
                        {smallStatMap}
                    </Grid2>
                    {pcRankedStatMap}
                    {xboxRankedStatMap}
                </Grid2>
            </Paper>
        </ThemeProvider>
    );
};
