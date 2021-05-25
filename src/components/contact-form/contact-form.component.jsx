import React, {useState} from "react";
import {TextField, Tooltip, Snackbar, Button, IconButton} from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';
import {v4 as uuidv4} from "uuid";
import {saveContact} from "../../services/services.service";

import "./contact-form.styles.scss";

const ContactForm = () => {
    const [contact, setContact] = useState({
        id: "",
        name: "",
        lastName: "",
        email: "",
        budget: ""
    });
    const [open, setOpen] = useState(false);
    const [disabled, setDisabled] = useState(true);

    const handleInputChange = (ev) => {
        setContact({...contact, [ev.target.id]: ev.target.value});
        if (contact) {
            setDisabled(false);
        }
    }

    const handleSubmit = (ev) => {
        ev.preventDefault();
        if (contact.name.trim() && contact.lastName.trim() && contact.email.trim() && contact.budget.trim()) {
            saveContact({...contact, id: uuidv4()})
                .then(() => {
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


    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }
        setOpen(false);
    };

    return (
        <div>
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
                                <input type="submit" className="btn btn-submit" value="Submit" onSubmit={handleClick}
                                       disabled={disabled}/>
                            </Tooltip>
                        </div>
                        <Snackbar
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            open={open}
                            autoHideDuration={6000}
                            onClose={handleClose}
                            message="Note archived"
                            action={
                                <React.Fragment>
                                    <Button color="secondary" size="small" onClick={handleClose}>
                                        UNDO
                                    </Button>
                                    <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                                        <CloseIcon fontSize="small"/>
                                    </IconButton>
                                </React.Fragment>
                            }
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ContactForm;
