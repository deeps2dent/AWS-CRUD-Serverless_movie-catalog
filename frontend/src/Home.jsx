// src/Home.jsx
import { useEffect, useState } from "react";
import { fetchMovies, createMovie } from "./utils/apis";
import { useNavigate } from "react-router-dom";
import "./App.css";
import reactImg from "./assets/react.svg";

const Home = () => {
  // renamed state vars (movies instead of coffees)
  const [movies, setMovies] = useState([]);
  const [movieId, setMovieId] = useState("");
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");
  const [released, setReleased] = useState(false);
  const navigate = useNavigate();

  // fetchMovies -> setMovies with our movie shape
  useEffect(() => {
    fetchMovies().then(data => setMovies(data));
  }, []);

  const handleAddMovie = async () => {
    if (!movieId || !title || !rating) {
      alert("Please fill all fields");
      return;
    }
    const newMovie = { movieId, title, rating: Number(rating), released };
    await createMovie(newMovie);
    setMovies([...movies, newMovie]);
    setMovieId("");
    setTitle("");
    setRating("");
    setReleased(false);
  };

  return (
    <div className="container">
      <h1>Movie List</h1>

      <div className="add-coffee-form">
        <input
          className="styled-input"
          type="text"
          placeholder="Movie ID"
          value={movieId}
          onChange={e => setMovieId(e.target.value)}
        />
        <input
          className="styled-input"
          type="text"
          placeholder="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <input
          className="styled-input"
          type="number"
          placeholder="Rating"
          value={rating}
          onChange={e => setRating(e.target.value)}
        />
        <label>
          <input
            type="checkbox"
            checked={released}
            onChange={e => setReleased(e.target.checked)}
          />{" "}
          Released
        </label>
        <button onClick={handleAddMovie}>Add Movie</button>
      </div>

      <div className="coffee-list">
        {movies.map(movie => (
          <div
            key={movie.movieId}
            className="coffee-card"
            onClick={() => navigate(`/details/${movie.movieId}`)}
          >
            <h3>{movie.title}</h3>
            <img src={reactImg} alt="Movie placeholder" />
            <p>Rating: {movie.rating}</p>
            <p>{movie.released ? "Released" : "Upcoming"}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
