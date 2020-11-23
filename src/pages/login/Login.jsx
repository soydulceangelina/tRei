import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { auth } from '../../firebase-config';
import styles from './Login.module.scss';
import { TextInput, SubmitButton } from '../../components/index';
import { AuthContainer } from '../../containers/index';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { push } = useHistory();
  const MySwal = withReactContent(Swal);

  const loginUser = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, password)
      .then(() => {
        push('/');
      })
      .catch(() => {
        MySwal.fire(
          'Error',
          'Correo o contraseña invalidos',
          'error',
        );
      });
  };

  return (
    <div>
      <AuthContainer>
        <div className={styles.auth_container}>
          <p className={styles.note}>Inicia sesión y conoce los negocios que usan Treinta</p>
          <form onSubmit={loginUser}>
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
              value="Iniciar sesión"
            />
          </form>
          <div className={styles.redirect}>
            <p className={styles.note}>¿Nuevo usuario?</p>
            <Link to="/signup">
              <h3 className={styles.highlight}>Regístrate</h3>
            </Link>
          </div>
        </div>
      </AuthContainer>
    </div>
  );
};
