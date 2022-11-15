import { createTheme, Paper, ThemeProvider, Typography } from "@mui/material";
import React from "react";
import {
    ResponsiveContainer,
    BarChart,
    XAxis,
    YAxis,
    Bar,
    Cell,
} from "recharts";
import { formatGameVersionData } from "../utility/formatGameVersionData";

interface GameVersionGraphProps {
    stats: string;
}

export const GameVersionGraph: React.FC<GameVersionGraphProps> = ({
    stats,
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
            MuiPaper: {
                styleOverrides: {
                    root: {
                        margin: "0.5rem",
                        padding: "0.5rem",
                        backgroundColor: "#486581",
                    },
                },
            },
        },
    });

    const data = formatGameVersionData(JSON.parse(stats));

    const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

    return (
        <ThemeProvider theme={theme}>
            <Paper
                sx={{ width: "20rem", height: "15rem", paddingBottom: "2rem" }}
            >
                <Typography sx={{ fontFamily: "Red Rose" }}>
                    Game Versions Played
                </Typography>
                <ResponsiveContainer>
                    <BarChart data={data}>
                        <XAxis
                            dataKey="name"
                            stroke="black"
                            tick={{ fontSize: "0.8rem" }}
                        />
                        <YAxis stroke="black" />
                        <Bar dataKey="value" fill="white">
                            {data.map((entry, index) => (
                                <Cell
                                    key={`cell-${index}`}
                                    fill={COLORS[index % 4]}
                                />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </Paper>
        </ThemeProvider>
    );
};
