import React, { useEffect, useState } from 'react';
import AddToodeForm from './AddToodeForm';

function Tooted() {
  const [Tooded, setToode] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    fetch("https://localhost:7057/Tooted")
      .then(res => res.json())
      .then(json => setToode(json));
  }, []);

  useEffect(() => {
    // Проверяем, вошел ли пользователь, используя localStorage или другой механизм хранения состояния
    const userLoggedIn = localStorage.getItem('isLoggedIn');
    setIsLoggedIn(userLoggedIn === 'true');
  }, []);

  const handleToodeAdded = () => {
    fetch("https://localhost:7057/Tooted")
      .then(res => res.json())
      .then(json => setToode(json));
  };

  return (
    <div>
      <h2>Услуги</h2>
      {isLoggedIn && <AddToodeForm onToodeAdded={handleToodeAdded} />}
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
