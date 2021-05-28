import axios from "axios";

export const getAllContacts = async () => {
    return (await axios.get("http://localhost:3001/contacts")).data;
}

export const saveContact = async contact => {
    return (await axios.post("http://localhost:3001/contacts", contact)).data;
}

export const updateContact = async contact => {
    return (await axios.put(`http://localhost:3001/contacts/${contact.id}`, contact)).data;
}

export const deleteContact = async contactId => {
    await axios.delete(`http://localhost:3001/contacts/${contactId}`);
}
