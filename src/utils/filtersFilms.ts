import {
  GENRES_LIST,
  POPULARITY,
  RATTINGS_VALUES,
  VOTE,
  YEARS,
} from "./const";
import { format } from "date-fns";
import { LIST_FILMS } from "./listFilms";

function defaultFilterFilms(array: any) {
  const sortedByRatting = sortByRatting(
    RATTINGS_VALUES.POPULAR_DOWN,
    array
  );
  const sortedByYear = sortByYear(YEARS[2020], sortedByRatting);
  return sortedByYear;
}

function mainFilterFilms(
  ratting: string,
  year: string,
  array: any[],
  genres: number[]
) {
  const sortedByRatting = sortByRatting(ratting, array);
  const sortedByYear = sortByYear(year, sortedByRatting);
  const sortedByGenres = sortByGenres(genres, sortedByYear);
  return sortedByGenres;
}

function findFilterFilm(
  popularity: string,
  vote: string,
  genre: string
) {
  const genres: any = GENRES_LIST.find((item) => item.name === genre);
  const sortedByPopularity = sortByPopularity(popularity, LIST_FILMS);
  const sortedByVote = sortByVote(vote, sortedByPopularity);
  const sortedByGenre = sortByGenres([genres.id], sortedByVote);
  return sortedByGenre;
}

function getYear(date: number) {
  return format(new Date(date), "y");
}

function sortByRatting(ratting: string, array: any[]) {
  switch (ratting) {
    case RATTINGS_VALUES.POPULAR_UP:
      return [...array].sort((a, b) => a.popularity - b.popularity);
    case RATTINGS_VALUES.POPULAR_DOWN:
      return [...array].sort((a, b) => b.popularity - a.popularity);
    case RATTINGS_VALUES.RATING_UP:
      return [...array].sort(
        (a, b) => a.vote_average - b.vote_average
      );
    case RATTINGS_VALUES.RATING_DOWN:
      return [...array].sort(
        (a, b) => b.vote_average - a.vote_average
      );
  }
}

function sortByYear(year: string, array: any) {
  return [...array].filter(
    (item) => getYear(item.release_date) === year
  );
}

function sortByGenres(genres: number[], array: any) {
  return [...array].filter((item) =>
    genres.length !== 0
      ? item.genre_ids.some((id: number) => genres.includes(id))
      : item
  );
}

function sortByPopularity(popularity: string, array: any) {
  switch (popularity) {
    case POPULARITY.HIGH:
      return [...array].filter(
        (item) => item.popularity > 100 && item.vote_count > 200
      );
    case POPULARITY.LOW:
      return [...array].filter(
        (item) => item.popularity < 100 && item.vote_count < 200
      );
  }
}

function sortByVote(vote: string, array: any) {
  switch (vote) {
    case VOTE.HIGH:
      return [...array].filter((item) => item.vote_average > 5);
    case VOTE.LOW:
      return [...array].filter((item) => item.vote_average < 5);
  }
}

export { defaultFilterFilms, mainFilterFilms, findFilterFilm };
