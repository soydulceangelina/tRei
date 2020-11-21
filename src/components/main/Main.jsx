import React from 'react';
import { Redirect } from 'react-router-dom';

import { useUser } from 'reactfire';
// import styles from './Main.module.scss';
import { Header } from '../header/Header';

export const Main = () => {
  const user = useUser();
  console.log('user', user.data);

  if (user.data === undefined) {
    return <Redirect to="/login" />;
  }

  return (
    <div>
      <Header />
    </div>
  );
};
