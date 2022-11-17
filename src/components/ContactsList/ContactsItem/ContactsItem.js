import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";
// import { deleteContacts } from "redux/contactsReducer";
import { deleteContact } from 'redux/operations';
import { ContactItem, ContactDescription, ContactButton } from "./ContactsItem.styled";

export const ContactsItem = ({name, phone, id}) => {
    const dispatch = useDispatch();

    const handleDeleteContact = () => {
        dispatch(deleteContact(id))
    };
    return(
        <ContactItem>
        <ContactDescription>{name}:</ContactDescription>
        <ContactDescription>{phone}</ContactDescription>
        <ContactButton type="button" onClick={handleDeleteContact}>Delete</ContactButton>
    </ContactItem>
    )
};

ContactsItem.prototype = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
};