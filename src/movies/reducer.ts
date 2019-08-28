import { EReduxActionTypes } from '../helpers/rootReducer';
import { IReduxGetMovieAction, IReduxGetMoviesAction, IReduxResetMovieAction } from './actions';

export interface IMovie {
  backdrop_path: string;
  id: string;
  overview: string;
  poster_path: string;
  release_date: string;
  title: string;
}

export interface IReduxMoviesState {
  movies: IMovie[];
  moviesLoaded: boolean;
  moviesLoadedAt?: number;
  movie?: IMovie;
  movieLoaded: boolean;
}

const initialState: IReduxMoviesState = {
  movies: [],
  moviesLoaded: false,
  moviesLoadedAt: undefined,
  movie: undefined,
  movieLoaded: false
};

type TMoviesReducerActions = IReduxGetMoviesAction | IReduxGetMovieAction | IReduxResetMovieAction;

export default function(state: IReduxMoviesState = initialState, action: TMoviesReducerActions) {
  switch (action.type) {
    case EReduxActionTypes.GET_MOVIES:
      return { ...state, movies: action.data, moviesLoaded: true, moviesLoadedAt: Date.now() };
    case EReduxActionTypes.GET_MOVIE:
      return { ...state, movie: action.data, movieLoaded: true };
    case EReduxActionTypes.RESET_MOVIE:
      return { ...state, movie: undefined, movieLoaded: false };
    default:
      return state;
  }
}
