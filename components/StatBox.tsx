import { Card, createTheme, ThemeProvider, Typography } from "@mui/material";

import Grid2 from "@mui/material/Unstable_Grid2";
import React from "react";

interface StatBoxProps {
    stat: String;
    name: String;
    large?: Boolean;
}

export const StatBox: React.FC<StatBoxProps> = ({
    stat,
    name,
    large = false,
}) => {
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
                        padding: large ? "1rem" : "0.5rem",
                        backgroundColor: "#627D98",
                        width: large ? "7rem" : "5rem",
                        height: large ? "7rem" : "5rem",
                    },
                },
            },
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <Card>
                <Grid2 container direction={"column"}>
                    <Grid2>
                        <Typography variant={large ? "subtitle1" : "caption"}>
                            {name}
                        </Typography>
                    </Grid2>
                    <Grid2>
                        <Typography
                            variant={large ? "h4" : "subtitle1"}
                            sx={{
                                paddingTop: "0.5rem",
                                textAlign: "center",
                            }}
                        >
                            {stat}
                        </Typography>
                    </Grid2>
                </Grid2>
            </Card>
        </ThemeProvider>
    );
};
