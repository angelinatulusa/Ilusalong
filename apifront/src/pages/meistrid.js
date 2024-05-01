import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Meistrid = () => {
  const [masters, setMasters] = useState([]);

  useEffect(() => {
    const fetchMasters = async () => {
      try {
        const response = await axios.get('https://localhost:7057/api/Meistrid');
        setMasters(response.data);
      } catch (error) {
        console.error('Failed to fetch masters:', error);
      }
    };

    fetchMasters();
  }, []);

  return (
    <div className="table-meistrid">
      <h2>Мастера</h2>
      <table id="Meistrid">
        <thead>
          <tr>
            <th>Имя</th>
            <th>Фамилия</th>
            <th>Email</th>
            <th>Телефон</th>
            <th>Специальность</th>
          </tr>
        </thead>
        <tbody>
        {masters.map((master, index) => (
          <tr key={index}>
            <td>{master.master_nimi}</td>
            <td>{master.master_pernimi}</td> 
            <td>{master.master_email}</td>
            <td>{master.master_telefon}</td> 
            <td>{master.master_eriala}</td> 
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
};

export default Meistrid;
