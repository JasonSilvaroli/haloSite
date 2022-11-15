import {
    Avatar,
    Card,
    createTheme,
    ThemeProvider,
    Typography,
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import React from "react";

interface rankedBoxProps {
    stats: string;
}

export const RankedBox: React.FC<rankedBoxProps> = ({ stats }) => {
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

    const rankedStats = JSON.parse(stats);

    return (
        <ThemeProvider theme={theme}>
            <Card sx={{ marginBottom: "1em" }}>
                <Grid2
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Grid2>
                        <Typography>{rankedStats.name}</Typography>
                        <Typography>Rank: {rankedStats.rank}</Typography>
                    </Grid2>
                    <Grid2 maxWidth={"5rem"}>
                        <Avatar
                            alt="rann"
                            src={rankedStats.rankImage}
                            sx={{
                                width: "3rem",
                                height: "3rem",
                            }}
                        />
                    </Grid2>
                </Grid2>
            </Card>
        </ThemeProvider>
    );
};
