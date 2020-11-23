import React from 'react';
import styles from './Main.module.scss';
import { Header, Maps, SubmitButton } from '../../components/index';
import Img from '../../assets/DobleScreen.png';
import Img2 from '../../assets/pymeImage.jpg';
import { Time, Automatic, Control } from '../../icons';

export const Main = () => {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.container_banner}>
        <figure>
          <img
            src={Img2}
            alt="Pyme"
            className={styles.imageBanner}
          />
          <div className={styles.text}>
            <h2>Treinta - ¡Aplicación financiera gratuita!</h2>
            <p>Ayuda a tu negocio a crecer más con Treinta,</p>
            <p>
              la aplicación
              {' '}
              <strong>financiera gratuita.</strong>
            </p>
            <p>¡Treinta es gratis, seguro y fácil de usar!</p>
            <a
              target="_blank"
              href="https://play.google.com/store/apps/details?id=com.treintaapp"
              rel="noreferrer"
            >
              <SubmitButton
                type="button"
                value="Descargala ya"
              />
            </a>
          </div>
          <div className={styles.layer} />
        </figure>
      </div>
      <h1 className={styles.mapTitte}>Estos negocios ya usan Treinta</h1>
      <Maps
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&key=${process.env.REACT_APP_GOOGLE_MAPS_KEY}`}
        containerElement={<div style={{ height: '500px', marginTop: '30px' }} />}
        mapElement={<div style={{ height: '100%' }} />}
        loadingElement={<p>Cargando</p>}
      />
      <div className={styles.container_quote}>
        <p className={styles.quote}>
          “Al principio hacía la contabilidad de forma muy manual
          pero me daba pereza escribir todo manualmente.
          Desde que uso Treinta, ¡todo se ha vuelto más fácil!”
        </p>
        <h3>Sebastian Herrera - Comerciante de frutas y verduras</h3>
      </div>
      <div className={styles.container_info}>
        <div className={styles.container_cards}>
          <h1>La contabilidad de tu negocio en tu mano</h1>
          <h2>Gratis, seguro y fácil</h2>
          <div className={styles.cards}>
            <div>
              <Control
                size={100}
              />
              <h4>Obten el control</h4>
              <p>
                Registra diligentemente las ventas, los gastos y las cuentas por cobrar y
                calcula la utilidad de tu negocio fácilmente.
              </p>
            </div>
            <div>
              <Automatic
                size={100}
              />
              <h4>Automatiza tu negocio</h4>
              <p>
                Sin complicaciones de cálculos manuales.
                Todos los números se calculan automáticamente.
              </p>
            </div>
            <div>
              <Time
                size={100}
              />
              <h4>Ahorra tiempo</h4>
              <p>
                Ten más libertad para administrar tu tiempo en el negocio,
                pasar más tiempo en familia y disfrutar de tus pasiones.
              </p>
            </div>
          </div>
        </div>
        <figure className={styles.diveces}>
          <img
            src={Img}
            alt="Phone"
          />
        </figure>
      </div>
    </div>
  );
};
