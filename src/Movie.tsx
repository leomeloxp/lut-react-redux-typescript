import React from 'react';
import Overdrive from 'react-overdrive';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';

const Movie = ({ movie }: { movie: IMovie }) => (
  <Link to={`/${movie.id}`}>
    <Overdrive id={`${movie.id}`}>
      <Poster src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title} />
    </Overdrive>
  </Link>
);

export default Movie;

export interface IMovie {
  backdrop_path: string;
  id: string;
  overview: string;
  poster_path: string;
  release_date: string;
  title: string;
}

export const Poster = styled.img`
  box-shadow: 0 0 35px black;
`;
