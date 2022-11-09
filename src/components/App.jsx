// import { useState, useEffect} from "react";
import { Box } from "./Box";
import { Form } from "./Form/Form";
import { ContactsList } from "./ContactsList/ContactsList";
// import { Filter } from "./Filter/Filter";
import { Header, Title } from "./Title.styled";

export const App = () => {

  return (
    <Box bg="muted" p={3} border="normal" borderColor="lightGray" borderRadius="normal" width="25%"  boxShadow="0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16)" textAlign="center" margin="0 auto">
      <Header>Phonebook</Header>
      <Form />
      <Title>Contacts</Title>
        {/* <Filter value={filter} onChange={changeFilter}/> */}
        <ContactsList />
    </Box>
  );
};



// import { useState, useEffect} from "react";
// import { Box } from "./Box";
// import { Form } from "./Form/Form";
// import { ContactsList } from "./ContactsList/ContactsList";
// import { Filter } from "./Filter/Filter";
// import { Header, Title } from "./Title.styled";

// export const App = () => {
//   const [contacts, setContacts] = useState(() => {
//     return JSON.parse(window.localStorage.getItem('contacts')) ?? []
//   });
//   const [filter, setFilter] = useState('');

//   useEffect(() => {
//     window.localStorage.setItem('contacts', JSON.stringify(contacts))
//   }, [contacts]);

//   const addContact = (newContact) => {
//     const foundContact = contacts.find(contact => contact.name === newContact.name);
    
//     (foundContact) 
//     ? window.alert( `${newContact.name} is alredy in contacts`)
//     : setContacts(prevState => [newContact, ...prevState])
//   };

//   const deleteContact = (contactId) => {
//     setContacts(prevState => prevState.filter(contact => contact.id !== contactId))
//   };

//   const changeFilter = (e) => {
//     setFilter(e.currentTarget.value)
//   };

//   const getVisibleContacts = () => {
//     const normalizedFilter = filter.toLocaleLowerCase();
//     return (
//       contacts.filter(contact => 
//         contact.name.toLocaleLowerCase().includes(normalizedFilter))
//     )
//   };

//   const visibleContacts = getVisibleContacts();
//   return (
//     <Box bg="muted" p={3} border="normal" borderColor="lightGray" borderRadius="normal" width="25%"  boxShadow="0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
//     1px 4px 6px rgba(0, 0, 0, 0.16)" textAlign="center" margin="0 auto">
//       <Header>Phonebook</Header>
//       <Form onSubmit={addContact}/>
//       <Title>Contacts</Title>
//         <Filter value={filter} onChange={changeFilter}/>
//         <ContactsList contacts={visibleContacts} onDeleteContact={deleteContact}/>
//     </Box>
//   );
// };