import React, { useEffect, useState } from 'react';

function ToodeAdmin() {
  const [Tooded, setToode] = useState([]);
  const [newToode, setNewToode] = useState({
    nimetus: '',
    hind: '',
    kirjeldus: ''
  });

  useEffect(() => {
    fetchTooted();
  }, []);

  const fetchTooted = async () => {
    try {
      const response = await fetch('https://localhost:7057/Tooted');
      const data = await response.json();
      setToode(data);
    } catch (error) {
      console.error('Error fetching poods:', error);
    }
  };

  const addToode = async () => {
    try {
      const { nimetus, hind, kirjeldus } = newToode;
      
      // Проверяем, является ли hind числом
      if (isNaN(hind)) {
        throw new Error('Price should be a number');
      }
      
      // Преобразуем hind в число
      const hindNumber = parseFloat(hind);
  
      const response = await fetch('https://localhost:7057/Tooted/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nimetus,
          hind: hindNumber, // Используем числовое значение для hind
          kirjeldus,
        }),
      });
  
      if (response.ok) {
        // Fetch updated toode list after adding
        fetchTooted();
        setNewToode({ // Clear form after successful addition
          nimetus: '',
          hind: '',
          kirjeldus: ''
        });
      } else {
        throw new Error('Failed to add new product');
      }
    } catch (error) {
      console.error('Error adding toode:', error);
    }
  };
  
  
  return (
    <div>
         <h2>Услуги</h2>
      <div className="table-tooted">
        <table id="Tooted">
          <thead>
            <tr>
              <th>Название</th>
              <th>Цена</th>
              <th>Описание</th>
            </tr>
          </thead>
          <tbody>
            {Tooded.map((Toode) => (
              <tr key={Toode.ToodeID}> {/* Unique key */}
                <td>{Toode.nimetus}</td>
                <td>{Toode.hind}</td>
                <td>{Toode.kirjeldus}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <h2>Add New Toode</h2>
      <div>
        <label>Toode Name:</label>
        <input
          type="text"
          value={newToode.nimetus}
          onChange={(e) => setNewToode({ ...newToode, nimetus: e.target.value })}
        />
      </div>
      <div>
        <label>Toode hind:</label>
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
      <button onClick={addToode}>Add Toode</button>
    </div>
  );
}

export default ToodeAdmin;
