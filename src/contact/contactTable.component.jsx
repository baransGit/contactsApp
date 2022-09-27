import './contactTable.style.scss';
import { Link } from 'react-router-dom';

const ContactTable = ({ contact, city }) => {
  return (
    <div className="col">
      <h2> {contact.name}</h2>

      <dl className="contact-list ">
        <div className="contact-list__item">
          <Link
            to="#"
            className="c-icon-button "
            onClick={() => (window.location = `mailto:${contact.email}`)}
          >
            <span className="c-icon-button__label">{contact.email}</span>
          </Link>
        </div>

        <span className=" c-icon-button ">
          <span className="c-icon-button__label" aria-hidden="true">
            City
          </span>
          {city}
        </span>

        <span className="c-icon-button ">
          <span className="c-icon-button__label" aria-hidden="true">
            Phone
          </span>
          {contact.phone}
        </span>
      </dl>
    </div>
  );
};

export default ContactTable;
