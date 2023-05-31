import {
  Box,
  TextField,
  Button,
  List,
  ListItem,
  ListItemIcon,
} from "@mui/material";
import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";
import { init, send } from "emailjs-com";

const Contact = () => {
  const theme = useTheme();
  const [name, setName] = useState(""); //name
  const [reply_to, setReplyTo] = useState(""); //message
  const [message, setMessage] = useState(""); //message

  init("3ZQI1Pv4aPZeGhupw");

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      fname: e.target.name.value,
      message: e.target.message.value,
    };

    console.log(templateParams);

    send(
      "service_hah9b8p",
      "template_pdekgub",
      templateParams,
      "3ZQI1Pv4aPZeGhupw"
    ).then(
      (result) => {
        console.log("Email successfully sent!", result.text);
      },
      (error) => {
        console.log("Error sending email:", error.text);
      }
    );
  };

  return (
    <Box
      sx={{
        paddingTop: { xs: "4rem", md: "8rem" },
        paddingBottom: { xs: "4rem", md: "8rem" },
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
            width: "420px",
            padding: "10px",
            backgroundColor: "#ec4257;",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            textAlign: "center",
            borderRadius: "4%",
            zIndex: "1",
          }}
        >
          <p>Got a Project Idea, Let's discuss! ocorpus@outlook.com</p>
          <Box
            sx={{
              display: "flex",

              justifyContent: "center",
              width: "80%",
            }}
          >
            <List
              sx={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <ListItem component="a" href="https://www.facebook.com">
                <ListItemIcon>
                  <Facebook />
                </ListItemIcon>
              </ListItem>
              <ListItem component="a" href="https://www.twitter.com">
                <ListItemIcon>
                  <Twitter />
                </ListItemIcon>
              </ListItem>
              <ListItem component="a" href="https://www.instagram.com">
                <ListItemIcon>
                  <Instagram />
                </ListItemIcon>
              </ListItem>
              <ListItem component="a" href="https://www.linkedin.com">
                <ListItemIcon>
                  <LinkedIn />
                </ListItemIcon>
              </ListItem>
            </List>
          </Box>
        </Box>
        <Box
          sx={{
            height: "400px",
            width: "650px",
            paddingLeft: "60px",
            padding: "40px 60px",
            background: theme.palette.secondary.main,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            borderRadius: "4%",
            marginLeft: "-50px",
          }}
        >
          <form
            style={{ display: "flex", flexDirection: "column", width: "80%" }}
            onSubmit={handleSubmit}
          >
            <TextField
              label="Your Name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <TextField
              label="Message"
              id="message"
              multiline
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              sx={{ marginTop: "10px" }}
            />
            <Button
              type="submit"
              variant="contained"
              sx={{ marginTop: "10px" }}
            >
              Send
            </Button>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
