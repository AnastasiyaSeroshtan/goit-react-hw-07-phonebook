import { useSelector } from "react-redux";
import { Box } from "../Box";
import { ContactsItem } from "./ContactsItem/ContactsItem";
// import { getContacts } from "redux/selectors";
import { getContacts, getFilterContacts } from "redux/selectors";



export const ContactsList = () => {
    const contacts = useSelector(getContacts);
  
    const filter = useSelector(getFilterContacts);

    const getVisibleContacts = () => {
            const normalizedFilter = filter.toLocaleLowerCase();
            return (
              contacts.filter(contact => 
                contact.name.toLocaleLowerCase().includes(normalizedFilter))
            )
          }; 

    const visibleContacts = filter ? getVisibleContacts() : contacts;
    
    return (
        <Box as="ul">
            {visibleContacts.map(({name, phone, id}) => (
                <ContactsItem key={id}
                    id={id} 
                    name={name} 
                    phone={phone} />
            ))}
        </Box>
    )
};
