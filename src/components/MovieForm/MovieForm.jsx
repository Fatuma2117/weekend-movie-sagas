import React, {useState}from 'react';
import { useDispatch } from 'react-redux';

const NewPlantForm = () => {
    const dispatch = useDispatch();
    
    let [name, setName] = useState('');
    let [kingdom, setKingdom] = useState('');
    let [clade, setClade] = useState('');
    let [order, setOrder] = useState('');
    let [family, setFamily] = useState('');
    let [subfamily, setSubfamily] = useState('');
    let [genus, setGenus] = useState('');

    const addNewPlant = (event) => {
        event.preventDefault();
        dispatch({
          type: 'CREATE_PLANT',
          payload: { 
            name,
            kingdom,
            clade,
            order,
            family,
            subfamily,
            genus,
          }
        })
    }

    return (
        <div>
          <h3>This is the form</h3>
          <form onSubmit={addNewPlant}>
          <input type='text' placeholder="name" value={name} onChange={(e) => { setName(e.target.value) }} />
          <input type='text' placeholder="kingdom" value={kingdom} onChange={(e) => { setKingdom(e.target.value) }} />
          <input type='text' placeholder="clade" value={clade} onChange={(e) => { setClade(e.target.value) }} />
          <input type='text' placeholder="order" value={order} onChange={(e) => { setOrder(e.target.value) }} />
          <input type='text' placeholder="family" value={family} onChange={(e) => { setFamily(e.target.value) }} />
          <input type='text' placeholder="subfamily" value={subfamily} onChange={(e) => { setSubfamily(e.target.value) }} />
          <input type='text' placeholder="genus" value={genus} onChange={(e) => { setGenus(e.target.value) }} />
          <input type='submit' value='Add New Plant' />
          </form>
        </div>
    );
}


export default NewPlantForm;