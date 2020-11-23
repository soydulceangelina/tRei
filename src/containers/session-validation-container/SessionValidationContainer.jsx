import React from 'react';
import { Redirect, useLocation } from 'react-router-dom';
import { useUser } from 'reactfire';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';

export const SessionValidationContainer = (props) => {
  const { children } = props;
  const user = useUser();
  const { pathname } = useLocation();
  const redirectCondition = pathname === '/' ? user.data === null : user.data !== null;
  const pathToRedirect = pathname === '/' ? '/login' : '/';

  if (!user.hasEmitted) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100vw',
        height: '100vh',
      }}
      >
        <Loader
          type="Oval"
          color="#FED20A"
          height={100}
          width={100}
        />
      </div>
    );
  }

  if (redirectCondition) {
    return <Redirect to={pathToRedirect} />;
  }

  return children;
};

SessionValidationContainer.propTypes = {
  children: PropTypes.node.isRequired,
};
