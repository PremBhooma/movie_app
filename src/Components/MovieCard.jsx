import React from "react";
import { Link } from "react-router-dom";
import "./Movie.css";

const MovieCard = ({ movie }) => {
  console.log(movie);
  const baseImageUrl = "https://image.tmdb.org/t/p/w500";

  const releaseDate = new Date(movie.release_date);
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formattedReleaseDate = new Intl.DateTimeFormat("en-US", options).format(
    releaseDate
  );

  return (
    <>
      <div className="col-12 col-md-4 col-lg-4 mb-4 mt-4">
        <Link className="lineNone" to={`/home/${movie.id}`}>
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
        </Link>
      </div>
    </>
  );
};

export default MovieCard;
