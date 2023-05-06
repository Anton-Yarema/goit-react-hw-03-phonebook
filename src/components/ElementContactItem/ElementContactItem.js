import React from "react";
import css from './elementContactItem.module.css'
import PropTypes from 'prop-types';

const ElementContactItem = ({ id, name, number, onDeleteContact }) => (
  <li className={css.contactsItem} key={id}>
    {name}: {number}
    <button className={css.btnBlockItem} type="submit" onClick={() => onDeleteContact(id)}>
      delete
    </button>
  </li>
);

ElementContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ElementContactItem;