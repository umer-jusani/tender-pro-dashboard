"use client";
import { NotificationsIcon, SearchIcon } from "@/assests";
import InputField from "@/shared/form-control/InputField";
import { Box, Stack } from "@mui/material";
import Profile from "./Profile";
import { AppBarStyled, ToolbarStyled } from "./ui";


const Header = () => {
  // const matches = useMediaQuery(DRAWER_BREAK_POINT);

  return (
    <>
      <AppBarStyled
        position="sticky"
        sx={{ backgroundColor: "background.default", py: 1 }}
        elevation={1}
      >
        <ToolbarStyled sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Stack maxWidth={440}>
            <InputField
              label="Search Here...."
              fullWidth={false}
              // placeholder="Search Here..."
              size="small"
              icon={<SearchIcon sx={{ color: "text.primary" }} />}
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
