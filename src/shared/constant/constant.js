

export const APP_TOKEN = process.env.NEXT_PUBLIC_APP_TOKEN;
export const API_URL = process.env.NEXT_PUBLIC_API_URL;
export const DRAWER_BREAK_POINT = "(min-width:1000px)";
export const DRAWER_WIDTH = 260;
export const FLOW_SPACER = {md: 4, sm: 2, xs: 1};

export const ProfileMenus = [
    { path: "/profile", label: "Profile" },
    { path: "/change-password", label: "Change Password" },
    { path: "/login", label: "Logout" }
]