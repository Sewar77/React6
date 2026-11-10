import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export const useMessages = () => {
    const [messages, setMessages] = useState(
        JSON.parse(localStorage.getItem("messages")) || [],
    );
    const [approvedMessages, setApprovedMessages] = useState(
        JSON.parse(localStorage.getItem("approvedMessages")) || [])
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
    const updateStatus = async (id, newStatus) => {
        try {
            const message = messages.find(msg => msg.id === id)
            const updatedMessage = { ...message, status: newStatus }
            const newMessages = messages.map(msg =>
                msg.id === id ? updatedMessage : msg)
            localStorage.setItem("messages", JSON.stringify(newMessages))
            setMessages(newMessages)
            toast.success(` message ${newStatus} successffully`)
            // delete the rejected
        } catch (error) {

        }
    }

    // get all approved messages
    const getApprovedMessages = async () => {
        try {
            const approvedMessages = messages.filter(msg => msg.status === "approved")
            setApprovedMessages(approvedMessages)
            localStorage.setItem("approvedMessages", JSON.stringify(approvedMessages))
            toast.success("gets approved mesages")
        } catch (error) {
        }
    }
    useEffect(() => {
        // apply effect on whatever inside for ever
        getApprovedMessages() //call the function 24
    }, [])
    // [] => effect 24/7
    // [value] => effect when the value changes

    return { createMessage, messages, updateStatus, approvedMessages };
};
