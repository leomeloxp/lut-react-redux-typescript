import { combineReducers } from 'redux';
import movies from '../movies/reducer';
import toggle from '../toggle/reducer';

export enum EReduxActionTypes {
  TOGGLE_MESSAGE = 'TOGGLE_MESSAGE',
  GET_MOVIES = 'GET_MOVIES'
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
