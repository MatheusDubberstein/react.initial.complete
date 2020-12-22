import React from 'react';
import { useDispatch } from 'react-redux';

import history from '~/services/history';
import { Creators as AuthActions } from '~/store/modules/auth/duck';

function login() {
  const dispatch = useDispatch();
  function toHome() {
    dispatch(AuthActions.signInSuccess());
    history.push('/home');
  }
  return (
    <div>
      login
      <button type="button" onClick={toHome}>
        Home
      </button>
    </div>
  );
}

export default login;
