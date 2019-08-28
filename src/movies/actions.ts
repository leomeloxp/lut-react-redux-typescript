import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { EReduxActionTypes, IReduxBaseAction } from '../helpers/rootReducer';
import { IMovie, IReduxMoviesState } from './reducer';

export interface IReduxGetMoviesAction extends IReduxBaseAction {
  type: EReduxActionTypes.GET_MOVIES;
  data: IMovie[];
}
export interface IReduxGetMovieAction extends IReduxBaseAction {
  type: EReduxActionTypes.GET_MOVIE;
  data: IMovie;
}

export interface IReduxResetMovieAction extends IReduxBaseAction {
  type: EReduxActionTypes.RESET_MOVIE;
}

export function getMovies(): ThunkAction<
  Promise<IReduxGetMoviesAction>,
  IReduxMoviesState,
  undefined,
  IReduxGetMoviesAction
> {
  return async (dispatch: ThunkDispatch<IReduxMoviesState, undefined, IReduxGetMoviesAction>) => {
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

export function getMovie(
  id: string
): ThunkAction<Promise<IReduxGetMovieAction>, IReduxMoviesState, undefined, IReduxGetMovieAction> {
  return async (dispatch: ThunkDispatch<IReduxMoviesState, undefined, IReduxGetMovieAction>) => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=65e043c24785898be00b4abc12fcdaae&language=en-US`
    );
    const movie = await res.json();
    return dispatch({
      type: EReduxActionTypes.GET_MOVIE,
      data: movie
    });
  };
}

export function resetMovie(): IReduxResetMovieAction {
  return {
    type: EReduxActionTypes.RESET_MOVIE
  };
}
