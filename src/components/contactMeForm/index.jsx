import { useState } from "react"
import { useContactMe } from "../../hooks/useContactMe.js"

export default function ContactMeForm(){
    // use hook to get the state of the form
    const { name,  email, message, handleEmailChange, handleMessageChange, handleNameChange, handleSubmit } = useContactMe()

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" value={name} onChange={handleNameChange} />
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" value={email} onChange={handleEmailChange} />
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" value={message} onChange={handleMessageChange} />
            <button type="submit">Send</button>
        </form>
    )
}