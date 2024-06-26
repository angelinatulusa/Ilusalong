import React, { useState, useEffect } from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

function App() {
  const [tooted, setTooted] = useState([]);
  const [newToode, setNewToode] = useState({
    nimetus: '',
    hind: '',
    kirjeldus: '',
    kategooriaID: '' // изменяем тип на строку
  });
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchTooted();
    fetchCategories();
  }, []);

  const fetchTooted = async () => {
    try {
      const response = await fetch('https://localhost:7057/api/Tooted');
      const data = await response.json();
      setTooted(data);
    } catch (error) {
      console.error('Error fetching tooted:', error);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await fetch('https://localhost:7057/api/Tooted/categories');
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const addToode = async () => {
    try {
      // Конвертируем kategooriaID из строки в число перед отправкой на бэкенд
      const toodeToAdd = {
        ...newToode,
        kategooriaID: parseInt(newToode.kategooriaID)
      };
    
      await fetch('https://localhost:7057/api/Tooted/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(toodeToAdd), // отправляем конвертированные данные
      });
      // Fetch updated toode list after adding
      fetchTooted();
      setNewToode({ // Clear form after successful addition
        nimetus: '',
        hind: '',
        kirjeldus: '',
        kategooriaID: ''
      });
    } catch (error) {
      console.error('Error adding toode:', error);
    }
  };
  
  
  const deleteToode = async (id) => {
    try {
      await fetch(`https://localhost:7057/api/Tooted/delete/${id}`, {
        method: 'DELETE',
      });
      // Fetch updated toode list after deleting
      fetchTooted();
    } catch (error) {
      console.error('Error deleting toode:', error);
    }
  };
  

  return (
    <div>
      <h1>Teenuste nimekiri</h1>
      <div className='table-tooted'> 
        <table id="Tooted">
          <thead>
            <tr>
              <th>Nimetus</th>
              <th>Hind</th>
              <th>Kirjeldus</th>
              <th>Tegevus</th>
            </tr>
          </thead>
          <tbody>
            {tooted.map((toode) => (
              <tr key={toode.toodeID}>
                <td>{toode.nimetus}</td>
                <td>{toode.hind}</td>
                <td>{toode.kirjeldus}</td>
                <td>
                  <button onClick={() => deleteToode(toode.toodeID)}>Kustuta</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <h2>Lisa uus teenus</h2>
      <div className='lisateenusform'>
        <div>
        <label>Nimetus:</label>
        <input
          type="text"
          value={newToode.nimetus}
          onChange={(e) => setNewToode({ ...newToode, nimetus: e.target.value })}
        />
        </div>
        <div>
          <label>Hind:</label>
          <input
            type="number"
            value={newToode.hind}
            onChange={(e) => setNewToode({ ...newToode, hind: e.target.value })}
          />
        </div>
        <div>
          <label>Kirjeldus:</label>
          <input
            type="text"
            value={newToode.kirjeldus}
            onChange={(e) => setNewToode({ ...newToode, kirjeldus: e.target.value })}
          />
        </div>
        <div>
          <label>Kategooria:</label>
          <select
            value={newToode.kategooriaID}
            onChange={(e) => setNewToode({ ...newToode, kategooriaID: e.target.value })}
          >
            <option value="">Valige kategooria</option>
            {categories.map((category) => (
              <option key={category.kategooriaID} value={category.kategooriaID}>
                {category.kat_nimetus}
              </option>
            ))}
          </select>
        </div>
        <button onClick={addToode}>Lisa teenus</button>
      </div>
      <Link to="/broneeringAdmin"> BroneeringAdmin</Link>
    </div>
  );
}

export default App;