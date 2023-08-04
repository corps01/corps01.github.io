import Header from "./components/Header";
import { Box } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Timeline from "./components/Timeline/Timeline";
import { useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import CssBaseline from "@mui/material/CssBaseline";
import TechStack from "./components/TechStack/TechStack";
import Carousel from "./components/Carousel/Carousel";
import { Element } from "react-scroll";
// import Projects from "./components/Projects/Projects";

const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const darkTheme = createTheme({
    palette: {
      background: {
        default: darkMode ? "#11111B" : "#eeeeee",
      },
      primary: {
        main: "#EC4257",
      },
      secondary: {
        main: darkMode ? "#1C1C26" : "#ffff",
      },
      mode: darkMode ? "dark" : "light",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box
        sx={{
          padding: "1rem",
        }}
      >
        <Header toggleDarkMode={toggleDarkMode} />
        <About />
        <Element id="about">
          <TechStack />
        </Element>
        {/* <Element id="projects">
          <Projects />
        </Element> */}
        <Element id="timeline">
          <Timeline darkMode={darkMode} />
          <Carousel />
        </Element>
        <Element id="contact">
          <Contact />
        </Element>
      </Box>
    </ThemeProvider>
  );
};

export default App;
