import { ThemeProvider } from "@emotion/react";
import { Card, createTheme, LinearProgress, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import Image from "next/image";
import React from "react";

interface RankBoxProps {
    stats: string;
}

export const RankBox: React.FC<RankBoxProps> = ({ stats }) => {
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
            MuiCard: {
                styleOverrides: {
                    root: {
                        padding: "1rem",
                        backgroundColor: "#627D98",
                    },
                },
            },
        },
    });

    const rankStats = JSON.parse(stats);

    return (
        <ThemeProvider theme={theme}>
            <Card>
                <Grid2
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Grid2 xs={3}>
                        <Image
                            alt="rank"
                            src={rankStats.rankImageUrl.data}
                            width="60rem"
                            height="60rem"
                        />
                    </Grid2>
                    <Grid2 xs={9} container direction="column">
                        <Grid2 justifyContent="left">
                            <Typography variant={"h5"}>
                                {rankStats.title.data}
                            </Typography>
                        </Grid2>
                        <Grid2 container direction="row">
                            <Grid2>
                                <Typography variant={"h6"}>
                                    {`Tour ${rankStats.tour.data}, Tier ${rankStats.tier.data}`}
                                </Typography>
                            </Grid2>
                        </Grid2>
                    </Grid2>
                </Grid2>
                <LinearProgress
                    sx={{ margin: "0.5rem" }}
                    value={
                        100 -
                        (rankStats.remaining.data /
                            (rankStats.total.data - rankStats.threshold.data)) *
                            100
                    }
                    variant="determinate"
                />
                <Typography sx={{ textAlign: "center" }}>
                    {rankStats.remaining.data}/
                    {rankStats.total.data - rankStats.threshold.data}
                </Typography>
            </Card>
        </ThemeProvider>
    );
};
