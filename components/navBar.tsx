import {
    AppBar,
    Box,
    Button,
    createTheme,
    Grid,
    Icon,
    Input,
    Paper,
    TextField,
    ThemeProvider,
    Toolbar,
    Typography,
} from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import Link from "next/link";
import { useRouter } from "next/router";

interface NavBarProps {}

export const NavBar: React.FC<NavBarProps> = ({}) => {
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
            MuiAppBar: {
                styleOverrides: {
                    root: { backgroundColor: "#243b53" },
                },
            },
            MuiPaper: {
                styleOverrides: {
                    root: {
                        backgroundColor: "#627d98",
                        padding: "0.5rem",
                    },
                },
            },
            MuiInput: {
                styleOverrides: {
                    root: {
                        padding: "0.2rem",
                        ":before": { borderBottomColor: "#cfcfcf" },
                        ":after": { borderBottomColor: "#cfcfcf" },
                    },
                },
            },
            MuiTypography: {
                styleOverrides: {
                    root: {
                        cursor: "pointer",
                        fontFamily: "Red Rose",
                    },
                },
            },
        },
    });

    const [search, setSearch] = React.useState("");
    const router = useRouter();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
        console.log(event.target.value);
    };

    const handleSubmit = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            router.push("/player/mcc/" + search);
        }

        console.log(event.key);
    };

    return (
        <Box>
            <ThemeProvider theme={theme}>
                <AppBar position="static">
                    <Toolbar>
                        <Grid container direction="row">
                            <Grid
                                container
                                item
                                xs={8.5}
                                sx={{ paddingTop: "0.5em" }}
                                direction="row"
                                spacing={5}
                            >
                                <Grid item>
                                    <Link href="/">
                                        <Typography
                                            variant="h5"
                                            noWrap
                                            sx={{
                                                marginTop: "0.4rem",
                                            }}
                                        >
                                            Home
                                        </Typography>
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link href="/about">
                                        <Typography
                                            variant="h5"
                                            noWrap
                                            sx={{
                                                marginTop: "0.4rem",
                                            }}
                                        >
                                            About
                                        </Typography>
                                    </Link>
                                </Grid>
                            </Grid>
                            <Grid
                                item
                                xs={2}
                                sx={{
                                    alignSelf: "center",
                                    justifyItems: "center",
                                    justifySelf: "center",
                                }}
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
                                            width: "90%",
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
                            <Grid
                                container
                                item
                                xs={1.5}
                                sx={{
                                    alignSelf: "center",
                                    justifyItems: "center",
                                    justifySelf: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <Link href="/login">
                                    <Typography
                                        variant="h5"
                                        noWrap
                                        sx={{
                                            marginTop: "0.4rem",
                                            marginLeft: "1rem",
                                        }}
                                    >
                                        Login
                                    </Typography>
                                </Link>
                                <Link href="/register">
                                    <Typography
                                        variant="h5"
                                        noWrap
                                        sx={{
                                            marginTop: "0.4rem",
                                            marginLeft: "1rem",
                                        }}
                                    >
                                        Register
                                    </Typography>
                                </Link>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
            </ThemeProvider>
        </Box>
    );
};
