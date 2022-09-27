import ContactTable from './contact/contactTable.component';

const Contacts = ({ contacts, city }) => {
  return contacts.map((contact, index) => (
    <ContactTable key={contact.id} contact={contact} city={city[index]} />
  ));
};

export default Contacts;
