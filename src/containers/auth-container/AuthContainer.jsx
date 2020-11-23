import React from 'react';
import PropTypes from 'prop-types';

import styles from './AuthContainer.module.scss';
import Logo from '../../assets/logo.png';
import Cityimage from '../../assets/bogotalg2.jpg';

export const AuthContainer = (props) => {
  const { children } = props;
  return (
    <div className={styles.container}>
      <figure className={styles.container_img}>
        <img
          src={Cityimage}
          alt="Bogota"
        />
        <div />
      </figure>
      <div className={styles.container_info}>
        <figure className={styles.container_logo}>
          <img
            src={Logo}
            alt="Logo"
          />
        </figure>
        <h3>Treinta</h3>
        <p>¡Aplicación financiera gratuita!</p>
        {children}
      </div>
    </div>
  );
};

AuthContainer.propTypes = {
  children: PropTypes.node.isRequired,
};
