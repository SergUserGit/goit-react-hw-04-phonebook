import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import React, { useState } from 'react';
import { nanoid } from 'nanoid';

const App = () => {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');
  const [contactsFilter, setContactsFilter] = useState([]);

  const formSubmitHandler = data => {
    // contactsFilter.splice(0, contactsFilter.length);
    setContactsFilter(state => []);
    const findElem = contacts.filter(
      contact => contact.name.toUpperCase() === data.name.toUpperCase()
    );
    if (findElem.length > 0) {
      alert(data.name + ' is already in contacts.');
      return;
    }
    const newObj = { id: nanoid(), name: data.name, number: data.number };
    setContacts(state => [...state, newObj]);
  };

  const handleFilterChange = e => {
    //  contactsFilter.splice(0, contactsFilter.length);
    setContactsFilter(state => []);
    //   const { name, value } = e.target;
    const value = e.currentTarget.value;
    setFilter(state => value);
    console.log(filter);
    // this.setState({ [name]: value });
    const filterArray = contacts.filter(contact =>
      contact.name.toUpperCase().includes(filter.toUpperCase())
    );
    if (filterArray.length > 0) {
      for (const i of filterArray) {
        setContactsFilter(state => [...state, i]);
        //contactsFilter.push(i);
      }
    }
  };

  const handleDeleteContact = el => {
    //  this.contactsFilter.splice(0, this.contactsFilter.length);
    //  const findElement = this.state.contacts.find(
    //    findEl => findEl.id === el.target.dataset.id
    //  );
    //  if (findElement !== undefined) {
    //    const indexElement = this.state.contacts.indexOf(findElement);
    //    if (indexElement !== -1) {
    // this.setState(prevState => ({
    //  contacts: prevState.contacts.filter(
    //    elem => elem.id !== el.target.dataset.id
    //   ),
    //   }));
    //   }
    //  }
  };

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        paddingLeft: '50px',
        fontSize: 20,
        color: '#010101',
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm onSubmit={formSubmitHandler} />
      <h2>Contacts</h2>
      <Filter handleFilterChange={handleFilterChange} />
      <ContactList
        handleDeleteContact={handleDeleteContact}
        contacts={contactsFilter.length > 0 ? contactsFilter : contacts}
      />
    </div>
  );
};
//class App extends Component {
//  state = {
//    contacts: [
//      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//   ],
//   filter: '',
// };

// contactsFilter = [];

// handleDeleteContact = el => {
//  this.contactsFilter.splice(0, this.contactsFilter.length);

//  const findElement = this.state.contacts.find(
//    findEl => findEl.id === el.target.dataset.id
//  );
//  if (findElement !== undefined) {
//    const indexElement = this.state.contacts.indexOf(findElement);
//    if (indexElement !== -1) {
//      this.setState(prevState => ({
//        contacts: prevState.contacts.filter(
//         elem => elem.id !== el.target.dataset.id
//       ),
//     }));
//   }
// }
//};

//handleFilterChange = e => {
//  this.contactsFilter.splice(0, this.contactsFilter.length);

// const { name, value } = e.target;
// this.setState({ [name]: value });

// const filterArray = this.state.contacts.filter(contact =>
//   contact.name.toUpperCase().includes(value.toUpperCase())
// );

//if (filterArray.length > 0) {
//  for (const i of filterArray) {
//    this.contactsFilter.push(i);
//  }
//}
//};

//formSubmitHandler = data => {
//  this.contactsFilter.splice(0, this.contactsFilter.length);
//  const findElem = this.state.contacts.filter(
//    contact => contact.name.toUpperCase() === data.name.toUpperCase()
//  );
//  if (findElem.length > 0) {
//    alert(data.name + ' is already in contacts.');
//    return;
// }

// const newObj = { id: nanoid(), name: data.name, number: data.number };

//this.setState(prevState => ({
//  contacts: [...prevState.contacts, newObj],
// }));
//};

//componentDidMount() {
//  const contacts = localStorage.getItem('contacts');
//  const parseContacts = JSON.parse(contacts);
//   if (parseContacts) {
//     this.setState({ contacts: parseContacts });
//   }
// }

// componentDidUpdate(prevProps, prevState) {
//   if (this.state.contacts !== prevState.contacts) {
//     localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//   }
//  }

//render() {
//   return (
//   <div
//      style={{
//        height: '100vh',
//        display: 'flex',
//       flexDirection: 'column',
//       paddingLeft: '50px',
//       fontSize: 20,
//       color: '#010101',
//     }}
//    >
//      <h1>Phonebook</h1>
//      <ContactForm onSubmit={this.formSubmitHandler} />
//     <h2>Contacts</h2>
//    <Filter handleFilterChange={this.handleFilterChange} />
//     <ContactList
//        handleDeleteContact={this.handleDeleteContact}
//       contacts={
//         this.contactsFilter.length > 0
//           ? this.contactsFilter
//           : this.state.contacts
//      }
//   />
//  </div>
//   );
// }
//}

export default App;
