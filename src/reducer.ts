import { EReduxActionTypes, IReduxBaseAction } from './actions';

export interface IReduxState {
  messageVisibility: boolean;
}

const initialState: IReduxState = {
  messageVisibility: false
};

export default function(state: IReduxState = initialState, action: IReduxBaseAction) {
  const { type } = action;
  switch (type) {
    case EReduxActionTypes.TOGGLE_MESSAGE:
      return { ...state, messageVisibility: !state.messageVisibility };
    default:
      return state;
  }
}
