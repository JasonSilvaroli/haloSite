import { Grid, Input, Paper, ThemeProvider, Typography } from "@mui/material";
import type { NextPage } from "next";
import { createTheme } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const Home: NextPage = () => {
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
            MuiTypography: {
                styleOverrides: {
                    root: {
                        color: "#cfcfcf",
                        fontFamily: "Red Rose",
                    },
                },
            },
            MuiInput: {
                styleOverrides: {
                    root: {
                        width: "90%",
                        ":before": { borderBottomColor: "#cfcfcf" },
                        ":after": { borderBottomColor: "#cfcfcf" },
                    },
                },
            },
        },
    });

    const [search, setSearch] = React.useState("");
    const router = useRouter();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
    };

    const handleSubmit = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            router.push("/player/mcc/" + search);
        }

        console.log(event.key);
    };

    return (
        <ThemeProvider theme={theme}>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                sx={{ marginTop: "10rem" }}
            >
                <Grid
                    item
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Grid item>
                        <Typography variant="h3">Halo Stats</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="h5">
                            Detailed Game Stats
                        </Typography>
                    </Grid>
                </Grid>
                <Grid
                    item
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Paper
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            flexWrap: "wrap",
                            float: "right",
                            ":hover": {
                                backgroundColor: "#80a0bf",
                            },
                        }}
                    >
                        <SearchIcon sx={{ width: "10%" }} />
                        <Input
                            sx={{
                                ":hover": {
                                    color: "white",
                                },
                            }}
                            placeholder="Search..."
                            value={search}
                            onChange={handleChange}
                            onKeyUp={handleSubmit}
                        />
                    </Paper>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
};

export default Home;
