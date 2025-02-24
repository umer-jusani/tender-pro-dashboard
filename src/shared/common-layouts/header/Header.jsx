"use client";
import { NotificationsIcon, SearchIcon } from "@/assests";
import { DRAWER_BREAK_POINT } from "@/shared/constant/constant";
import InputField from "@/shared/form-control/InputField";
import { Box, Stack, useMediaQuery } from "@mui/material";
import Profile from "./Profile";
import { AppBarStyled, ToolbarStyled } from "./ui";


const Header = () => {
  const matches = useMediaQuery(DRAWER_BREAK_POINT);

  return (
    <>
      <AppBarStyled
        position="sticky"
        sx={{ backgroundColor: "background.default" }}
        elevation={1}
      >
        <ToolbarStyled sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Stack maxWidth={440}>
            <InputField
              fullWidth={false}
              placeholder="Search Here..."
              // bgColor="background.paper"
              size="small"
              endIcon={<SearchIcon sx={{ color: "text.primary" }} />}
            />
          </Stack>
          <Stack direction={"row"} alignItems={"center"} justifyContent={"center"}>
            <Box sx={{ bgcolor: "background.paper", height: 30, width: 30, display: "flex", justifyContent: "center", alignItems: "center" }} borderRadius={"50%"}>
              <NotificationsIcon color="primary" />
            </Box>
            <Profile />
          </Stack>
        </ToolbarStyled>
      </AppBarStyled >
    </>
  );
};

export default Header;
