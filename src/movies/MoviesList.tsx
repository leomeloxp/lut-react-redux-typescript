import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { AnyAction, bindActionCreators, Dispatch } from 'redux';
import styled from 'styled-components';
import { AppState } from '../helpers/rootReducer';
import { getMovies } from './actions';
import Movie from './Movie';
import { IMovie } from './reducer';

class MoviesList extends PureComponent<{ movies: IMovie[]; getMovies: typeof getMovies }, {}> {
  public componentDidMount() {
    const { getMovies } = this.props;
    getMovies();
    //this.props.getMovies();
  }

  public render() {
    const { movies } = this.props;
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
  movies: state.movies.movies
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
