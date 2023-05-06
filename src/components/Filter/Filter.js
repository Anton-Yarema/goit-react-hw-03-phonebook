import React from 'react';
import PropTypes from 'prop-types';
import css from './filter.module.css'

const Filter = ({ value, onChange }) => (
  <label className={css.formField}>
    Find contacts by name
    <input className={css.formFieldInput} type="text" name="name" value={value} onChange={onChange} />
  </label>
);

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
}

export default Filter;
