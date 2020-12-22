import { takeLatest, put, all } from 'redux-saga/effects';

import api from '~/services/api';
import history from '~/services/history';

import { Types } from './duck';

export function* signIn() {
  try {
    // Request para login
    // const {data}  = yield call(api.post, 'auth', {});

    const token = 'asgdjkagsd123r76guysad';
    // Define token que vai no header do axios
    api.defaults.headers.Authorization = `${token}`;

    yield put({
      type: Types.SIGN_IN_SUCCESS,
      token: 'Recebe Token',
    });

    history.push('/home');
  } catch (err) {
    yield put({
      type: Types.SIGN_FAILURE,
    });
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;
  api.defaults.headers.Authorization = `${token}`;
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest(Types.SIGN_IN_REQUEST, signIn),
]);
