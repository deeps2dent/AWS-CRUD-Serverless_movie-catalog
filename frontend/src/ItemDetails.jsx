// src/ItemDetails.jsx
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getMovie, updateMovie, deleteMovie } from "./utils/apis";
import reactImg from "./assets/react.svg";

const ItemDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [editMode, setEditMode] = useState(false);

  // Fetch the movie on mount
  useEffect(() => {
    getMovie(id).then(m => setMovie(m));
  }, [id]);

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  const handleUpdate = () => {
    updateMovie(id, movie).then(() => toggleEditMode());
  };

  const handleDelete = () => {
    deleteMovie(id).then(() => navigate("/"));
  };

  if (!movie) return <p>Loading...</p>;

  return (
    <div className="container">
      <h1>{editMode ? "Edit Movie" : movie.title}</h1>

      {editMode ? (
        <>
          {/* Movie ID (read-only) */}
          <input
            className="styled-input"
            value={movie.movieId}
            disabled
          />

          {/* Title */}
          <input
            className="styled-input"
            value={movie.title}
            onChange={e => setMovie({ ...movie, title: e.target.value })}
            placeholder="Title"
          />

          {/* Rating */}
          <input
            className="styled-input"
            type="number"
            value={movie.rating}
            onChange={e => setMovie({ ...movie, rating: Number(e.target.value) })}
            placeholder="Rating"
          />

          {/* Released */}
          <label>
            <input
              type="checkbox"
              checked={movie.released}
              onChange={e => setMovie({ ...movie, released: e.target.checked })}
            />{" "}
            Released
          </label>
        </>
      ) : (
        <>
          <img src={reactImg} alt="Movie placeholder" />
          <p>Rating: {movie.rating}</p>
          <p>{movie.released ? "Released" : "Upcoming"}</p>
        </>
      )}

      {/* Edit/Save toggle */}
      <button onClick={editMode ? handleUpdate : toggleEditMode}>
        {editMode ? "Save" : "Edit"}
      </button>

      {/* Delete */}
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default ItemDetails;
