import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";
import { deleteContacts } from "redux/contactsReducer";
import { ContactItem, ContactDescription, ContactButton } from "./ContactsItem.styled";

export const ContactsItem = ({name, number, id}) => {
    const dispatch = useDispatch();

    const handleDeleteContact = () => {
        dispatch(deleteContacts(id))
    };
    return(
        <ContactItem>
        <ContactDescription>{name}:</ContactDescription>
        <ContactDescription>{number}</ContactDescription>
        <ContactButton type="button" onClick={handleDeleteContact}>Delete</ContactButton>
    </ContactItem>
    )
};

ContactsItem.prototype = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
};