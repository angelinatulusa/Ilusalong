import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment'; // Импортируем moment.js для работы с датами и временем
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Broneering = () => {
  const [Tooted, setTooted] = useState([]);
  const [Meistrid, setMeistrid] = useState([]);
  const [selectedToode, setSelectedToode] = useState('');
  const [selectedMaster, setSelectedMaster] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedDateTime, setSelectedDateTime] = useState(new Date());

  useEffect(() => {
    fetchTooted();
    fetchMeistrid();
  }, []);

  const fetchTooted = async () => {
    try {
      const response = await axios.get("https://localhost:7057/Tooted");
      setTooted(response.data);
    } catch (error) {
      console.error('Failed to fetch products:', error);
    }
  };

  const fetchMeistrid = async () => {
    try {
      const response = await axios.get("https://localhost:7057/api/Meistrid");
      setMeistrid(response.data);
    } catch (error) {
      console.error('Failed to fetch masters:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Получаем значения из полей формы
    const nimetus = selectedToode.toString();
    const Aeg = moment(selectedDateTime).format("YYYY-MM-DD HH:mm");// Преобразуем время в нужный формат
    const kas_nimi = name.toString();
    const kas_email = email.toString();
    const kas_telefon = phone.toString();
    const master_nimi = null;
    const master_pernimi = selectedMaster.toString();
  
    // Проверяем обязательные поля
    if (!nimetus || !Aeg || !kas_nimi || !kas_email || !kas_telefon || !master_pernimi) {
      console.error("Все поля должны быть заполнены.");
      return;
    }
  
    // Создаем новый объект для отправки на сервер
    const newProtseduur = {
      nimetus,
      Aeg,
      kas_nimi,
      kas_email,
      kas_telefon,
      master_nimi,
      master_pernimi
    };
  
    try {
      // Отправляем данные на сервер
      const response = await axios.post('https://localhost:7057/Protseduurid', newProtseduur);
      console.log('Успешное бронирование:', response.data);
      // Добавьте здесь код для обработки успешного бронирования
    } catch (error) {
      console.error('Ошибка при бронировании:', error);
    }
  };

  return (
<div>
  <h2>Запись на процедуру</h2>
  <form onSubmit={handleSubmit} className="form-row">
    <div>
      <label htmlFor="toode">Выберите товар:</label>
      <select id="toode" onChange={(e) => setSelectedToode(e.target.value)}>
        <option value="">Выберите товар</option>
        {Tooted.map((toode, index) => (
          <option key={index} value={toode.nimetus}>
            {toode.nimetus}
          </option>
        ))}
      </select>
    </div>
    <div>
      <label htmlFor="master">Выберите мастера:</label>
      <select id="master" onChange={(e) => setSelectedMaster(e.target.value)} value={selectedMaster} required>
        <option value="">Выберите мастера</option>
        {Meistrid.map((meister, index) => (
          <option key={index} value={meister.master_pernimi}>
            {meister.master_pernimi}
          </option>
        ))}
      </select>
    </div>
    <div>
      <label htmlFor="name">Ваше имя:</label>
      <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
    </div>
    <div>
      <label htmlFor="email">Ваш Email:</label>
      <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
    </div>
    <div>
      <label htmlFor="phone">Ваш телефон:</label>
      <input type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
    </div>
    <div>
      <label htmlFor="datetime">Выберите дату и время:</label>
      <DatePicker
        selected={selectedDateTime}
        onChange={date => setSelectedDateTime(date)}
        showTimeSelect
        timeFormat="HH:mm"
        dateFormat="yyyy-MM-dd HH:mm"
        placeholderText="Выберите дату и время"
      />
    </div>
    <button type="submit">Записаться</button>
  </form>
</div>

  );
};

export default Broneering;
