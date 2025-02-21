import { ListItem, styled } from "@mui/material";

export const UiListItem = styled(ListItem)(({ theme }) => ({
    "&:hover": {
        backgroundColor: theme.palette.primary.main,
    },
    "&:hover .MuiSvgIcon-root": {
        color: theme.palette.text.black
    },
    "&:hover .MuiTypography-root": {
        color: theme.palette.text.black
    }
}));