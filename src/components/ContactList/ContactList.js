import React from 'react';
import PropTypes from 'prop-types';
import ElementContactItem from 'components/ElementContactItem/';

const ContactList = ({ onFiltred, onDeleteContact }) => {
 
  return (
    <ul>
      {onFiltred().map(contact => (
        <ElementContactItem
          key={contact.id}
          {...contact}
          onDeleteContact={onDeleteContact}
        />
      ))}
    </ul>
  );
};

ContactList.propTypes = { 
  onDeleteContact: PropTypes.func.isRequired,
  onFiltred: PropTypes.func,
};

export default ContactList;
