import { useState } from "react";
import { sendMessageEmail } from "../services/sendMessageEmail.js";
import { verifyValidEmail } from "../utils/verifyValidEmail.js";

export const useContactMe = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isMessageValid, setIsMessageValid] = useState(false);

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
        setIsMessageValid(e.target.value.length > 0);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const button = e.target.querySelector("button");
        button.disabled = true;
        button.classList.add("sending__message");
        if (verifyValidEmail(email)) {
            const fields = {
                name,
                email,
                message,
            };
            const isEmailSent = await sendMessageEmail(fields);
            button.classList.remove("sending__message");
            button.classList.add("sent__message");

            if (isEmailSent) {
                setName("");
                setEmail("");
                setMessage("");
                setIsMessageValid(false);
            }

            setTimeout(() => {
                button.classList.remove("sent__message");
                button.disabled = false;
            }, 2000);

            return;
        }

        alert("Please enter a valid email address");
        button.disabled = false;
        button.classList.remove("sending__message");
    };

    
    return {
        name,
        email,
        message,
        isMessageValid,
        handleEmailChange,
        handleMessageChange,
        handleNameChange,
        handleSubmit,
    };
}