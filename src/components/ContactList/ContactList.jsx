import ContactItem from 'components/ContactItem/ContactItem';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

function ContactList() {
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul>
      {filteredContacts.map((contact) => (
        <ContactItem
          key={contact.id}
          name={contact.name}
          number={contact.number}
          onDeleteContact={() => dispatch(deleteContact(contact.id))}
        />
      ))}
    </ul>
  );
}

export default ContactList;


