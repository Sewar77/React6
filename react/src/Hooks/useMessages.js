import { useState } from "react";
import toast from "react-hot-toast";

export const useMessages = () => {
    const [messages, setMessages] = useState(
        JSON.parse(localStorage.getItem("messages")) || [],
    );
    const createMessage =
        async ({ name, email, message, rating }) => {
            try {
                // validation
                if (!name || !message) {
                    toast.error("please write your name and opinion!");
                    return;
                }
                const newMessage = {
                    userName: name,
                    userEmail: email,
                    userMessage: message,
                    userRating: rating,
                    id: Date.now(),
                    status: "pending"
                };
                setMessages([...messages, newMessage]);
                const newMessages = [...messages, newMessage]
                localStorage.setItem("messages", JSON.stringify(newMessages))
                toast.success("you message sent to amdin review!")
                // localStorage
            } catch (error) { }
        };

    return { createMessage, messages };
};
