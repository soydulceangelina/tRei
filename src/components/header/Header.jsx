import React from 'react';
import { useHistory } from 'react-router-dom';
import { auth } from '../../firebase-config';

import styles from './Header.module.scss';
import Logo from '../../assets/logo.png';

export const Header = () => {
  const { push } = useHistory();

  const logOut = () => {
    auth.signOut()
      .then(() => {
        push('/login');
      });
  };

  return (
    <div>
      <figure className={styles.container_logo}>
        <img
          src={Logo}
          alt="Logo"
        />
      </figure>
      <button onClick={logOut} type="button">Cerrar sesión</button>
    </div>
  );
};
