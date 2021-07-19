import React, { Component } from 'react';

import shortid from 'shortid';

import styles from './ContactForm.module.scss';

const INITIAL_STATE = {
  name: '',
  number: '',
};

class ContactForm extends Component {
  state = INITIAL_STATE;

  handleChangeForm = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleSubmitForm = event => {
    event.preventDefault();

    const { name, number } = this.state;
    const { onAddContact } = this.props;

    const isValidForm = this.validationFormField();

    if (!isValidForm) return;

    onAddContact({ id: shortid(), name, number });

    this.resetForm();
  };

  validationFormField = () => {
    const { name, number } = this.state;
    const { onUniqueChecked } = this.props;

    if (!name || !number) {
      alert('Some field is empty, please check it!');
      return false;
    }

    return onUniqueChecked(name);
  };

  resetForm = () => this.setState(INITIAL_STATE);

  render() {
    const { name, number } = this.state;

    return (
      <form onSubmit={this.handleSubmitForm}>
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          value={name}
          onChange={this.handleChangeForm}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          className={styles.Input}
        />
        <input
          type="tel"
          name="number"
          placeholder="Enter phone number"
          value={number}
          onChange={this.handleChangeForm}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          className={styles.Input}
        />
        <button type="submit" className={styles.Button}>
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
