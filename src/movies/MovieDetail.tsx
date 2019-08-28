/* eslint react/no-did-mount-set-state: 0 */
import React, { Component } from 'react';
import Overdrive from 'react-overdrive';
import styled from 'styled-components';
import { Poster } from './Movie';
import { IMovie } from './reducer';

const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';
const BACKDROP_PATH = 'http://image.tmdb.org/t/p/w1280';

class MovieDetail extends Component<{}, { movie?: IMovie }> {
  state = {};

  async componentDidMount() {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${
          (this.props as any).match.params.id
        }?api_key=65e043c24785898be00b4abc12fcdaae&language=en-US`
      );
      const movie = await res.json();
      this.setState({
        movie
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    if (!('movie' in this.state)) return null;
    const { movie }: { movie: IMovie } = this.state;
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

export default MovieDetail;

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
