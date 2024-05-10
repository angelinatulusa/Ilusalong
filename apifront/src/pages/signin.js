import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Импортируем useNavigate из react-router-dom

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://localhost:7057/api/Login', { username , password });
      if (response.status === 200) {
        // Если ответ успешный, перенаправляем пользователя на страницу с товарами
        navigate('/tootedAdmin'); // Используем navigate для перехода на страницу tootedAdmin
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


  return (
    <div>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Kasutajanimi:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Parool:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Logi sisse</button>
      </form>
    </div>
  );
};

export default Login;
