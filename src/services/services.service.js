import axios from "axios";

export const getAllContacts = async () => {
    return (await axios.get("http://localhost:3001/contacts")).data;
}

export const saveContact = async contact => {
    return (await axios.post("http://localhost:3001/contacts", contact)).data;
}
