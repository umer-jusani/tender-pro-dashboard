import { createTheme, responsiveFontSizes } from "@mui/material";
import { Inter, Roboto } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700", "900"] });
const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700", "900"] });

let theme = createTheme({
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: "none", // ✅ Fix applied
                },
            },
        },
        MuiTableCell: {
            styleOverrides: {
                root: {
                    textAlign: "center",
                },
            },
        },
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    backgroundColor: "rgba(245, 245, 245, 1)", // Change this to your desired color
                },
            },
        },
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            dialogScreen: 720,
            normal: 1000,
            md: 900,
            lg: 1200,
            xl: 1536,
        },
    },
    typography: {
        fontFamily: `${inter.style.fontFamily}, ${roboto.style.fontFamily}, Arial`,
        Regular: 400,
        Medium: 500,
        SemiBold: 600,
        Bold: 700,
        ExtraBold: 900,
        fontSize: 14, // Default font size
        sizes: {
            100: "13px",
            sm: "14px",
            md: "16px",
            lg: "17px",
            lg: "18px",
            xl: "20px",
        },
    },
    palette: {
        mode: "light",
        primary: {
            main: "rgba(0, 144, 243, 1)",
            light: "rgba(240, 250, 249, 1)",
            A100: "rgba(231, 1, 1, 1)"
        },
        secondary: {
            main: "rgba(255, 255, 255, 1)",
        },
        text: {
            primary: "rgba(58, 62, 73, 1)",
            secondary: "rgba(255, 255, 255, 1)",
            disabled: "rgba(118, 118, 118, 1)",
        },
        success: {
            main: "#4caf50", // Add this line to fix the error
        },
        warning: {
            main: "#ff9800",
        },
        background: {
            default: "rgba(255, 255, 255, 1)",
            paper: "rgba(245, 245, 245, 1)",
            lightPurple: "rgba(235, 242, 255, 1)"
        },
        divider: "rgba(232, 232, 232, 1)",
    },
});

theme = responsiveFontSizes(theme);

export default theme;

let themeMode = {
    light: {
        divider: "rgba(174, 174, 174, 1)",
        background: {
            default: "rgba(0, 0, 0, 1)",
            lightDefault: "rgba(0, 0, 0, 0.5)",
            primary: "rgba(244, 198, 51, 1)",
            secondary: "rgba(24, 24, 27, 1)",
            white: "rgba(255, 255, 255, 1)",
        },
        border: {
            primary: "rgba(242, 242, 242, 1)",
        },
        text: {
            primary: "rgba(255, 255, 255, 1)",
            body: "rgba(255, 255, 255, 0.8)",
            secondary: "rgba(244, 198, 51, 1)",
            darkGrey: "rgba(255, 255, 255, 0.55)",
            lightGrey: "#rgba(255, 255, 255, 0.85)",
            darkBlue: "rgba(24, 24, 27, 1)",
            grey: "#rgba(138, 138, 138, 1)",
        },
    },
};
