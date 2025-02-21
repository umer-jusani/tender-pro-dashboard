"use client";

import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import theme from "./theme";

const UIThemeProvider = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
};

export default UIThemeProvider;
