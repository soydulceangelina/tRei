import React from 'react';
import PropTypes from 'prop-types';
import styles from './TextInput.module.scss';

export const TextInput = (props) => {
  const {
    type,
    id,
    autoComplete,
    required,
    placeholder,
    onChange,
    label,
    value,
  } = props;
  return (
    <div className={styles.form_group}>
      <input
        type={type}
        id={id}
        autoComplete={autoComplete}
        required={required}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

TextInput.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  autoComplete: PropTypes.string.isRequired,
  required: PropTypes.bool,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

TextInput.defaultProps = {
  required: false,
};
