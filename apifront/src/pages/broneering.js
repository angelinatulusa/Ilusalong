import React, { useState, useEffect } from 'react';

function App() {
  const [protseduurid, setProtseduurid] = useState([]);
  const [newProtseduur, setNewProtseduur] = useState({
    nimetus: '',
    kas_nimi: '',
    kas_email: '',
    kas_telefon: '',
    master_nimi: '',
    master_pernimi: '',
    Aeg: ''
  });
  const [masters, setMasters] = useState([]);
  const [tooted, setTooted] = useState([]);

  useEffect(() => {
    fetchProtseduurid();
    fetchMeistrid();
    fetchTooted();
  }, []);

  const fetchProtseduurid = async () => {
    try {
      const response = await fetch('https://localhost:7057/api/Protseduurid');
      const data = await response.json();
      setProtseduurid(data);
    } catch (error) {
      console.error('Error fetching protseduurid:', error);
    }
  };

  const fetchMeistrid = async () => {
    try {
      const response = await fetch('https://localhost:7057/api/Meistrid');
      const data = await response.json();
      setMasters(data);
    } catch (error) {
      console.error('Error fetching masters:', error);
    }
  };

  const fetchTooted = async () => {
    try {
      const response = await fetch('https://localhost:7057/api/Tooted');
      const data = await response.json();
      setTooted(data);
    } catch (error) {
      console.error('Error fetching tooted:', error);
    }
  };

  const addProtseduur = async () => {
    try {
      await fetch('https://localhost:7057/api/Protseduurid/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newProtseduur),
      });
      // Fetch updated protseduurid list after adding
      fetchProtseduurid();
      setNewProtseduur({
        nimetus: '',
        kas_nimi: '',
        kas_email: '',
        kas_telefon: '',
        master_nimi: '',
        Aeg: '',
      });
    } catch (error) {
      console.error('Error adding protseduur:', error);
    }
  };
  return (
    <div> 
      <div className='lisa-protseduur-form'>
        <div>
          <label>Nimetus:</label>
          <select
            value={newProtseduur.nimetus}
            onChange={(e) => setNewProtseduur({ ...newProtseduur, nimetus: e.target.value })}
          >
            <option value="">Vali nimetus</option>
            {tooted.map((toode) => (
              <option key={toode.toodeID} value={toode.nimetus}>
                {toode.nimetus}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label>Kliendi nimi:</label>
          <input
            type="text"
            value={newProtseduur.kas_nimi}
            onChange={(e) => setNewProtseduur({ ...newProtseduur, kas_nimi: e.target.value })}
          />
        </div>
        <div>
          <label>Kliendi email:</label>
          <input
            type="text"
            value={newProtseduur.kas_email}
            onChange={(e) => setNewProtseduur({ ...newProtseduur, kas_email: e.target.value })}
          />
        </div>
        <div>
          <label>Kliendi telefon:</label>
          <input
            type="text"
            value={newProtseduur.kas_telefon}
            onChange={(e) => setNewProtseduur({ ...newProtseduur, kas_telefon: e.target.value })}
          />
        </div>
        <div>
          <label>Meistri nimi:</label>
          <select
            value={newProtseduur.master_nimi}
            onChange={(e) => setNewProtseduur({ ...newProtseduur, master_nimi: e.target.value })}
          >
            <option value="">Vali meistri nimi</option>
            {masters.map((master) => (
              <option key={master.id} value={master.master_nimi}>
                {master.master_nimi}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Aeg:</label>
          <input
            type="datetime-local"
            value={newProtseduur.Aeg}
            onChange={(e) => setNewProtseduur({ ...newProtseduur, Aeg: e.target.value })}
          />
        </div>
        <button onClick={addProtseduur}>Lisa protseduur</button>
      </div>
    </div>
  );
}

export default App;
