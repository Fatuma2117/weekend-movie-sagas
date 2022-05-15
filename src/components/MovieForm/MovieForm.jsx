import React, {useState}from 'react';
import { useDispatch } from 'react-redux';

const MovieForm = () => {
    const dispatch = useDispatch();
    
    let [title, setTitle] = useState('');
    let [url, setUrl] = useState('');
    let [desc, setDesc] = useState('');
 


    const addNewMovie = (event) => {
        event.preventDefault();
        dispatch({
          type: 'CREATE_MOVIE',
          payload: { 
            title,
            url,
            desc
          
          }
        })
    }

    return (
        <div>
          <h3>Enter new movie</h3>
          <form onSubmit={addNewMovie}>
          <input type='text' placeholder="Title" value={title} onChange={(e) => { setTitle(e.target.value) }} />
          <input type='text' placeholder="Url" value={url} onChange={(e) => { setUrl(e.target.value) }} />
          <textarea placeholder="Description" value={desc} onChange={(e) => { setDesc(e.target.value) }} />
          <select>
           
        <option value="Adventure">Adventure</option>
        <option value="Animated">Animated</option>
        <option value="Biographical">Biographical</option>
      </select>
          <button>Add New Movie</button>
          </form>
        </div>
    );
}


export default MovieForm;