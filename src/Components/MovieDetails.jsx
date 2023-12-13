import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "./Header";
import { signOut } from "firebase/auth";
import { auth } from "../Firebase/firebaseConfig";

const MovieDetails = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  const { id } = useParams();
  const navigate = useNavigate();

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
  }, [id, apiKey]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem("accessToken");
      localStorage.removeItem("user");
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  const baseImageUrl = "https://image.tmdb.org/t/p/w500";

  const releaseDate = movies.release_date
    ? new Date(movies.release_date)
    : new Date();

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
      <Header
        displayName={user.displayName}
        image={user.photoURL}
        handleLogout={handleLogout}
      />
      <div
        className="movie-details-container"
        style={{
          backgroundImage: `url(${baseImageUrl}${movies.backdrop_path})`,
        }}
      >
        <div className="overlay"></div>
        <div className="container ">
          <div className="row">
            <div className="col-md-4 overlay-content">
              <img
                src={`${baseImageUrl}${movies.poster_path}`}
                alt={movies.title}
                className="card-img-top bootImg"
              />
            </div>
            <div className="col-md-8 overlay-content">
              <h1>{movies.title}</h1>
              <p>{formattedReleaseDate}</p>

              <h3>Overview</h3>
              <p>{movies.overview}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
