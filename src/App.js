import { useContext } from 'react';

import { ContactsContext } from './contexts/contacts.context';
import Contacts from './contacts.component';

function App() {
  const { contacts, city } = useContext(ContactsContext);

  return (
    <div>
      <Contacts contacts={contacts} city={city} />
    </div>
  );
}

export default App;
