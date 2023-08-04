import { Box, Button } from "@mui/material";
import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";
import CodeIcon from "@mui/icons-material/Code";
import "../App.css";
import gifImage from "../assests/img/waving-hand.gif";
import { Link } from "react-scroll";

const About = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: { xs: "4rem", md: "10rem" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row-reverse" },
          justifyContent: "space-between",
          alignItems: "center",
          minWidth: { md: "65%" },
          maxWidth: { md: "65%" },
        }}
      >
        <Box
          sx={{
            height: 500,
            width: 500,
            maxHeight: { xs: 250, md: 420 },
            maxWidth: { xs: 250, md: 420 },
          }}
          className="profilePic"
        />
        <Box
          sx={{
            maxWidth: "30rem",
            marginRight: { xs: "0", md: "8rem" },
            paddingTop: { xs: 4, md: "1rem" },
          }}
        >
          <h2>
            Hey!
            <img
              src={gifImage}
              alt="GIF"
              style={{ height: "1.5rem", marginLeft: "0.5rem" }}
            />
          </h2>
          <h1 style={{ fontSize: "3rem" }}>
            I'm <b>Omar Corpus</b>
          </h1>
          <p>
            I'm a passionate software engineer with a degree in software
            development from the University of Colima. I specialize in web
            development.
          </p>
          {/* <Link to="projects" smooth={true} duration={500}>
            <Button
              sx={{
                mt: 4,
                paddingY: 2,
                width: { xs: "100%", md: "40%" },
              }}
              variant="contained"
            >
              Projects
              <CodeIcon sx={{ marginLeft: "10px" }} />
            </Button>
          </Link> */}
          <Button
            sx={{
              mt: { xs: 2, md: 4 },
              paddingY: 2,
              marginLeft: { xs: 0, md: 0 },
              width: { xs: "100%", md: "40%" },
            }}
            variant="contained"
            href="../assests/img/omar_corpus.png"
            target="_blank"
            download
          >
            Download CV
            <DownloadForOfflineIcon sx={{ marginLeft: "10px" }} />
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
