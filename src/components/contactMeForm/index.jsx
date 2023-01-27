import './index.scss'
import { useContactMe } from "../../hooks/useContactMe.js"

export default function ContactMeForm(){
    // use hook to get the state of the form
    const { name,  email, message, handleEmailChange, handleMessageChange, handleNameChange, handleSubmit } = useContactMe()

    return (
        <form onSubmit={handleSubmit} className='contact-me'>
            <section className='section section__formMail'>
                <div className="title">
                    <h2>Send me a message</h2>
                    <i className="fas fa-envelope-open"></i>
                </div>
                <div className="name">
                    <input type="text" name="name" id="name" value={name} onChange={handleNameChange} required/>
                    <label htmlFor="name">What's your name?</label>
                </div>
                <div className="email">
                    <input type="text" name="email" id="email" value={email} onChange={handleEmailChange} required/>
                    <label htmlFor="email">please enter your email</label>
                </div>
                <div className="message">
                    <label htmlFor="messagesent__message">What do you want to tell me?</label>
                    <textarea name="message" id="message" value={message} onChange={handleMessageChange} required/>
                </div>
                {/* button__send sending__message */}
                <button type="submit" className='button__send'>
                    <i className="fas fa-paper-plane send"></i>
                    <i className="fas fa-check check"></i>
                </button>
            </section>

            <section className='section section__formContactme'>
                <div className="contactme">
                    <h3>Contact information</h3>

                    <div className="contactme__location">
                        <div className="location__icon">
                            <i className="fas fa-map-marker-alt"></i>
                        </div>
                        <div className="location__text">
                            <h3>Location</h3>
                            <p>León, Nicaragua</p>
                        </div>
                    </div>

                    <div className="contactme__social-media">
                        
                    </div>
                </div>
            </section>
        </form>
    )
}