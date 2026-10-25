import { Box, Container, Typography } from "@mui/material";
import { useAuth } from "../../Hooks/useAuth";
import Sidebar from "./Sidebar/Sidebar";
export default function AdminDashboard() {
  const { currentUser } = useAuth();
  return (
    <>
      {/* layout */}
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Box sx={{ flex: 1 }}>
          <Sidebar />
        </Box>
        <Box sx={{ flex: 4, my: 4 }}>
          <Typography>hello {currentUser.name}</Typography>
        </Box>
      </Box>
    </>
  );
}
