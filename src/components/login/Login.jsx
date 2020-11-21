import React, { useState } from 'react';
import { useHistory, Redirect, Link } from 'react-router-dom';
import { useUser } from 'reactfire';

import { auth } from '../../firebase-config';
import styles from './Login.module.scss';
import Logo from '../../assets/logo.png';
import Cityimage from '../../assets/bogotalg1.jpg';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { push } = useHistory();
  const user = useUser();

  const loginUser = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, password)
      .then(() => {
        push('/');
      })
      .catch(() => {
        alert('Correo contraseña no valida');
      });
  };

  if (user.data !== undefined && user.data !== null) {
    return <Redirect to="/" />;
  }

  return (
    <div className={styles.container}>
      <figure className={styles.container_img}>
        <img
          src={Cityimage}
          alt="Bogota"
        />
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
        <p>Inicia sesión y conoce los negocios que usan Treinta</p>
        <form onSubmit={loginUser}>
          <div className={styles.form_group}>
            <input type="email" id="email" autoComplete="email" required placeholder="Correo" onChange={(ev) => setEmail(ev.target.value)} />
            <label htmlFor="email">Correo</label>
          </div>
          <div className={styles.form_group}>
            <input type="password" id="password" autoComplete="password" required placeholder="Contraseña" onChange={(ev) => setPassword(ev.target.value)} />
            <label htmlFor="password">Contraseña</label>
          </div>
          <input type="submit" value="Iniciar sesión" />
        </form>
        <div>
          <p>¿Nuevo usuario?</p>
          <Link to="/signup">
            <h3>Regístrate</h3>
          </Link>
        </div>
      </div>
    </div>
  );
};
