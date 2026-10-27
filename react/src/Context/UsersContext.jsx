//create context

import { createContext } from "react";
import { useAuth } from "../Hooks/useAuth";
import toast from "react-hot-toast";
export const UsersContext = createContext(null);

export const UsersProvider = ({ children }) => {
  // display all users from local storage
  const { users } = useAuth();
  // delete user by id
  const deleteUser = async (id) => {
    try {
      const updatedUsers = users.filter((user) => user.id !== id);
      localStorage.setItem("users", JSON.stringify(updatedUsers));
      // setUsers(updatedUsers);
      toast.success("user deleted successfully");
    } catch (error) {
      toast.error(error);
      console.log(error);
      return;
    }
  };
  return (
    <UsersContext.Provider value={{ deleteUser }}>
      {children}
    </UsersContext.Provider>
  );
};
