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

          <option value="1">Adventure</option>
          <option value="2">Animated</option>
          <option value="3">Biographical</option>
          <option value="4">Comedy</option>
          <option value="5">Disaster</option>
          <option value="6">Drama</option>
          <option value="7">Epic</option>
          <option value="8">Fantasy</option>
          <option value="9">Musical</option>
          <option value="10">Romantic</option>
          <option value="11">Science Fiction</option>
          <option value="12">Space Opera</option>
          <option value="13">Superhero</option>

        </select>
        {/* <button>Add New Movie</button> */}
        <button variant="outlined">Outlined</button>
      </form>
    </div>
  );
}


export default MovieForm;