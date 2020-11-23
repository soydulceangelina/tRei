import React from 'react';
import { auth } from '../../firebase-config';

import styles from './Header.module.scss';
import Logo from '../../assets/headerLogo.png';

export const Header = () => {
  const logOut = () => {
    auth.signOut()
      .then(() => {
        window.location.reload();
      });
  };

  return (
    <div className={styles.container}>
      <figure className={styles.container_logo}>
        <img
          src={Logo}
          alt="Logo"
          className={styles.headerImage}
        />
      </figure>
      <button onClick={logOut} type="button">Cerrar sesión</button>
    </div>
  );
};
