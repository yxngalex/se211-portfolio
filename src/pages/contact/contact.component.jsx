import React from "react";

import "./contact.styles.scss";
import ContactForm from "../../components/contact-form/contact-form.component";

const ContactPage = () => {


    return (
        <div className="contact-page">
            <div className="contact-header">
                <h2>Let's start your project together:</h2>
            </div>
            <div>
                <ContactForm />
            </div>
        </div>
    );

}

export default ContactPage;
