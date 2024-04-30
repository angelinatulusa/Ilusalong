import React, { useEffect, useState } from 'react';

function Tooted() {
  const [Tooded, setToode] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedToode, setSelectedToode] = useState(null);

  useEffect(() => {
    fetch("https://localhost:7057/Tooted")
      .then(res => res.json())
      .then(json => setToode(json));
  }, []);

  const handleModalOpen = (toode) => {
    setSelectedToode(toode);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };
  // Определение функции handleSubmit
  const handleSubmit = (event) => {
    event.preventDefault();
    // Обработка отправки формы, например, отправка данных на сервер
  };

  return (
    <div className="table-tooted">
      <h2>Услуги</h2>
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
              <td>
                <button className="reg-button" onClick={() => handleModalOpen(Toode)}>Записаться на процедуру</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-button" onClick={handleModalClose}>×</span>
            <h2>Записаться на процедуру</h2>
            <p>Выбранная процедура: {selectedToode && selectedToode.nimetus}</p>
            <form onSubmit={handleSubmit}>
              <label htmlFor="name">Имя:</label>
              <input type="text" id="name" required />

              <label htmlFor="email">Email:</label>
              <input type="email" id="email" required />

              <label htmlFor="phone">Телефон:</label>
              <input type="tel" id="phone" required />

              <button type="submit">Отправить</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Tooted;
