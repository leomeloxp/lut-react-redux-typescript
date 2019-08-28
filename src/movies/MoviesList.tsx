import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { AnyAction, bindActionCreators, Dispatch } from 'redux';
import styled from 'styled-components';
import { AppState } from '../helpers/rootReducer';
import { getMovies } from './actions';
import Movie from './Movie';
import { IMovie } from './reducer';

class MoviesList extends PureComponent<ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>, {}> {
  public componentDidMount() {
    const { getMovies, isLoaded, moviesLoadedAt } = this.props;
    const oneHour = 60 * 60 * 1000;
    if (!isLoaded || !moviesLoadedAt || Date.now() - moviesLoadedAt > oneHour) {
      getMovies();
      //this.props.getMovies();
    }
  }

  public render() {
    const { movies, isLoaded } = this.props;
    if (!isLoaded) {
      return <h1>Loading...</h1>;
    }
    return (
      <MovieGrid>
        {movies.map((movie: IMovie) => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </MovieGrid>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  movies: state.movies.movies,
  isLoaded: state.movies.moviesLoaded,
  moviesLoadedAt: state.movies.moviesLoadedAt
});

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) =>
  bindActionCreators(
    {
      getMovies
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MoviesList);

const MovieGrid = styled.div`
  display: grid;
  padding: 1rem;
  grid-template-columns: repeat(6, 1fr);
  grid-row-gap: 1rem;
`;
