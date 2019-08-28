/* eslint react/no-did-mount-set-state: 0 */
import React, { Component } from 'react';
import Overdrive from 'react-overdrive';
import { connect } from 'react-redux';
import { AnyAction, bindActionCreators, Dispatch } from 'redux';
import styled from 'styled-components';
import { AppState } from '../helpers/rootReducer';
import { getMovie, resetMovie } from './actions';
import { Poster } from './Movie';

const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';
const BACKDROP_PATH = 'http://image.tmdb.org/t/p/w1280';

class MovieDetail extends Component<ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>, {}> {
  public componentDidMount() {
    const { match } = this.props as any;
    const { getMovie } = this.props;

    getMovie(match.params.id);
    //this.props.getMovie(match.params.id);
  }

  public componentWillUnmount() {
    this.props.resetMovie();
  }

  public render() {
    const { movie } = this.props;
    console.log({ movie });

    if (!movie || !movie.id) {
      return null;
    }

    return (
      <MovieWrapper backdrop={`${BACKDROP_PATH}${movie.backdrop_path}`}>
        <MovieInfo>
          <Overdrive id={`${movie.id}`}>
            <Poster src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title} />
          </Overdrive>
          <div>
            {movie.title ? <h1>Hello</h1> : <h1>Hi</h1>}
            <h1>{movie.title}</h1>
            <h3>{movie.release_date}</h3>
            <p>{movie.overview}</p>
          </div>
        </MovieInfo>
      </MovieWrapper>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  movie: state.movies.movie,
  isLoaded: state.movies.movieLoaded
});

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) =>
  bindActionCreators(
    {
      getMovie,
      resetMovie
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieDetail);

const MovieWrapper = styled.div<{ backdrop: string }>`
  position: relative;
  padding-top: 50vh;
  background: url(${props => props.backdrop}) no-repeat;
  background-size: cover;
`;

const MovieInfo = styled.div`
  background: white;
  text-align: left;
  padding: 2rem 10%;
  display: flex;
  > div {
    margin-left: 20px;
  }
  img {
    position: relative;
    top: -5rem;
  }
`;
