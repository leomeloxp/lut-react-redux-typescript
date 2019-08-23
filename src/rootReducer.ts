import { combineReducers } from 'redux';
import message from './reducer';

const rootReducer = combineReducers({
  message
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
