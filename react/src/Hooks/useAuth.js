import { useState } from "react";
import toast from "react-hot-toast";

export const useAuth = () => {
    // retrun group of things: function, variables(state)
    const [users, setUsers] = useState(JSON.parse(localStorage.getItem("users")) || [])
    // setUsers(JSON.parse(localStorage.getItem("users")))
    const register = async (data) => {
        try {
            // handled error
            // read user data = {name, email, password, confirmPassword}
            // validation
            if (
                !data.name ||
                !data.email ||
                !data.password ||
                !data.confirmPassword
            ) {
                toast.error("Please fill all fields!");
                return;
            }
            if (data.name.length < 3) {
                toast.error("please enter a valid name");
                return;
            }
            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (!emailRegex.test(data.email)) {
                toast.error("please enter a valid email");
                return;
            }
            // check if the email already exiti in db
            const isExist = users.find(user => user.email === data.email)
            if (isExist) {
                toast.error("you already have account!")
                return;
            }
            const passwordRgex =
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
            if (!passwordRgex.test(data.password)) {
                toast.error(
                    "password must contain at least one uppercase, one lowercase, one symbol, one number, and minim 8 chareters length",
                );
                return
            }
            if (data.password !== data.confirmPassword) {
                toast.error("passwords dont match!");
                return;
            }
            //user is fine!
            const newUser = {
                name: data.name,
                email: data.email,
                password: data.password,
                id: Date.now()
            }
            const newUsers = [...users, newUser] //local storage
            setUsers(newUsers)
            localStorage.setItem("users", JSON.stringify(newUsers))
            toast.success("registered successfully");
        } catch (error) {
            toast.error(error);
            console.log(error);
            return;
            // syntax error
            // api error
        }
    };

    return { register };
};
