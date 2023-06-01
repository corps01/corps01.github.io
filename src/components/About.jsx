import { Box, Button } from "@mui/material";
import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";
import "../App.css";

const About = () => {
  return (
    <Box sx={{ paddingTop: { xs: "4rem", md: "6rem" } }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", lg: "row-reverse" },
          justifyContent: "center",
          alignItems: "center",
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
            marginRight: { xs: "0%", md: "8rem" },
            paddingTop: { xs: 4, md: "1rem" },
          }}
        >
          <h2>Hey! 👋</h2>
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
