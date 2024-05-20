import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Meistrid = () => {
  const [masters, setMasters] = useState([]);
  const [selectedMaster, setSelectedMaster] = useState(null);

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

  const handleMasterClick = (master) => {
    setSelectedMaster(master);
  };

  return (
    <div>
      <h2>Meistrid</h2>
      <table className="table-meistrid" id="Meistrid">
        <thead>
          <tr>
            <th>Nimi</th>
            <th>E-post</th>
            <th>Telefon</th>
            <th>Eriala</th>
          </tr>
        </thead>
        <tbody>
          {masters.map((master, index) => (
            <tr key={index} onClick={() => handleMasterClick(master)}>
              <td>{master.master_nimi} {master.master_pernimi}</td>
              <td>{master.master_email}</td>
              <td>{master.master_telefon}</td>
              <td>{master.master_eriala}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedMaster && (
        <div className="selected-master">
          <h2>Valitud Meister</h2>
          <p><strong>Nimi:</strong> {selectedMaster.master_nimi} {selectedMaster.master_pernimi}</p>
          <p><strong>E-post:</strong> {selectedMaster.master_email}</p>
          <p><strong>Telefon:</strong> {selectedMaster.master_telefon}</p>
          <p><strong>Eriala:</strong> {selectedMaster.master_eriala}</p>
        </div>
      )}
    </div>
  );
};

export default Meistrid;
