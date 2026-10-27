import {
  Box,
  Button,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useAuth } from "../../../../Hooks/useAuth";
import { useUsers } from "../../../../Hooks/useUsers";
export default function DisplayUsers() {
  const { users } = useAuth();
  const { deleteUser } = useUsers();
  return (
    <>
      <Box>
        <Typography variant="h3">Manage Users</Typography>
        <Divider sx={{ p: 2 }}>where to manage</Divider>
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
                    <TableCell>{user.role}</TableCell>
                    <TableCell>
                      <Button>Edit</Button>
                      <Button onClick={() => deleteUser(user.id)}>
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
