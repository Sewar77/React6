import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  return (
    <>
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography variant="h2">Logo</Typography>
          <Box sx={{ display: "flex", flexDirection: "row", gap: 3 }}>
            {/* use routes */}
            <IconButton onClick={() => navigate("/")}>Home</IconButton>
            <IconButton>Contact</IconButton>
            <IconButton onClick={() => navigate("/register")}>
              Register
            </IconButton>
            <IconButton onClick={() => navigate("/login")}>Login</IconButton>
            <IconButton>About</IconButton>
            <IconButton>Menu</IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}
