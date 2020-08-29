import * as genresAPI from "./fakeGenre";

const movies = [
  {
    _id: "5532512sasas5",
    title: "Terminator",
    genre: { _id: "5b223n23b23", name: "Action" },
    numberInStock: 6,
    dailyRentalRate: 2.5,
    publishDate: "2018-01-03T19:04:21.909Z",
  },
  {
    _id: "553251212sasas5",
    title: "Die Hard",
    genre: { _id: "5b223n23b23", name: "Tragedy" },
    numberInStock: 7,
    dailyRentalRate: 3.5,
    publishDate: "2019-01-03T19:04:21.909Z",
    liked: true,
  },
  {
    _id: "5532512sas2235",
    title: "Black Panther",
    genre: { _id: "5b223n23b23", name: "Action" },
    numberInStock: 10,
    dailyRentalRate: 2,
    publishDate: "2019-08-03T19:04:21.909Z",
  },
  {
    _id: "5532512wid2235",
    title: "Black Widow",
    genre: { _id: "5b223n23b23", name: "Action" },
    numberInStock: 10,
    dailyRentalRate: 2,
    publishDate: "2020-01-03T19:04:21.909Z",
  },
  {
    _id: "5532512bas2235",
    title: "Black mask",
    genre: { _id: "5b223n23b23", name: "Action" },
    numberInStock: 3,
    dailyRentalRate: 1.5,
    publishDate: "2017-08-03T19:04:21.909Z",
  },
  {
    _id: "55325121235",
    title: "Avengers",
    genre: { _id: "5b223n23b23", name: "Cinematic" },
    numberInStock: 10,
    dailyRentalRate: 3,
    publishDate: "2020-08-03T19:04:21.909Z",
  },
];

export function getMovies() {
  return movies;
}

export function getMovie(id) {
  return movies.find((m) => m._id === id);
}
