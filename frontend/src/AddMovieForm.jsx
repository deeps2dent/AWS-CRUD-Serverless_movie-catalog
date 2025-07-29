// src/AddMovieForm.jsx
import { useState } from "react";
import { createMovie } from "./utils/apis";
import { useNavigate } from "react-router-dom";
import "./App.css";

export default function AddMovieForm() {
  const [movieId, setMovieId] = useState("");
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");
  const [released, setReleased] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (!movieId || !title || !rating) {
      alert("Please fill all fields");
      return;
    }
    await createMovie({ movieId, title, rating: Number(rating), released });
    navigate("/");
  };

  return (
    <div className="container">
      <h1>Add Movie</h1>
      <div className="add-coffee-form">
        <input
          className="styled-input"
          placeholder="Movie ID"
          value={movieId}
          onChange={e => setMovieId(e.target.value)}
        />
        <input
          className="styled-input"
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
        <label className="styled-label">
          <input
            type="checkbox"
            checked={released}
            onChange={e => setReleased(e.target.checked)}
          />
          Released
        </label>
        <button onClick={handleSubmit}>Add Movie</button>
      </div>
    </div>
  );
}
