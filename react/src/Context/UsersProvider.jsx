import { useAuth } from "../Hooks/useAuth";
import toast from "react-hot-toast";
import { UsersContext } from "./UsersContext";

export const UsersProvider = ({ children }) => {
  // display all users from local storage
  const { users, getAllUsers } = useAuth();
  // delete user by id
  const deleteUser = async (id) => {
    try {
      const updatedUsers = users.filter((user) => user.id !== id);
      localStorage.setItem("users", JSON.stringify(updatedUsers));
      getAllUsers(); // refresh on users
      toast.success("user deleted successfully");
    } catch (error) {
      toast.error(error);
      console.log(error);
      return;
    }
  };
  //update
  const updateUser = async (id, newData) => {
    try {
      // find the user who wanted to be updated
      const user = users.find((user) => user.id === id);
      // in case not found - error handling
      if (!user) {
        toast.error("user not found!");
        return;
      }
      if (!newData) {
        toast.error("please update!");
        return;
      }
      // hard code
      // const newUser = {
      //   name: user.name,
      //   email: user.email,
      //   password: user.password,
      //   id: user.id,
      //   role: newData,
      // };
      // save all user data, but chsnge the updated - role
      const newUser = { ...user, role: newData };
      //map on all users to update one user (selected user)
      const updatedUsers = users.map((user) =>
        user.id === id ? newUser : user,
      );
      // save all users in local storage
      localStorage.setItem("users", JSON.stringify(updatedUsers));
      toast.success("user role updated");
      getAllUsers(); // refresh
    } catch (error) {
      toast.error(error);
      console.log(error);
      return;
    }
  };
  return (
    <UsersContext.Provider value={{ deleteUser, updateUser }}>
      {children}
    </UsersContext.Provider>
  );
};
