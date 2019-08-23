export enum EReduxActionTypes {
  TOGGLE_MESSAGE = 'TOGGLE_MESSAGE'
}

export interface IReduxBaseAction {
  type: EReduxActionTypes;
}

export interface IReduxToggleMessageAction extends IReduxBaseAction {
  type: EReduxActionTypes.TOGGLE_MESSAGE;
}

export function toggleMessage(): IReduxBaseAction {
  return {
    type: EReduxActionTypes.TOGGLE_MESSAGE
  };
}
