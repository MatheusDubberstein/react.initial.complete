import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions({
  signInRequest: [],
  signInSuccess: [],
  signFailure: [],
  signOut: [],
  setToken: [],
});

const INITIAL_STATE = {
  token: null,
  signed: false,
  loading: false,
};

const signInRequest = (state = INITIAL_STATE) => ({
  ...state,
  loading: true,
});

const signInSuccess = (state = INITIAL_STATE, { token }) => ({
  ...state,
  token,
  signed: true,
  loading: false,
});

const signFailure = (state = INITIAL_STATE) => ({
  ...state,
  loading: false,
});

const signOut = (state = INITIAL_STATE) => ({
  ...state,
  token: null,
  signed: false,
});

export default createReducer(INITIAL_STATE, {
  [Types.SIGN_IN_REQUEST]: signInRequest,
  [Types.SIGN_IN_SUCCESS]: signInSuccess,
  [Types.SIGN_FAILURE]: signFailure,
  [Types.SIGN_OUT]: signOut,
});
