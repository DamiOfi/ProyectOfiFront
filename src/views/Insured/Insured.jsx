import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {
  ContainerInsured,
  SearchContainer,
  SearchInput,
  Button,
  InsuredList,
  TableHeader,
  TableRow,
  TableCell,
} from './insured.styled';

const Insured = () => {
  const [clients, setClients] = useState([]);
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const fetchAllClients = async () => {
    try {
      const response = await axios.get('http://localhost:3001/clientes');
      setClients(response.data);
    } catch (error) {
      console.error('Error al obtener los asegurados:', error);
    }
  };

  const handleClientClick = async (id) => {
    try {
      const response = await axios.get(`http://localhost:3001/clientes/${id}`);
      const clientData = response.data;
      navigate(`/profile`, { state: { client: clientData } });
    } catch (error) {
      console.error('Error al obtener la información del cliente:', error);
    }
  };

  const handleSearch = () => {
    if (search.trim() === '') {
      fetchAllClients();
    } else {
      console.log('Función de búsqueda no implementada aún');
    }
  };

  useEffect(() => {
    fetchAllClients();
  }, []);

  return (
    <ContainerInsured>
      <SearchContainer>
        <SearchInput
          type="text"
          placeholder="Buscar asegurado..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button onClick={handleSearch}>Buscar</Button>
      </SearchContainer>

      <InsuredList>
        <TableHeader>
          <TableCell>Apellido</TableCell>
          <TableCell>Nombre</TableCell>
          <TableCell>Patente</TableCell>
          <TableCell>Compañía</TableCell>
          <TableCell>Cuota</TableCell>
        </TableHeader>
        {clients.map((client) => (
          <TableRow key={client.id} onClick={() => handleClientClick(client.id)}>
            <TableCell>{client.apellido}</TableCell>
            <TableCell>{client.nombre}</TableCell>
            <TableCell>
              {client.Vehicles.length > 0 ? client.Vehicles[0].patente : 'N/A'}
            </TableCell>
            <TableCell>
              {client.Vehicles.length > 0 ? client.Vehicles[0].compañia : 'N/A'}
            </TableCell>
            <TableCell>
              {client.Vehicles.length > 0 ? client.Vehicles[0].cuota : 'N/A'}
            </TableCell>
          </TableRow>
        ))}
      </InsuredList>
    </ContainerInsured>
  );
};

export default Insured;
