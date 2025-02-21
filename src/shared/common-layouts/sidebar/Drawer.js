"use client";
import { DRAWER_WIDTH } from "@/shared/constant/constant";
import { Box, LinearProgress, ListItem, Stack, useMediaQuery } from "@mui/material";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { UiListItem } from "./Ui";
import { Logo, LogoutIcon, SettingsIcon } from "@/assests";
import { sideBarRoutes } from "@/app/routes";

const DrawerStyles = {
  "&.Mui-selected, &:hover": {
    backgroundColor: "background.lightDark",
    "& *": {
      color: "primary.main",
      transition: "0.2s all ease-in-out",
    },
    "&::before": {
      height: "100%",
      backgroundColor: "primary.main",
    },
  },
  "&::before": {
    content: `''`,
    position: "absolute",
    top: "50%",
    right: "0",
    transform: "translateY(-50%)",
    height: "0",
    width: "4px",
    backgroundColor: "primary.main",
    transition: "0.2s all ease-in-out",
  },
  gap: 1.5,
};

function ResponsiveDrawer(props) {
  const { window, routes } = props;
  const dispatch = useDispatch();
  const { openMenu } = useSelector(state => state.appReducer);
  const matches = useMediaQuery("(min-width:900px)");
  const pathname = usePathname();

  const isSelected = (ele) => {
    return pathname.includes(ele.href);
  }

  const drawer = (
    <Box display="flex" flexDirection="column" height="100vh">
      <Box flex={1}>
        <Toolbar sx={{ gap: 1.5, overflow: "hidden" }}>
          <Image
            src={Logo}
            alt="logo"
            style={{ width: "100%", height: "4.8rem", objectFit: "contain" }}
          />
        </Toolbar>
        <Divider sx={{ mb: 3 }} />

        {/* Progress Bar */}
        <Stack px={2} mb={3} spacing={-0.1}>
          <Typography variant="body1" fontWeight="bold" gutterBottom>
            Complete your profile
          </Typography>
          <Box display="flex" alignItems="center">
            <LinearProgress
              variant="determinate"
              value={70}
              sx={{
                height: 8,
                borderRadius: 5,
                flex: 1,
                "& .MuiLinearProgress-bar": {
                  backgroundColor: "#007bff",
                },
              }}
            />
            <Typography variant="caption" sx={{ marginLeft: 1 }}>
              {70}%
            </Typography>
          </Box>
        </Stack>

        <Divider sx={{ mb: 3 }} />

        {/* Listing Routes */}
        <List sx={{ alignSelf: "flex-end" }}>
          {sideBarRoutes["organization"]?.map((ele) => {
            return (
              <Link
                key={ele.id}
                href={ele?.href}
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  alignItems: "center",
                }}
              >
                <ListItem disablePadding>
                  <ListItemButton sx={DrawerStyles} selected={isSelected(ele)}>
                    <ListItemIcon
                      sx={{
                        minWidth: "min-content",
                      }}
                    >
                      {ele?.icon?.filled}
                    </ListItemIcon>
                    <ListItemText>
                      <Typography fontWeight={"medium"} color="text.primary">
                        {ele?.title}
                      </Typography>
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
              </Link>
            );
          })}
        </List>
      </Box>

      {/* Settings at the Bottom */}
      <List disablePadding>
        <Divider sx={{ my: 2 }} />
        <UiListItem
          disablePadding
          sx={{ "&:hover .MuiListItemText-primary, &:hover .MuiSvgIcon-root": { color: "text.secondary" } }}
        >
          <ListItemButton>
            <Link href={""} style={{ textDecoration: "none", color: "inherit", display: "flex", alignItems: "center", gap: 10 }}>
              <SettingsIcon />
              <ListItemText>Settings</ListItemText>
            </Link>
          </ListItemButton>
        </UiListItem>

        {/* <UiListItem disablePadding> */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1.5,
            cursor: "pointer",
            padding: "10px 16px",
            backgroundColor: "#f8d7da", // Light red background
            transition: "background-color 0.3s",
            "&:hover": {
              backgroundColor: "#f5c6cb", // Slightly darker red on hover
            },
          }}
        >
          <LogoutIcon sx={{ color: "primary.A100" }} />
          <Typography sx={{ color: "primary.A100" }}>Logout</Typography>
        </Box>
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Drawer
        container={container}
        variant={matches ? "permanent" : "temporary"}
        open={openMenu}
        // onClose={() => dispatch(toggleMenu(!openMenu))}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: DRAWER_WIDTH,
            backgroundColor: "background.default",
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
}

ResponsiveDrawer.propTypes = {
  window: PropTypes.func,
};

export default ResponsiveDrawer;
