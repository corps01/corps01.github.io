import { Box } from "@mui/material";

const Contact = () => {
  return (
    <Box
      sx={{
        paddingTop: { xs: "4rem", md: "12rem" },
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1 style={{ fontSize: "2rem" }}>
        <b>Contact Me</b>
      </h1>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            height: "340px",
            width: "500px",
            padding: "10px",
            backgroundColor: "#ec4257;",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            borderRadius: "4%",
          }}
        >
          <p>Got a Project Idea, Let's discuss! sumitkumarsoni123@gmail.com</p>
        </Box>
        <Box
          sx={{
            height: "400px",
            width: "800px",
            paddingLeft: "60px",
            backgroundColor: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            borderRadius: "4%",
            marginLeft: "-50px",
            zIndex: "-1",
          }}
        >
          <p>Got a Project Idea, Let's discuss! sumitkumarsoni123@gmail.com</p>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
