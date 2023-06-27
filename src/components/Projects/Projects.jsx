import { Box, Grid, CardMedia, CardContent, Chip } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";
import img1 from "../../assests/img/projects_img/restroom_finder.PNG";

const projectData = [
  {
    id: 1,
    title: "Restroom Finder",
    desc: "A mobile app to help users find restrooms and business owners attract more customers.",
    imageUrl: img1,
    techStack: ["React Native", "NestJS", "MongoDB"],
  },
  {
    id: 1,
    title: "Restroom Finder",
    desc: "A mobile app to help users find restrooms and business owners attract more customers.",
    imageUrl: img1,
    techStack: ["React Native", "NestJS", "MongoDB"],
  },
  {
    id: 1,
    title: "Restroom Finder",
    desc: "A mobile app to help users find restrooms and business owners attract more customers.",
    imageUrl: img1,
    techStack: ["React Native", "NestJS", "MongoDB"],
  },
  {
    id: 1,
    title: "Restroom Finder",
    desc: "A mobile app to help users find restrooms and business owners attract more customers.",
    imageUrl: img1,
    techStack: ["React Native", "NestJS", "MongoDB"],
  },
  {
    id: 1,
    title: "Restroom Finder",
    desc: "A mobile app to help users find restrooms and business owners attract more customers.",
    imageUrl: img1,
    techStack: ["React Native", "NestJS", "MongoDB"],
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
      <Grid
        container
        spacing={2}
        sx={{ minWidth: { md: "65%" }, maxWidth: { md: "65%" } }}
      >
        {projectData.map((project) => (
          <Grid key={project.id} item xs={12} sm={6} md={4}>
            <Box
              sx={{
                bgcolor: theme.palette.secondary.main,
                transition: "0.1s",
                borderRadius: "5px",
                "&:hover": {
                  transform: "scale(1.01)",
                },
              }}
            >
              <CardMedia
                component="img"
                image={project.imageUrl}
                alt={project.title}
                style={{
                  maxHeight: "300px",
                  objectFit: "fit",
                  objectPosition: "center",
                }}
              />
              <CardContent>
                <h3>{project.title}</h3>
                <p style={{ fontSize: ".90rem" }}>{project.desc}</p>
                {project.techStack.map((tech) => (
                  <Chip
                    label={tech}
                    id={tech}
                    sx={{
                      bgcolor: theme.palette.primary.main,
                      marginRight: "10px",
                      color: "white",
                    }}
                  ></Chip>
                ))}
              </CardContent>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;
