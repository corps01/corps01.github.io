import { useState } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Drawer from "@mui/material/Drawer";
import { Link } from "react-scroll";

export default function ButtonAppBar({ toggleDarkMode }) {
  const [darkIcon, setdarkIcon] = useState(true);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        marginRight: { xs: "0", md: "1rem" },
        marginBottom: { xs: "4rem", md: "6rem" },
      }}
    >
      <Box sx={{ display: { xs: "none", md: "flex" } }}>
        <Link
          to="about"
          smooth={true}
          duration={500}
          style={{ marginRight: "1rem", cursor: "pointer" }}
        >
          about.
        </Link>
        <Link
          to="timeline"
          smooth={true}
          duration={500}
          style={{ marginRight: "1rem", cursor: "pointer" }}
        >
          history.
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          style={{ marginRight: "1rem", cursor: "pointer" }}
        >
          contact.
        </Link>
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
          sx={{ display: { md: "none" } }}
          onClick={toggleDrawer}
        >
          <MenuIcon />
        </IconButton>
      </Box>

      <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer}>
        <Box sx={{ padding: "10px", display: "flex", flexDirection: "column" }}>
          <Link
            to="about"
            smooth={true}
            duration={500}
            style={{ padding: "15px", cursor: "pointer", fontSize: "1rem" }}
            onClick={toggleDrawer}
          >
            about.
          </Link>
          <Link
            to="timeline"
            smooth={true}
            duration={500}
            style={{ padding: "15px", cursor: "pointer", fontSize: "1rem" }}
            onClick={toggleDrawer}
          >
            history.
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            style={{ padding: "15px", cursor: "pointer", fontSize: "1rem" }}
            onClick={toggleDrawer}
          >
            contact.
          </Link>
        </Box>
      </Drawer>
    </Box>
  );
}
