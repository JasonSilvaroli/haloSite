import {
    createTheme,
    Paper,
    ThemeProvider,
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails,
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import React from "react";
import Image from "next/image";

interface RecentGameAccordianProps {
    gridKey: any;
    stats: string;
}

export const RecentGameAccordian: React.FC<RecentGameAccordianProps> = ({
    gridKey,
    stats,
}) => {
    const playerGame = JSON.parse(stats);
    const [expanded, setExpanded] = React.useState(false);

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
                        background: `linear-gradient(90deg, ${
                            playerGame.gameInfo.outcome === "win"
                                ? "#2D7718"
                                : "#AB3B33"
                        } 10%, #486581 50%)`,
                    },
                },
            },
            MuiAccordion: {
                styleOverrides: {
                    root: {
                        "&.Mui-expanded": {
                            margin: 8,
                        },
                    },
                },
            },
        },
    });

    const statsMap = Object.entries(playerGame.playerInfo).map((entry: any) => {
        const [key, value] = entry;

        return (
            <Grid2 key={key} sx={{ minWidth: "8rem" }}>
                <Paper sx={{ background: "#334E68" }}>
                    <Grid2
                        container
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <Grid2>
                            <Typography>{key + ":"}</Typography>
                        </Grid2>
                        <Grid2>
                            <Typography>{value}</Typography>
                        </Grid2>
                    </Grid2>
                </Paper>
            </Grid2>
        );
    });

    const handleChange = () => (event: React.SyntheticEvent) => {
        setExpanded(!expanded);
    };

    return (
        <ThemeProvider theme={theme}>
            <Accordion
                expanded={expanded}
                key={gridKey}
                onChange={handleChange()}
            >
                <AccordionSummary>
                    <Grid2 container direction="column" sx={{ width: "100%" }}>
                        <Grid2
                            container
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                            sx={{ marginInline: "0.8rem" }}
                        >
                            <Grid2>
                                <Typography
                                    display="inline"
                                    sx={{
                                        fontFamily: "Red Rose",
                                        fontSize: "1.2rem",
                                    }}
                                >
                                    {playerGame.gameInfo.gameType +
                                        " on " +
                                        playerGame.gameInfo.mapName}
                                </Typography>
                            </Grid2>
                            <Grid2
                                container
                                direction="row"
                                justifyContent="flex-end"
                                alignItems="center"
                            >
                                <Typography
                                    display="inline"
                                    sx={{
                                        fontFamily: "Red Rose",
                                        fontSize: "1rem",
                                    }}
                                >
                                    {playerGame.gameInfo.gameVersion}
                                </Typography>
                                <Image
                                    src={playerGame.gameInfo.gameVersionImage}
                                    alt="gameType"
                                    width="40rem"
                                    height="40rem"
                                />
                            </Grid2>
                        </Grid2>
                        <Grid2
                            container
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                            sx={{ marginInline: "0.8rem" }}
                        >
                            <Grid2>
                                <Typography
                                    display="inline"
                                    sx={{
                                        fontFamily: "Red Rose",
                                        fontSize: "0.9rem",
                                    }}
                                >
                                    {playerGame.gameInfo.duration}
                                </Typography>
                            </Grid2>
                            <Grid2>
                                <Typography
                                    display="inline"
                                    align="right"
                                    sx={{
                                        fontFamily: "Red Rose",
                                        fontSize: "0.9rem",
                                    }}
                                >
                                    {playerGame.gameInfo.playedAt}
                                </Typography>
                            </Grid2>
                        </Grid2>
                    </Grid2>
                </AccordionSummary>
                <AccordionDetails>
                    <Grid2
                        container
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        {statsMap}
                    </Grid2>
                </AccordionDetails>
            </Accordion>
        </ThemeProvider>
    );
};
