import React, { useEffect, useRef, useState } from 'react';

function Meistrid() {
  const [Kategooriad, setKategooriad] = useState([]);

  useEffect(() => {
    fetch("https://localhost:7057/Kategooriad")
      .then(res => res.json())
      .then(json => setKategooriad(json));
  }, []);

  return (
    <div className="Meistrid">
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

export default Meistrid;
