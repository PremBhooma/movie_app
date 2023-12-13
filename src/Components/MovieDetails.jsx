import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";

const MovieDetails = () => {
  const { id } = useParams();

  const [movies, setMovies] = useState([]);
  const apiKey = "627d937a291b248bbaed756e1795900d";

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const apiUrl = `https://api.themoviedb.org/3/movie/${id}}?api_key=${apiKey}&language=en-US', options`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        setMovies(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, [id]);

  const baseImageUrl = "https://image.tmdb.org/t/p/w500";

  //   const releaseDate = new Date(movies.release_date);
  //   const options = {
  //     year: "numeric",
  //     month: "long",
  //     day: "numeric",
  //   };
  //   const formattedReleaseDate = new Intl.DateTimeFormat("en-US", options).format(
  //     releaseDate
  //   );

  return (
    <>
      <Header />
      <img
        src={`${baseImageUrl}${movies.backdrop_path}`}
        alt={movies.title}
        className="card-img-top bootImg"
      />
    </>
  );
};

export default MovieDetails;
