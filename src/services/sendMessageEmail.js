import sgMail from '@sendgrid/mail';

export const sendMessageEmail = async (fields) => {

    sgMail.setApiKey(import.meta.env.VITE_SENDGRID_API_KEY);
    const cors = 'https://cors-anywhere.herokuapp.com/'

    const message = {
        to: import.meta.env.VITE_SENDGRID_TO_EMAIL,
        from: fields.email,
        subject: 'Message from ' + fields.name,
        text: fields.message,
        html: `
                <h1>Message from ${fields.name}</h1>
                <p>${fields.message}</p>
            `
    }

    const sendEmail = async () => {
        return fetch(cors + 'https://api.sendgrid.com/api/mail.send.json', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${import.meta.env.VITE_SENDGRID_API_KEY}`
            },
            body: JSON.stringify(message)
        })
    }

    try {
        await sendEmail();
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }

}