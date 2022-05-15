import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import '../MovieForm/MovieForm.css'

const MovieForm = () => {
  const dispatch = useDispatch();

  let [title, setTitle] = useState('');
  let [poster, setPoster] = useState('');
  let [description, setDescription] = useState('');



  const addNewMovie = (event) => {
    event.preventDefault();
    dispatch({
      type: 'CREATE_MOVIE',
      payload: {
        title,
        poster,
        description
      }
    })
    
  }

  return (
    <div>
      <h3>Enter new movie</h3>
      <form onSubmit={addNewMovie}>
        <input type='text' placeholder="Title" value={title} onChange={(e) => { setTitle(e.target.value) }} />
        <input type='text' placeholder="Poster" value={poster} onChange={(e) => { setPoster(e.target.value) }} />
        <textarea placeholder="Description" value={description} onChange={(e) => { setDescription(e.target.value) }} />
        <select>

          <option value="Adventure">Adventure</option>
          <option value="Animated">Animated</option>
          <option value="Biographical">Biographical</option>
          <option value="Comedy">Comedy</option>
          <option value="Disaster">Disaster</option>
          <option value="Drama">Drama</option>
          <option value="Epic">Epic</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Musical">Musical</option>
          <option value="Romantic">Romantic</option>
          <option value="Science Fiction">Science Fiction</option>
          <option value="Space-Opera">Space Opera</option>
          <option value="Superhero">Superhero</option>

        </select>
        {/* <button>Add New Movie</button> */}
        <button variant="outlined">Outlined</button>
      </form>
    </div>
  );
}


export default MovieForm;