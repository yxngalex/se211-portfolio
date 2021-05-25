import React from "react";

import "./contact.styles.scss";
import ContactForm from "../../components/contact-form/contact-form.component";

const ContactPage = () => {

    const saveContact = contactToBeSaved => {

    }

    return (
        <div className="contact-page">
            <div className="contact-header">
                <h2>Let's start your project together:</h2>
            </div>
            <div>
                <ContactForm saveContact={saveContact} />
            </div>
        </div>
    );

}

export default ContactPage;
