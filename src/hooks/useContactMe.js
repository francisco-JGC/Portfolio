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
        console.log("submitting");
        console.log(name, email, message);
        if (verifyValidEmail(email)) {
            const fields = {
                name,
                email,
                message,
            };
            const isEmailSent = await sendMessageEmail(fields);
            if (isEmailSent) {
                setName("");
                setEmail("");
                setMessage("");
                setIsMessageValid(false);
            }
        }
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