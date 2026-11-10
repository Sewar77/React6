import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Container,
  Grid,
  Rating,
  Typography,
} from "@mui/material";
import { useMessages } from "../../../../Hooks/useMessages";

export default function ManageMessages() {
  const { messages, updateStatus } = useMessages();
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
                  <CardHeader title={msg.status} />
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
                    <Button
                      variant="contained"
                      color="error"
                      onClick={() => updateStatus(msg.id, "rejected")}
                    >
                      Rejecet
                    </Button>
                    <Button
                      variant="contained"
                      color="warning"
                      onClick={() => updateStatus(msg.id, "pending")}
                    >
                      Pending
                    </Button>
                    <Button
                      variant="contained"
                      color="success"
                      onClick={() => updateStatus(msg.id, "approved")}
                    >
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
