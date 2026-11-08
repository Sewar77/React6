import {
  Button,
  Container,
  Divider,
  Paper,
  Rating,
  TextField,
  Typography,
} from "@mui/material";
import Header from "../Layout/Header";
import { useState } from "react";
import { useMessages } from "../../Hooks/useMessages";
export default function Contact() {
  const { createMessage } = useMessages();
  const [newMessage, setNewMessage] = useState({
    name: "",
    email: "",
    message: "",
    rating: 0,
  });
  const handleSendMessage = () => {
    createMessage(newMessage);
    setNewMessage({
      name: "",
      email: "",
      message: "",
      rating: 0,
    });
  };
  return (
    <>
      <Header />
      <Container sx={{ my: "auto" }}>
        <Paper
          elevation={4}
          sx={{ display: "flex", gap: 3, flexDirection: "column", p: 3 }}
        >
          <Typography variant="h3">leave your cooment!</Typography>
          <Divider>STAY IN TOUCH!</Divider>
          <TextField
            label="Name"
            required
            value={newMessage.name}
            onChange={(e) =>
 setNewMessage({ ...newMessage, 
  name: e.target.value })
            }
          />
          <TextField
            label="Email"
            value={newMessage.email}
            onChange={(e) =>
              setNewMessage({ 
                ...newMessage, 
                email: e.target.value })
            }
          />

          <TextField
            label="Message"
            minRows={"3"}
            multiline
            required
            value={newMessage.message}
            onChange={(e) =>
              setNewMessage({ ...newMessage, message: e.target.value })
            }
          />
          <Typography>leave your rating:</Typography>
          <Rating
            name="simple-controlled"
            value={newMessage.rating}
            onChange={(e) =>
              setNewMessage({ ...newMessage, rating: e.target.value })
            }
          />
          <Button variant="contained" onClick={() => handleSendMessage()}>
            Send Your Message
          </Button>
        </Paper>
      </Container>
    </>
  );
}
