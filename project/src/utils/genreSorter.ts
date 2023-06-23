import { FilmType } from '../types';

export function genreSorter(films: FilmType[] | undefined) {
  if (films === undefined) {
    return [];
  }
  const genreList = ['All genres', ...new Set(films.map((movie) => movie.genre))];
  if (genreList.length > 10) {
    genreList.length = 10;
  }
  return genreList;
}
