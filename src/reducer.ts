import { EReduxActionTypes, IReduxBaseAction, IReduxGetMoviesAction } from './actions';

export interface IMovie {
  // TODO
}

export interface IReduxState {
  messageVisibility: boolean;
  movies: IMovie[];
}

const initialState: IReduxState = {
  messageVisibility: false,
  movies: []
};

export default function(state: IReduxState = initialState, action: IReduxBaseAction) {
  const { type } = action;
  switch (type) {
    case EReduxActionTypes.TOGGLE_MESSAGE:
      return { ...state, messageVisibility: !state.messageVisibility };
    case EReduxActionTypes.GET_MOVIES:
      const { data: movies } = action as IReduxGetMoviesAction;
      return { ...state, movies };
    default:
      return state;
  }
}
