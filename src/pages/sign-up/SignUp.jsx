import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import { auth } from '../../firebase-config';
import styles from './SignUp.module.scss';
import { TextInput, SubmitButton } from '../../components/index';
import { AuthContainer } from '../../containers/index';

export const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { push } = useHistory();
  const MySwal = withReactContent(Swal);

  const signUpUser = (e) => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(email, password)
      .then((res) => {
        push('/');
        MySwal.fire(
          'Registro exitoso',
          'Bienvenido a tRei',
          'success',
        );
      })
      .catch((err) => {
        MySwal.fire(
          'Error en registro',
          'Intente con otro correo, o una contraseña mas larga',
          'error',
        );
      });
  };

  return (
    <AuthContainer>
      <div className={styles.auth_container}>
        <p className={styles.note}>Regístrate y conoce los negocios que usan Treinta</p>
        <form onSubmit={signUpUser}>
          <TextInput
            type="email"
            id="email"
            autoComplete="email"
            required
            placeholder="Correo"
            onChange={(ev) => setEmail(ev.target.value)}
            value={email}
            label="Correo"
          />
          <TextInput
            type="password"
            id="password"
            autoComplete="password"
            required
            placeholder="Contraseña"
            onChange={(ev) => setPassword(ev.target.value)}
            value={password}
            label="Contraseña"
          />
          <SubmitButton
            type="submit"
            value="Regístrate"
          />
        </form>
        <div className={styles.redirect}>
          <p className={styles.note}>¿Ya tienes cuenta?</p>
          <Link to="/login">
            <h3 className={styles.highlight}>Inicia sesión</h3>
          </Link>
        </div>
      </div>
    </AuthContainer>
  );
};
