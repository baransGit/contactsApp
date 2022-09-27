import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const ContactsContext = createContext({
  contacts: [],
  address: [],
});
export const ContactsProvider = ({ children }) => {
  const [contacts, setContacts] = useState([]);
  const [city, setCity] = useState([]);
  useEffect(() => {
    const getContacts = async () => {
      const baseURL = 'https://jsonplaceholder.typicode.com/users';
      const response = await axios.get(baseURL);
      const data = response.data;
      console.log('data', data);
      setContacts(data);
    };
    getContacts();
  }, []);
  useEffect(() => {
    const getCity = async () => {
      const cityList = contacts.map((contact) => {
        return contact.address.city;
      });
      console.log(cityList);
      setCity(cityList);
    };
    getCity();
  }, [contacts]);
  const value = { contacts,city };

  return (
    <ContactsContext.Provider value={value}>
      {children}
    </ContactsContext.Provider>
  );
};
