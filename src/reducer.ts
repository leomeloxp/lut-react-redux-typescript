export enum EReduxActionTypes {
  TOGGLE_MESSAGE = 'TOGGLE_MESSAGE'
}

export interface IReduxActions {
  type: EReduxActionTypes;
}

export interface IReduxState {
  messageVisibility: boolean;
}

const initialState: IReduxState = {
  messageVisibility: false
};

export default function(state: IReduxState = initialState, action: IReduxActions) {
  const { type } = action;
  switch (type) {
    case EReduxActionTypes.TOGGLE_MESSAGE:
      return { ...state, messageVisibility: !state.messageVisibility };
    default:
      return state;
  }
}
