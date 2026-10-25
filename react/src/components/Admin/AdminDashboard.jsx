import { Box, Button, Container, Typography } from "@mui/material";
import { useAuth } from "../../Hooks/useAuth";
export default function AdminDashboard() {
  const { currentUser } = useAuth();
  return (
    <>
      {/* layout */}
      <Typography>hello {currentUser.name}</Typography>
    </>
  );
}
