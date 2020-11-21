import React from 'react';

import styles from './Login.module.scss';
import Logo from '../../assets/logo.png'
import Cityimage from '../../assets/bogotalg1.jpg'

const Login = () =>{
    return(
        <div className={styles.container}>
            <figure className={styles.container_img}>
                <img
                src={Cityimage}
                alt="Bogota" />
            </figure>
            <div className={styles.container_info}>
                <figure className={styles.container_logo}>
                    <img
                    src={Logo}
                    alt="Logo" />
                </figure>
                <h3>Treinta</h3>
                <p>¡Aplicación financiera gratuita!</p>
                <p>Inicia sesión y conoce los negocios que usan Treinta</p>
                <div>
                    <form>
                        <div>
                            <input type="email" id="email" name="email" autocomplete="email" required placeholder="Correo"/>
                            <label for="email">Correo</label>
                        </div>
                        <div>
                            <input type="password" id="password" name="password" autocomplete="password" required placeholder="Contraseña"/>
                            <label for="password">Contraseña</label>
                        </div>
                        <input type="submit"/>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;