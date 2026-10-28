import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../Context/AuthContext";
export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error("no auth provider!")
    }
    return context;
};