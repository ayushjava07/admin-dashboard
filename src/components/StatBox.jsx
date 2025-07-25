import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import ProgressCircle from "./ProgressCircle";

const StatBox = ({ title, subtitle, icon, progress, increase }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box width="100%" m="0 30px" sx={{ '@media (max-width:600px)': { m: '0 5px', p: 1 } }}>
      <Box display="flex" justifyContent="space-between" sx={{ '@media (max-width:600px)': { flexDirection: 'column', alignItems: 'center', gap: 1 } }}>
        <Box>
          {icon}
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ color: colors.grey[100], '@media (max-width:600px)': { fontSize: '1.1rem' } }}
          >
            {title}
          </Typography>
        </Box>
        <Box>
          <ProgressCircle progress={progress} />
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-between" mt="2px" sx={{ '@media (max-width:600px)': { flexDirection: 'column', alignItems: 'center', gap: 0.5 } }}>
        <Typography variant="h5" sx={{ color: colors.greenAccent[500], '@media (max-width:600px)': { fontSize: '1rem' } }}>
          {subtitle}
        </Typography>
        <Typography
          variant="h5"
          fontStyle="italic"
          sx={{ color: colors.greenAccent[600], '@media (max-width:600px)': { fontSize: '1rem' } }}
        >
          {increase}
        </Typography>
      </Box>
    </Box>
  );
};

export default StatBox;
