import React from "react";
import { Link } from "react-router-dom";
import "./Movie.css";

const MovieCard = ({ movie }) => {
  const baseImageUrl = "https://image.tmdb.org/t/p/w500";
  const formattedReleaseDate = new Date(movie.release_date).toLocaleDateString(
    "en-US",
    { year: "numeric", month: "long" }
  );
  return (
    <>
      <div className="col-12 col-md-4 col-lg-4 mb-4 mt-4">
        <div className="card">
          <img
            src={`${baseImageUrl}${movie.poster_path}`}
            alt={movie.title}
            className="card-img-top bootImg"
          />
          <div className="card-body">
            <h5 className="card-title tlt">{movie.title}</h5>
            <p className="card-text">Release Date: {formattedReleaseDate}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
