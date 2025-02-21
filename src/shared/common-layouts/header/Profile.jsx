"use client";

import { userImage } from "@/assests";
import { ProfileMenus } from "@/shared/constant/constant";
import { Avatar, Box, IconButton, Menu, MenuItem, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { useState } from "react";

const Profile = () => {
  const [anchorEl2, setAnchorEl2] = useState(null);

  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleClose2 = () => {
    setAnchorEl2(null);
  };


  return (
    <Box sx={{ backgroundColor: "background.body" }}>
      <IconButton
        size="large"
        aria-label="show notifications"
        color="inherit"
        aria-controls="msgs-menu"
        aria-haspopup="true"
        onClick={handleClick2}
        sx={{
          "&:hover": {
            backgroundColor: "transparent", // Removes hover background effect
          },
        }}
      >
        <Avatar
          src={userImage?.src || userImage}
          sx={{
            width: 35,
            height: 35,
          }}
        />
        <Stack marginLeft={1} textAlign={"left"}>
          <Typography variant="body2" color="text.primary" fontWeight={"bold"}>UserName</Typography>
          <Typography variant="caption" color="text.disabled">xyz@gmail.com</Typography>
        </Stack>
      </IconButton>

      <UiMenuWrapper anchorEl2={anchorEl2} handleClose2={handleClose2}>
        {ProfileMenus?.map(ele => (
          <MenuItem disablePadding sx={{ p: "8px 16px" }} component={Link} href={ele.path} onClick={handleClose2}>
            {ele.label}
          </MenuItem>
        ))}
      </UiMenuWrapper>
    </Box>
  );
};

export default Profile;


// Menu Component
const UiMenuWrapper = ({ children, handleClose2, anchorEl2 }) => {
  return (
    <>
      <Menu
        id="msgs-menu"
        anchorEl={anchorEl2}
        keepMounted
        open={Boolean(anchorEl2)}
        onClose={handleClose2}
        sx={{
          "& .MuiMenu-paper": {
            width: "200px",
            backgroundColor: "background.body",
            padding: 0, // Removes default paddings
          },
          "& .MuiList-root": {
            padding: 0, // Removes default padding inside the menu
          },

        }}
      >
        {children}
      </Menu>
    </>
  )
}