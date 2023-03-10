import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import moviesData from '../movies-data.json';

import AddMovie from './AddMovie';
import MovieCard from './MovieCard';
import FilterMovies from './FilterMovies'

function MovieList() {
  const [ movies, setMovies ] = useState(moviesData);
  const [ filteredMovies, setFilteredMovies ] = useState(moviesData);

  const deleteMovie = (movieId) => {
    const filteredList = movies.filter(movie => {
      return movie._id !== movieId;
    })

    setMovies(filteredList);
    setFilteredMovies(filteredList);
  }

  const addNewMovie = (newMovie) => {
    newMovie._id = uuidv4();
    const updatedMovies = [...movies, newMovie];

    setMovies(updatedMovies);
    setFilteredMovies(updatedMovies);
  }

  const filterMovieList = (letter) => {
    if (letter === 'All') {
      setFilteredMovies(movies)
    } else {
      const filteredList = movies.filter(movie => {
        return movie.title[0].toLowerCase() === letter.toLowerCase();
      })
      setFilteredMovies(filteredList);
    }
  }

  return(
    <div>
      <h2>Movie List</h2>

      <FilterMovies filterMovieList={filterMovieList} />

      <AddMovie addNewMovie={addNewMovie} />

      {filteredMovies.map(movie => <MovieCard key={movie._id} movie={movie} deleteFunc={deleteMovie} />)}
    </div>
  )
}

export default MovieList;