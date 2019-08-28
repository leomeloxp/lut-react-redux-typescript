import { combineReducers } from 'redux';
import movies from '../movies/reducer';
import toggle from '../toggle/reducer';

export enum EReduxActionTypes {
  GET_MOVIE = 'GET_MOVIE',
  GET_MOVIES = 'GET_MOVIES',
  RESET_MOVIE = 'RESET_MOVIE',
  TOGGLE_MESSAGE = 'TOGGLE_MESSAGE'
}

export interface IReduxBaseAction {
  type: EReduxActionTypes;
}

const rootReducer = combineReducers({
  toggle,
  movies
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
