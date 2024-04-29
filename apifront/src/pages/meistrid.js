import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Meistrid = () => {
  const [masters, setMasters] = useState([]);

  useEffect(() => {
    const fetchMasters = async () => {
      try {
        const response = await axios.get('https://localhost:7057/api/Kasutajad/masters');
        setMasters(response.data);
      } catch (error) {
        console.error('Failed to fetch masters:', error);
      }
    };

    fetchMasters();
  }, []);

  return (
    <div>
      <h2>Мастера</h2>
      <table id="Meistrid">
        <thead>
          <tr>
            <th>Имя</th>
            <th>Фамилия</th>
          </tr>
        </thead>
        <tbody>
          {masters.map(master => (
            <tr key={master.kasutajadID}>
              <td>{master.kas_nimi}</td>
              <td>{master.kas_pernimi}</td> 
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Meistrid;
