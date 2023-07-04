import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { getContacts, getFilter } from '../../redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  // console.log(contacts);
  const filter = useSelector(getFilter);
  // console.log(filter);
  const dispatch = useDispatch();

  const filterContacts = () => {
    if (filter === '') {return contacts;}
    else {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );
    }
  };

  const getFilterContacts = filterContacts();

  return (
    <ul>
    {getFilterContacts.map(({ id, name, number }) => (
    <li key = {id}>{name}: {number}
    <button type = "button" onClick = {() => dispatch(deleteContact(id))}>Delete</button>
    </li>))}
    </ul>
  );
}