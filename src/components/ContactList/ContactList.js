import PropTypes from 'prop-types';

import styles from './ContactList.module.scss';

const ContactListItem = ({ id, name, number, onRemove }) => {
  return (
    <li>
      {name}: {number}{' '}
      <button onClick={() => onRemove(id)} className={styles.Button}>
        delete
      </button>
    </li>
  );
};

const ContactsList = ({ contacts, onRemove }) => {
  if (contacts.length === 0) return null;
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <ContactListItem
          key={id}
          name={name}
          number={number}
          onRemove={() => onRemove(id)}
        />
      ))}
    </ul>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default ContactsList;
