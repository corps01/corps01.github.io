import { useState } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

export default function ButtonAppBar({ toggleDarkMode }) {
  const [darkIcon, setdarkIcon] = useState(true);
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        marginRight: { sx: "0", md: "1rem" },
      }}
    >
      <Box sx={{ display: { xs: "none", md: "flex" } }}>
        <a style={{ marginRight: "1rem" }}>about.</a>
        <a style={{ marginRight: "1rem" }}>projects.</a>
        <a style={{ marginRight: "1rem" }}>contact.</a>
      </Box>
      <Box>
        <IconButton
          onClick={() => {
            setdarkIcon(!darkIcon);
            toggleDarkMode();
          }}
        >
          {darkIcon ? <Brightness4Icon /> : <Brightness7Icon />}
        </IconButton>
        <IconButton
          size="medium"
          color="inherit"
          sx={{ display: { lg: "none", md: "flex" } }}
        >
          <MenuIcon />
        </IconButton>
      </Box>
    </Box>
  );
}
