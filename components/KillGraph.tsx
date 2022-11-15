import { createTheme, Paper, ThemeProvider, Typography } from "@mui/material";
import React from "react";
import {
    CartesianGrid,
    Legend,
    Line,
    LineChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";

interface KillGraphProps {
    stats: string;
}

export const KillGraph: React.FC<KillGraphProps> = ({ stats }) => {
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

    return (
        <ThemeProvider theme={theme}>
            <Paper
                sx={{ width: "20rem", height: "15rem", paddingBottom: "2rem" }}
            >
                <Typography sx={{ fontFamily: "Red Rose" }}>
                    Kills vs Deaths
                </Typography>
                <ResponsiveContainer>
                    <LineChart data={JSON.parse(stats)} style={{ margin: 0 }}>
                        <XAxis dataKey="name" stroke="black" />
                        <YAxis stroke="black" />
                        <Line
                            type="monotone"
                            dataKey="kills"
                            stroke="#5dc460"
                        />
                        <Line
                            type="monotone"
                            dataKey="deaths"
                            stroke="#e2504c"
                        />
                        <Tooltip />
                        <Legend />
                    </LineChart>
                </ResponsiveContainer>
            </Paper>
        </ThemeProvider>
    );
};
