import React, { Component } from 'react';

import ContactForm from './ContactForm';
import ContactsList from './ContactList';
import Filter from './Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],

    filter: '',
  };

  handleAddContact = newContact =>
    this.setState(({ contacts }) => ({ contacts: [...contacts, newContact] }));

  handleCheckUniqueContact = name => {
    const { contacts } = this.state;

    const isExistsContact = !!contacts.find(contact => contact.name === name);

    isExistsContact && alert(`${name} is already in contacts`);

    return !isExistsContact;
  };

  handleRemoveContact = id =>
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== id),
    }));

  handleFilterChange = filter => this.setState({ filter });

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();

    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm
          onAddContact={this.handleAddContact}
          onUniqueChecked={this.handleCheckUniqueContact}
        />
        <h2>Contacts</h2>
        <Filter filter={filter} onChange={this.handleFilterChange} />
        <ContactsList
          contacts={visibleContacts}
          onRemove={this.handleRemoveContact}
        />
      </>
    );
  }
}

export default App;
