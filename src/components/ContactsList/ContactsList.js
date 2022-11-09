// import PropTypes from 'prop-types';
import { useSelector } from "react-redux";
import { Box } from "../Box";
import { ContactsItem } from "./ContactsItem/ContactsItem";
import { getContacts } from "redux/selectors";

export const ContactsList = () => {
    const contacts = useSelector(getContacts)
    return (
        <Box as="ul">
            {contacts.map(({name, number, id}) => (
                <ContactsItem key={id}
                    id={id} 
                    name={name} 
                    number={number} 
                    // onDeleteContact={onDeleteContact}
                    />
            ))}
        </Box>
    )
};




// import PropTypes from 'prop-types';
// import { Box } from "../Box";
// import { ContactsItem } from "./ContactsItem/ContactsItem";

// export const ContactsList = ({contacts, onDeleteContact}) => {
//     return (
//         <Box as="ul">
//             {contacts.map(({name, number, id}) => (
//                 <ContactsItem key={id}
//                     id={id} 
//                     name={name} 
//                     number={number} 
//                     onDeleteContact={onDeleteContact}/>
//             ))}
//         </Box>
//     )
// };

// ContactsList.prototype = {
//     contacts: PropTypes.arrayOf(PropTypes.exact({
//         name: PropTypes.string.isRequired,
//         number: PropTypes.string.isRequired,
//         id: PropTypes.string.isRequired,
//     })).isRequired,
//     onDeleteContact: PropTypes.func.isRequired,
// };
