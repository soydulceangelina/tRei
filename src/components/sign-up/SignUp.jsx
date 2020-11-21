import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase-config';

import styles from './SignUp.module.scss';
import Logo from '../../assets/logo.png';
import Cityimage from '../../assets/bogotalg1.jpg';

export const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signUpUser = (e) => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(email, password)
      .then((res) => alert(`Registrado ${res.user.email}`));
  };

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
        <form onSubmit={signUpUser}>
          <div className={styles.form_group}>
            <input type="text" id="name" autoComplete="name" required placeholder="Nombre" />
            <label htmlFor="name">Nombre</label>
          </div>
          <div className={styles.form_group}>
            <input type="email" id="email" autoComplete="email" required placeholder="Correo" onChange={(ev) => setEmail(ev.target.value)} />
            <label htmlFor="email">Correo</label>
          </div>
          <div className={styles.form_group}>
            <input type="password" id="password" autoComplete="password" required placeholder="Contraseña" onChange={(ev) => setPassword(ev.target.value)} />
            <label htmlFor="password">Contraseña</label>
          </div>
          <input type="submit" value="Regístrate" />
        </form>
        <div>
          <p>¿Ya tienes cuenta?</p>
          <Link to="/login">
            <h3>Inicia sesión</h3>
          </Link>
        </div>
      </div>
    </div>
  );
};
