import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';

import Home from '~/pages/Home';
import Login from '~/pages/Login';
import { Creators as AuthActions } from '~/store/modules/auth/duck';
import GlobalTheme from '~/styles/global';
import { darkTheme, lightThme } from '~/themes';

import api from '../services/api';
import Route from './Route';

function routes() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.configurations.theme);
  // const theme = 'dark';
  api.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response !== undefined) {
        if (error.response.status === 401) {
          dispatch(AuthActions.signOut());
        }
      }
      return Promise.reject(error.response);
    }
  );
  return (
    <ThemeProvider theme={theme === 'light' ? lightThme : darkTheme}>
      <GlobalTheme />
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/home" isPrivate component={Home} />
      </Switch>
    </ThemeProvider>
  );
}

export default routes;
