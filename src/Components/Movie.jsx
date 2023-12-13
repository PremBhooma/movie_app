import React, { useContext, useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import { searchMovies } from "./movieService";
import { AuthContext } from "../Routes/AuthContext";
import "./Movie.css";

const Movie = () => {
  const [movies, setMovies] = useState([]);
  //   const [searchTerm, setSearchTerm] = useState("");
  const { searchTerm, setSearchTerm } = useContext(AuthContext);
  const apiKey = "627d937a291b248bbaed756e1795900d";

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`;

        if (searchTerm) {
          const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchTerm}`;
          const searchData = await searchMovies(searchUrl);
          setMovies(searchData.results);
        } else {
          const response = await fetch(apiUrl);
          const data = await response.json();
          setMovies(data.results);
        }
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, [searchTerm]);

  //   const handleSearch = async (e) => {
  //     e.preventDefault();
  //   };

  return (
    <>
      {/* <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies..."
        />
        <button type="submit">Search</button>
      </form> */}
      <section className="gradient-custom">
        <div className="container">
          <div className="row">
            {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Movie;
