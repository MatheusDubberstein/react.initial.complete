import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions({
  setTheme: ['theme'],
});

const INITIAL_STATE = {
  theme: 'light',
};

const setTheme = (state = INITIAL_STATE, { theme }) => ({
  ...state,
  theme,
});

export default createReducer(INITIAL_STATE, {
  [Types.SET_THEME]: setTheme,
});
