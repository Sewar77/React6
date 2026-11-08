import {
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  Rating,
  Typography,
} from "@mui/material";
import { useMessages } from "../../../../Hooks/useMessages";

export default function ManageMessages() {
  const { messages } = useMessages();
  return (
    <>
      <Container sx={{ my: 2 }}>
        <Typography variant="h2">Manage Messages</Typography>
        <Grid container spacing={4}>
          {/* map on messgaes */}
          {messages.map((msg, idx) => {
            return (
              <Grid key={msg.id}>
                <Card>
                  <CardContent>
                    <Typography variant="h6">Name: {msg.userName}</Typography>
                    <Typography variant="body2">
                      Email: {msg.userEmail || "NO EMAIL"}
                    </Typography>
                    <Typography variant="h5">
                      Message: {msg.userMessage}
                    </Typography>
                    <Rating value={msg.userRating} disabled />
                  </CardContent>

                  <CardActions>
                    <Button variant="contained" color="error">
                      Rejecet
                    </Button>
                    <Button variant="contained" color="success">
                      Approve
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </>
  );
}
