// ListCreator.js
import React, { useState } from 'react';
import '../styles/Agregar.css';

const Agregar = () => {
  const [inputText, setInputText] = useState('');
  const [list, setList] = useState([]);

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleAddItem = () => {
    if (inputText.trim() !== '') {
      setList([...list, inputText]);
      setInputText('');
    }
  };

  const handleRemoveItem = (index) => {
    const updatedList = [...list];
    updatedList.splice(index, 1);
    setList(updatedList);
  };

  return (
    <div className="list-creator">
      <div className="input-container">
        <input
          type="text"
          placeholder="Nueva meta..."
          value={inputText}
          onChange={handleInputChange}
        />
        <button onClick={handleAddItem}>Agregar</button>
      </div>
      <div className='barra-container'>
        <div className='completados'>Completadas: </div>
        <br/>


        <div className='pendientes'>Pendientes: </div>
      </div>
      <ul>
        {list.map((item, index) => (
          <li key={index}>
            {item}

            <button className="remove-button" onClick={() => handleRemoveItem(index)}>
                X
            </button>
            <button className="click-button" >
                ✔
            </button>

          </li>
        ))}
      </ul>
    </div>
  );
};

export default Agregar;
