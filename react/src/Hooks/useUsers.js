import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom"
import { UsersContext } from "../Context/UsersContext";
export const useUsers = () => {
    const context = useContext(UsersContext)
    if (!context) {
        throw new Error("no users provider!")
    }
    return context;
};