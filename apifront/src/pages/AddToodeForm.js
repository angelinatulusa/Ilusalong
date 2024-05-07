import React, { useState } from 'react';
import axios from 'axios';

const AddToodeForm = ({ onToodeAdded }) => {
  const [nimetus, setNimetus] = useState('');
  const [hind, setHind] = useState('');
  const [kirjeldus, setKirjeldus] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Отправляем данные новой услуги на сервер
      await axios.post('https://localhost:7057/Tooted', { nimetus, hind, kirjeldus });
      // Если услуга успешно добавлена, вызываем колбэк onToodeAdded, чтобы обновить список услуг
      onToodeAdded();
      // Очищаем форму после успешного добавления
      setNimetus('');
      setHind('');
      setKirjeldus('');
    } catch (error) {
      // Если произошла ошибка при отправке запроса, устанавливаем ошибку
      setError('Failed to add toode. Please try again.');
      console.error('Add toode error:', error);
    }
  };

  return (
    <div>
      <h2>Add Toode</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nimetus">Nimetus:</label>
          <input
            type="text"
            id="nimetus"
            value={nimetus}
            onChange={(e) => setNimetus(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="hind">Hind:</label>
          <input
            type="text"
            id="hind"
            value={hind}
            onChange={(e) => setHind(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="kirjeldus">Kirjeldus:</label>
          <textarea
            id="kirjeldus"
            value={kirjeldus}
            onChange={(e) => setKirjeldus(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit">Add Toode</button>
      </form>
    </div>
  );
};

export default AddToodeForm;
