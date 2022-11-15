import { createTheme, ThemeProvider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

interface AboutProps {}

const About: React.FC<AboutProps> = ({}) => {
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
            MuiTypography: {
                styleOverrides: {
                    root: {
                        color: "#cfcfcf",
                    },
                },
            },
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <Box>
                <Typography variant="h3" noWrap>
                    About
                </Typography>
            </Box>
        </ThemeProvider>
    );
};

export default About;
