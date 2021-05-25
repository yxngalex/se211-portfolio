import React, {useState} from "react";
import {Button, TextField, Tooltip} from "@material-ui/core";
import {v4 as uuidv4} from "uuid";

import "./contact-form.styles.scss";
import {saveContact} from "../../services/services.service";


const ContactForm = () => {
    const [contact, setContact] = useState({
        id: "",
        name: "",
        lastName: "",
        email: "",
        budget: ""
    });

    const handleInputChange = (event) => {
        setContact({...contact, [event.target.id]: event.target.value});
    }

    const handleSubmit = (ev) => {
        ev.preventDefault();
        if (contact.name.trim() && contact.lastName.trim() && contact.email.trim() && contact.budget.trim()) {
            saveContact({...contact, id: uuidv4()})
                .then(res => {
                    console.log(res);
                    setContact({
                        id: "",
                        name: "",
                        lastName: "",
                        email: "",
                        budget: ""
                    })
                });
        }
    }

    return (
        <div className="contact-form col-md-9 mb-md-0 mb-5">
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="mb-md-4">
                        <TextField
                            id="name"
                            className="text-field"
                            type="text"
                            label="Your name"
                            value={contact?.name}
                            onChange={handleInputChange}
                            required
                        />
                        <TextField
                            id="lastName"
                            className="text-field"
                            type="text"
                            label="Your last name"
                            value={contact?.lastName}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="mb-md-4">
                        <TextField
                            id="email"
                            className="text-field"
                            type="email"
                            label="Your email"
                            value={contact?.email}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="mb-md-5">
                        <TextField
                            id="budget"
                            className="text-field"
                            type="number"
                            label="Your budget"
                            value={contact?.budget}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div>
                        <Tooltip title="Submit" arrow>
                            <input type="submit" value="submit" />
                        </Tooltip>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default ContactForm;
