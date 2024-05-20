import React, { useEffect, useState } from 'react';
import AddToodeForm from './AddToodeForm';

function Tooted() {
  const [Tooded, setToode] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    fetch("https://localhost:7057/api/Tooted")
      .then(res => res.json())
      .then(json => setToode(json));
  }, []);

  const handleToodeAdded = () => {
    fetch("https://localhost:7057/api/Tooted")
      .then(res => res.json())
      .then(json => setToode(json));
  };

  return (
    <div>
      <h2>Teenused</h2>
      {isLoggedIn && <AddToodeForm onToodeAdded={handleToodeAdded} />}
      <div className="table-tooted">
        <table id="Tooted">
          <thead>
            <tr>
              <th>Pealkiri</th>
              <th>Hind</th>
              <th>Kirjeldus</th>
            </tr>
          </thead>
          <tbody>
            {Tooded.map((Toode, index) => (
              <tr key={index}>
                <td>{Toode.nimetus}</td>
                <td>{Toode.hind}</td>
                <td>{Toode.kirjeldus}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Tooted;
