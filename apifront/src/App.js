import React, { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
  const [Tooded, setToode] = useState([]);
  const [Kategooriad, setKategooriad] = useState([]);

  useEffect(() => {
    fetch("https://localhost:7057/Tooted")
      .then(res => res.json())
      .then(json => setToode(json));
  }, []);

  useEffect(() => {
    fetch("https://localhost:7057/Kategooriad")
      .then(res => res.json())
      .then(json => setKategooriad(json));
  }, []);

  return (
    <div className="App">
      {/* Таблица товаров */}
      <h2>Товары</h2>
      <table id="Tooted">
        <thead>
          <tr>
            <th>ID</th>
            <th>Название</th>
            <th>Цена</th>
            <th>Описание</th>
            <th>ID категории</th>
          </tr>
        </thead>
        <tbody>
          {Tooded.map((Toode, index) => (
            <tr key={index}>
              <td>{Toode.toodeID}</td>
              <td>{Toode.nimetus}</td>
              <td>{Toode.hind}</td>
              <td>{Toode.kirjeldus}</td>
              <td>{Toode.kategooriaID}</td>
            </tr>
          ))}
        </tbody>
      </table>
  
      {/* Таблица категорий */}
      <h2>Категории</h2>
      <table id="Kategooriad">
        <thead>
          <tr>
            <th>ID</th>
            <th>Название</th>
          </tr>
        </thead>
        <tbody>
          {Kategooriad.map((Kategooria, index) => (
            <tr key={index}>
              <td>{Kategooria.kategooriaID}</td>
              <td>{Kategooria.kat_nimetus}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
