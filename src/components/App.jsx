<<<<<<< Updated upstream
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Container } from 'components/App.styled';

import { useSelector } from 'react-redux';
import { getContactsData } from 'redux/contactsSlice';

export const App = () => {
  const { contactsList } = useSelector(getContactsData);

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />

      {!!contactsList.length && (
        <>
          <h2>Contacts</h2>
          <Filter />
        </>
      )}

      <ContactList />
    </Container>
=======
import { Form } from './Form';
import { FormItem } from './FormItem';
import { Filter } from './Filter';
import { useDispatch, useSelector } from 'react-redux';
import { addItems } from 'redux/contactSlice';
import { Wrapper, Title, Subtitle } from './App.styled';

export function App() {

  const contactsValue = useSelector(state => state.contacts.contacts);
  const dispatch = useDispatch();

  const addContact = ({name, number}) => {
    const checkContact = contactsValue.find(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (checkContact) {
      alert(`${name} is already in contacts.`);
      return;
    }

    dispatch(addItems({ name, number }));
  };



  return (
    <Wrapper>
      <Title>Phonebook</Title>
      <Form onSubmit={addContact} />
      <Subtitle>Contacts</Subtitle>
      <Filter/>
      <FormItem />
    </Wrapper>
>>>>>>> Stashed changes
  );
}
