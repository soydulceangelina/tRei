import React from 'react';
import PropTypes from 'prop-types';
import styles from './SubmitButton.module.scss';

export const SubmitButton = (props) => {
  const {
    type,
    value,
  } = props;
  return (
    <input
      className={styles.submit_button}
      type={type}
      value={value}
    />
  );
};

SubmitButton.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
