import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RegPage = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({
    kas_nimi: '',
    kas_pernimi: '',
    kas_parool: '',
    kas_email: '',
    kas_telefon: '',
    roll: 'kasutaja'
  });

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('https://localhost:7057/api/Kasutajad');
      setUsers(response.data);
    } catch (error) {
      console.error('Failed to fetch users:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://localhost:7057/api/Kasutajad', newUser);
      setNewUser({
        kas_nimi: '',
        kas_pernimi: '',
        kas_parool: '',
        kas_email: '',
        kas_telefon: '',
        roll: 'kasutaja'
      });
      fetchUsers();
    } catch (error) {
      console.error('Failed to create user:', error);
    }
  };

  return (
    <div>
      <h2>Регистрация</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="kas_nimi">Имя:</label>
          <input
            type="text"
            id="kas_nimi"
            name="kas_nimi"
            value={newUser.kas_nimi}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="kas_pernimi">Фамилия:</label>
          <input
            type="text"
            id="kas_pernimi"
            name="kas_pernimi"
            value={newUser.kas_pernimi}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="kas_parool">Пароль:</label>
          <input
            type="password"
            id="kas_parool"
            name="kas_parool"
            value={newUser.kas_parool}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="kas_email">Email:</label>
          <input
            type="email"
            id="kas_email"
            name="kas_email"
            value={newUser.kas_email}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="kas_telefon">Телефон:</label>
          <input
            type="text"
            id="kas_telefon"
            name="kas_telefon"
            value={newUser.kas_telefon}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Добавить пользователя</button>
      </form>
    </div>
  );
};

export default RegPage;