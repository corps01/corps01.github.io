import { Grid, Box } from "@mui/material";
import TechStackCard from "./TechStackCard";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { ReactComponent as ReactLogo } from "../../icons/react.svg";

const TechStack = () => {
  return (
    <Box
      sx={{
        paddingTop: { xs: "4rem", md: "12rem" },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1 style={{ fontSize: "2rem" }}>
        <b>About Me</b>
      </h1>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          alignItems: "center",
          justifyContent: "center",
          paddingTop: { md: "5rem" },
        }}
      >
        <Box
          sx={{
            maxWidth: "30rem",
            marginRight: { xs: "0%", md: "10rem" },
          }}
        >
          <p>
            I am a Frontend Developer who isn't just passionate about coding,
            but also about open-source and design.
          </p>
          <p>
            My love for Linux runs as deep as my love for creating visually
            stunning websites and user interfaces.
          </p>
          <p>
            I aim to not only create functional, responsive websites but also
            beautiful, intuitive ones that leave a lasting impression on users
            with my skills as well as my keen eye for design.
          </p>
        </Box>
        <Grid
          container
          sx={{
            maxWidth: "479px",
            minWidth: "350px",
            paddingTop: { xs: "2rem", md: "0" },
          }}
          justifyContent={"space-evenly"}
        >
          <TechStackCard tech={{ name: "React", icon: <ReactLogo /> }} />
          <TechStackCard tech={{ name: "React", icon: <Brightness7Icon /> }} />
          <TechStackCard tech={{ name: "React", icon: <Brightness7Icon /> }} />
          <TechStackCard tech={{ name: "React", icon: <Brightness7Icon /> }} />
          <TechStackCard tech={{ name: "React", icon: <Brightness7Icon /> }} />
          <TechStackCard tech={{ name: "React", icon: <Brightness7Icon /> }} />
          <TechStackCard tech={{ name: "React", icon: <Brightness7Icon /> }} />
          <TechStackCard tech={{ name: "React", icon: <Brightness7Icon /> }} />
          <TechStackCard tech={{ name: "React", icon: <Brightness7Icon /> }} />
          <TechStackCard tech={{ name: "React", icon: <Brightness7Icon /> }} />
        </Grid>
      </Box>
    </Box>
  );
};

export default TechStack;
