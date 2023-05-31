import { Grid, Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const TechStackCard = ({ tech }) => {
  const techCardStyle = {
    height: "90px",
    width: "100px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };

  const theme = useTheme();

  return (
    <Grid
      item
      bgcolor={theme.palette.secondary.main}
      sx={{
        display: "flex",
        justifyContent: "center",
        margin: ".5rem",
        borderRadius: "5px",
        "&:hover": { color: theme.palette.primary.main },
        transition: "0.2s",
      }}
    >
      <Box sx={techCardStyle} padding={1}>
        {tech.icon}
        <Typography pt={1}>{tech.name}</Typography>
      </Box>
    </Grid>
  );
};

export default TechStackCard;
