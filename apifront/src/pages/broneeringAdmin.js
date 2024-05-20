import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const Protseduurid = () => {
  const [protseduurid, setProtseduurid] = useState([]);

  useEffect(() => {
    const fetchProtseduurid = async () => {
      try {
        const response = await axios.get('https://localhost:7057/api/Protseduurid');
        setProtseduurid(response.data);
      } catch (error) {
        console.error('Failed to fetch procedures:', error);
      }
    };

    fetchProtseduurid();
  }, []);

  return (
    <div className='table-protseduurid'> 
        <table id="Protseduurid">
          <thead>
            <tr>
              <th>Nimetus</th>
              <th>Kliendi nimi</th>
              <th>Kliendi email</th>
              <th>Kliendi telefon</th>
              <th>Meistri nimi</th>
              <th>Aeg</th>
            </tr>
          </thead>
          <tbody>
            {protseduurid.map((procedure) => (
              <tr key={procedure.ProtseduurID}>
                <td>{procedure.nimetus}</td>
                <td>{procedure.kas_nimi}</td>
                <td>{procedure.kas_email}</td>
                <td>{procedure.kas_telefon}</td>
                <td>{procedure.master_nimi}</td>
                <td>{procedure.Aeg}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <Link to="/tootedAdmin"> ToodeAdmin</Link>
      </div>
  );
};

export default Protseduurid;
