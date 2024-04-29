import React, { useEffect, useRef, useState } from 'react';

function Tooted() {
  const [Tooded, setToode] = useState([]);

  useEffect(() => {
    fetch("https://localhost:7057/Tooted")
      .then(res => res.json())
      .then(json => setToode(json));
  }, []);

  return (
    <div className="table-tooted">
      <h2>Товары</h2>
      <table id="Tooted">
        <thead>
          <tr>
            <th>Название</th>
            <th>Цена</th>
            <th>Описание</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {Tooded.map((Toode, index) => (
            <tr key={index}>
              <td>{Toode.nimetus}</td>
              <td>{Toode.hind}</td>
              <td>{Toode.kirjeldus}</td>
              <td><button className="reg-button">Записаться на процедуру</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Tooted;
