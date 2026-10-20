// build form, apply logic
import {
  Button,
  Container,
  Divider,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
export default function Login() {
  return (
    <>
      <Container sx={{ my: "auto" }}>
        <Paper
          elevation={4}
          sx={{ p: 3, display: "flex", flexDirection: "column", gap: 3 }}
        >
          <Typography variant="h3">Welcom Back!</Typography>
          <Divider>complete your journy</Divider>
          <TextField label="Enter Your Email" type="email" />
          <TextField label="Enter Your Password" type="password" />
          <Button variant="contained">Login</Button>
        </Paper>
      </Container>
    </>
  );
}
