import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../theme";

const Header = ({ title, subtitle }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box mb="30px" sx={{ '@media (max-width:600px)': { mb: '15px' } }}>
      <Typography
        variant="h2"
        color={colors.grey[100]}
        fontWeight="bold"
        sx={{ m: "0 0 5px 0", '@media (max-width:600px)': { fontSize: '1.5rem' } }}
      >
        {title}
      </Typography>
      <Typography variant="h5" color={colors.greenAccent[400]} sx={{ '@media (max-width:600px)': { fontSize: '1rem' } }}>
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Header;
