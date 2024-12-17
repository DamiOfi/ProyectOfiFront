import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ContainerInsured, SearchBar, ResultsList, ListItem } from './insured.styled';

const Insured = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [insuredList, setInsuredList] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const fetchInsured = async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:3001/clientes');
      setInsuredList(response.data);
    } catch (error) {
      console.error('Error fetching insured:', error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchInsured();
  }, []);

  const handleSearch = () => {
    if (searchTerm.trim() === '') {
      fetchInsured();
    } else {
      // Future functionality: Add logic for searching based on the input
      console.log('Search triggered with:', searchTerm);
    }
  };

  const handleClientClick = (clientId) => {
    navigate(`/profile/${clientId}`);
  };

  return (
    <ContainerInsured>
      <h1>Asegurados</h1>
      <SearchBar>
        <input
          type="text"
          placeholder="Buscar asegurado..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Buscar</button>
      </SearchBar>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <ResultsList>
          {insuredList.map((insured) => (
            <ListItem key={insured.id} onClick={() => handleClientClick(insured.id)}>
              <p><strong>{insured.apellido}, {insured.nombre}</strong></p>
              <p>DNI: {insured.dni}</p>
              <p>Teléfono: {insured.telefono}</p>
              {insured.Vehicles.length > 0 ? (
                <p>Vehículos: {insured.Vehicles.length}</p>
              ) : (
                <p>Sin vehículos registrados.</p>
              )}
            </ListItem>
          ))}
        </ResultsList>
      )}
    </ContainerInsured>
  );
};

export default Insured;
