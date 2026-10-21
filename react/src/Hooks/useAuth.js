import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom"
export const useAuth = () => {
    const navigate = useNavigate()
    // retrun group of things: function, variables(state)
    const [users, setUsers] = useState(JSON.parse(localStorage.getItem("users")) || [])
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("currentUser")) || {})
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
                id: Date.now(),
                role: "user" //always the role is user
            }
            const newUsers = [...users, newUser] //local storage
            setUsers(newUsers)
            localStorage.setItem("users", JSON.stringify(newUsers))
            toast.success("registered successfully, please login to continue");
            navigate("/login")
        } catch (error) {
            toast.error(error);
            console.log(error);
            return;
            // syntax error
            // api error
        }
    };

    const login = async (email, password) => {
        try {
            if (!email || !password) {
                toast.error("please fill all fields!")
                return
            }
            const isExsit = users.find(user => user.email === email)
            if (!isExsit) {
                toast.error("you dont have an account!")
                return
            }
            // in case the user exist, all user info will be store in isexist. 
            if (isExsit.password !== password) {
                toast.error("password is not correct")
                return
            }
            // store it inside state and the local storage
            setCurrentUser(isExsit)
            localStorage.setItem("currentUser", JSON.stringify(isExsit))
            toast.success("login successfully")
            //check role, if role is user, go to user pages. 
            // if role is admin, go to admin dashboard. 
            if (isExsit.role === "user") {
                navigate("/home")
            } else if (isExsit.role === "admin") {
                navigate('/admin/dashboard')
            }
        } catch (error) {
            toast.error(error);
            console.log(error);
            return;
            // syntax error
            // api error
        }
    }

    const logout = async () => {
        try {
            localStorage.removeItem("currentUser")
            toast.success("logout successfully")
            navigate("/")
            setCurrentUser(null)
        } catch (error) {
            toast.error(error);
            console.log(error);
            return;
            // syntax error
            // api error
        }
    }

    return { register, login, currentUser, logout };
};
