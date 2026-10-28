import {
  Box,
  Button,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { useAuth } from "../../../../Hooks/useAuth";
import { useUsers } from "../../../../Hooks/useUsers";
import { useState } from "react";
import Register from "../../../Auth/Register";
export default function DisplayUsers() {
  const { users } = useAuth();
  const { deleteUser, updateUser } = useUsers();
  const [role, setNewRole] = useState(""); // the new role
  const [isUpdated, setIsUpdated] = useState(null); // the id for the user who will be updated!
  const handleSave = () => {
    updateUser(isUpdated, role);
    setIsUpdated(null);
  };
  const [openForm, setOpenForm] = useState(false);
  return (
    <>
      <Box>
        <Typography variant="h3">Manage Users</Typography>
        <Divider sx={{ p: 2 }}>where to manage</Divider>
        <Button
          variant="contained"
          sx={{ m: 3 }}
          onClick={() => setOpenForm(!openForm)}
        >
          Add User
        </Button>

        {openForm && <Register />}
        <TableContainer sx={{ width: "100%", overflowX: "scroll" }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Role</TableCell>
                <TableCell>ACTIONS</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {users.map((user, idx) => {
                return (
                  <TableRow key={user.id}>
                    <TableCell>{idx + 1}</TableCell>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>
                      {isUpdated === user.id ? (
                        <FormControl fullWidth>
                          <InputLabel>Role</InputLabel>
                          <Select
                            label="Role"
                            onChange={(e) => setNewRole(e.target.value)}
                          >
                            <MenuItem value={"user"}>User</MenuItem>
                            <MenuItem value={"admin"}>Admin</MenuItem>
                          </Select>
                        </FormControl>
                      ) : (
                        <> {user.role}</>
                      )}
                    </TableCell>
                    <TableCell>
                      {isUpdated === user.id ? (
                        <>
                          <Button
                            variant="contained"
                            color="success"
                            onClick={() => handleSave()}
                          >
                            Save
                          </Button>
                          <Button
                            variant="contained"
                            color="warning"
                            onClick={() => setIsUpdated(null)}
                          >
                            Cancel
                          </Button>
                        </>
                      ) : (
                        <Button
                          variant="contained"
                          color="info"
                          onClick={() => setIsUpdated(user.id)}
                        >
                          Edit
                        </Button>
                      )}
                      <Button
                        variant="contained"
                        color="error"
                        onClick={() => deleteUser(user.id)}
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
}
