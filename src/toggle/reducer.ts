import { EReduxActionTypes } from '../helpers/rootReducer';
import { IReduxToggleMessageAction } from './actions';

export interface IReduxMessageState {
  messageVisibility: boolean;
}

const initialState: IReduxMessageState = {
  messageVisibility: false
};

export default function(state: IReduxMessageState = initialState, action: IReduxToggleMessageAction) {
  const { type } = action;
  switch (type) {
    case EReduxActionTypes.TOGGLE_MESSAGE:
      return { ...state, messageVisibility: !state.messageVisibility };
    default:
      return state;
  }
}
