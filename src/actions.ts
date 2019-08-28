import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { IMovie, IReduxState } from './reducer';

export enum EReduxActionTypes {
  TOGGLE_MESSAGE = 'TOGGLE_MESSAGE',
  GET_MOVIES = 'GET_MOVIES'
}

export interface IReduxBaseAction {
  type: EReduxActionTypes;
}

export interface IReduxToggleMessageAction extends IReduxBaseAction {
  type: EReduxActionTypes.TOGGLE_MESSAGE;
}

export interface IReduxGetMoviesAction extends IReduxBaseAction {
  type: EReduxActionTypes.GET_MOVIES;
  data: IMovie[];
}

export function toggleMessage(): IReduxToggleMessageAction {
  return {
    type: EReduxActionTypes.TOGGLE_MESSAGE
  };
}

export function getMovies(): ThunkAction<
  Promise<IReduxGetMoviesAction>,
  IReduxState,
  undefined,
  IReduxGetMoviesAction
> {
  return async (dispatch: ThunkDispatch<IReduxState, undefined, IReduxGetMoviesAction>) => {
    const res = await fetch(
      'https://api.themoviedb.org/3/discover/movie?api_key=65e043c24785898be00b4abc12fcdaae&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1'
    );
    const movies = await res.json();

    return dispatch({
      type: EReduxActionTypes.GET_MOVIES,
      data: movies.results
    });
  };
}
