import { Box, List, ListItem, ListItemButton } from "@mui/material";
import { useAuth } from "../../../Hooks/useAuth";
import { useNavigate } from "react-router-dom";
import CategoryIcon from "@mui/icons-material/Category";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import MessageIcon from "@mui/icons-material/Message";
import ExtensionIcon from "@mui/icons-material/Extension";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonIcon from "@mui/icons-material/Person";
export default function Sidebar() {
  const { lougout } = useAuth();
  const navigate = useNavigate();

  return (
    <>
      <Box
        sx={{
          position: "fixed",
          width: "300px",
          bgcolor: "#301934",
          height: "100vh",
          overflowY: "scroll",
          color: "white",
          fontSize: "20px",
          fontWeight: "bold",
        }}
      >
        <List>
          <ListItem>
            <DashboardIcon />
            <ListItemButton onClick={() => navigate("/admin/dashboard")}>
              Dashboard
            </ListItemButton>
          </ListItem>
          <ListItem>
            <GroupIcon />
            <ListItemButton>Manage Users</ListItemButton>
          </ListItem>
          <ListItem>
            <CategoryIcon />
            <ListItemButton>Manage Categories</ListItemButton>
          </ListItem>
          <ListItem>
            <ExtensionIcon />
            <ListItemButton>Manage Products</ListItemButton>
          </ListItem>
          <ListItem>
            <MessageIcon />
            <ListItemButton>Manage Messages</ListItemButton>
          </ListItem>
          <ListItem>
            <PersonIcon />
            <ListItemButton>Manage Profile</ListItemButton>
          </ListItem>
          <ListItem>
            <LogoutIcon />
            <ListItemButton onClick={() => lougout()}>Logout</ListItemButton>
          </ListItem>
        </List>
      </Box>
    </>
  );
}
