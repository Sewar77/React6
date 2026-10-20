// build form, apply logic
import {
  Button,
  Container,
  Divider,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import toast from "react-hot-toast";
import { useAuth } from "../../Hooks/useAuth";
export default function Register() {
  // somewhere to store the data.
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    age: "",
    phoneNumber: "",
  });
  const { register } = useAuth();
  // one thing=> {}
  // group of things: [{}, {}, {}]
  const handleSubmit = () => {
    register(userData);
  };
  return (
    <>
      <Container sx={{ my: "auto" }}>
        <Paper
          elevation={4}
          sx={{ p: 3, display: "flex", flexDirection: "column", gap: 3 }}
        >
          <Typography variant="h3">Create account</Typography>
          <Divider>Start your journy</Divider>
          <TextField
            label="Enter Your Name"
            required
            onChange={(e) => setUserData({ ...userData, name: e.target.value })}
          />
          <TextField
            label="Enter Your Email"
            type="email"
            required
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
          />
          <TextField
            label="Enter Your Password"
            type="password"
            required
            onChange={(e) =>
              setUserData({ ...userData, password: e.target.value })
            }
          />
          <TextField
            label="Enter Your Confirm Password"
            type="password"
            required
            onChange={(e) =>
              setUserData({ ...userData, confirmPassword: e.target.value })
            }
          />
          <Button variant="contained" onClick={() => handleSubmit()}>
            Register
          </Button>
        </Paper>
      </Container>
    </>
  );
}