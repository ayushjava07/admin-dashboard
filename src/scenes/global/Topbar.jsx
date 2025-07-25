import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import useMediaQuery from "@mui/material/useMediaQuery";

const Topbar = ({ setIsSidebar, onSidebarToggle }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const isMobile = useMediaQuery("(max-width:900px)");

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      p={2}
      sx={{
        '@media (max-width:600px)': {
          flexDirection: 'column',
          alignItems: 'stretch',
          p: 1,
          gap: 1,
        },
      }}
    >
      {/* Left: Menu button (mobile) + Search bar */}
      <Box display="flex" alignItems="center" flex={1} sx={{ '@media (max-width:600px)': { mb: 1 } }}>
        {isMobile && (
          <IconButton onClick={onSidebarToggle} sx={{ mr: 1 }}>
            <MenuIcon />
          </IconButton>
        )}
        <Box
          display="flex"
          backgroundColor={colors.primary[400]}
          borderRadius="3px"
          flex={1}
        >
          <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
          <IconButton type="button" sx={{ p: 1 }}>
            <SearchIcon />
          </IconButton>
        </Box>
      </Box>

      {/* Right: Icons, collapse on mobile */}
      <Box display="flex" alignItems="center" ml={isMobile ? 1 : 2} sx={{ '@media (max-width:600px)': { ml: 0, justifyContent: 'flex-end' } }}>
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
        {!isMobile && (
          <>
            <IconButton>
              <NotificationsOutlinedIcon />
            </IconButton>
            <IconButton>
              <SettingsOutlinedIcon />
            </IconButton>
            <IconButton>
              <PersonOutlinedIcon />
            </IconButton>
          </>
        )}
      </Box>
    </Box>
  );
};

export default Topbar;
