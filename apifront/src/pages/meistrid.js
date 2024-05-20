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
      <div className="master-buttons">
        {masters.map((master, index) => (
          <button key={index} onClick={() => handleMasterClick(master)}>
            {master.master_nimi} {master.master_pernimi}
          </button>
        ))}
      </div>
      {selectedMaster && (
        <div className="selected-master">
          <h2>Selected Master</h2>
          <p><strong>Name:</strong> {selectedMaster.master_nimi} {selectedMaster.master_pernimi}</p>
          <p><strong>Email:</strong> {selectedMaster.master_email}</p>
          <p><strong>Phone:</strong> {selectedMaster.master_telefon}</p>
          <p><strong>Specialty:</strong> {selectedMaster.master_eriala}</p>
        </div>
      )}
    </div>
  );
};

export default Meistrid;
