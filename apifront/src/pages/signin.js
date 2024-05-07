import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://localhost:7057/api/Login', { username, lastName, password });
      if (response.status === 200) {
        // Если ответ успешный, перенаправляем пользователя на страницу с товарами
        navigate('/Tooted');
      } else {
        // Если ответ не успешный, устанавливаем ошибку
        setError('Failed to log in. Please check your credentials.');
      }
    } catch (error) {
      // Если произошла ошибка при отправке запроса, устанавливаем ошибку
      setError('Failed to log in. Please check your credentials.');
      console.error('Login error:', error);
    }
  };

  const handleLogout = () => {
    // Реализация выхода: например, удаление токена аутентификации
    // После завершения сессии на сервере, перенаправляем пользователя на страницу входа
    navigate('/');
  };

  return (
    <div>
      <h2>Login</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
        <button type="button" onClick={handleLogout}>Logout</button>
      </form>
    </div>
  );
};

export default Login;
