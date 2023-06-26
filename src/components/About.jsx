import { Box, Button } from "@mui/material";
import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";
import "../App.css";
import gifImage from "../assests/img/waving-hand.gif";

const About = () => {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", lg: "row-reverse" },
          justifyContent: "center",
          alignItems: "center",
          marginBottom: { xs: "4rem", md: "8rem" },
        }}
      >
        <Box
          sx={{
            height: 500,
            width: 500,
            maxHeight: { xs: 250, md: 420 },
            maxWidth: { xs: 250, md: 420 },
            marginLeft: { xs: "0%", md: "12rem" },
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
            A FullStack Develoer who is in love with design and pushing
            boundaries.
          </p>

          <Button
            sx={{
              mt: 4,
              paddingY: 2,
              width: { xs: "100%", md: "50%" },
            }}
            variant="contained"
            href="https://corps01.github.io/static/media/Omar%20Caleb%20Corpus%20Mendoza.pdf"
            target="_blank"
            download
          >
            Download CV
            <DownloadForOfflineIcon sx={{ marginLeft: "10px" }} />
          </Button>
          <Button
            sx={{
              mt: 4,
              paddingY: 2,
              width: { xs: "100%", md: "50%" },
            }}
            variant="contained"
          >
            Projects.
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
