import { Box, Grid, CardMedia, CardContent } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";
import img1 from "../../assests/img/projects_img/financial_tracker.PNG";

const projectData = [
  {
    id: 1,
    title: "Bathroom Finder",
    desc: "A mobile app to help map all bathrooms in Colima",
    imageUrl: img1,
  },
  {
    id: 1,
    title: "Bathroom Finder",
    desc: "A mobile app to help map all bathrooms in Colima",
    imageUrl: img1,
  },
  {
    id: 1,
    title: "Bathroom Finder",
    desc: "A mobile app to help map all bathrooms in Colima",
    imageUrl: img1,
  },
  {
    id: 1,
    title: "Bathroom Finder",
    desc: "A mobile app to help map all bathrooms in Colima",
    imageUrl: img1,
  },
  {
    id: 1,
    title: "Bathroom Finder",
    desc: "A mobile app to help map all bathrooms in Colima",
    imageUrl: img1,
  },
  {
    id: 1,
    title: "Bathroom Finder",
    desc: "A mobile app to help map all bathrooms in Colima",
    imageUrl: img1,
  },
];

const Projects = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginBottom: { xs: "4rem", md: "12rem" },
      }}
    >
      <h1 style={{ fontSize: "2rem", marginBottom: "2rem" }}>
        <b>Projects</b>
      </h1>
      <Grid container spacing={2} maxWidth={"1400px"}>
        {projectData.map((project) => (
          <Grid key={project.id} item xs={12} sm={6} md={4}>
            <Box
              sx={{
                bgcolor: theme.palette.secondary.main,
                "&:hover": { color: theme.palette.primary.main },
                transition: "0.2s",
                borderRadius: "5px",
              }}
            >
              <CardMedia
                component="img"
                image={project.imageUrl}
                alt={project.title}
              />
              <CardContent>
                <h3>{project.title}</h3>
                <p style={{ fontSize: ".90rem" }}>{project.desc}</p>
              </CardContent>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;
