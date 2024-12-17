import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { ContainerProfile, ClientInfo, VehicleList, VehicleItem } from './profile.styled';

const Profile = () => {
  const { id } = useParams();
  const [client, setClient] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchClient = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`http://localhost:3001/clientes/${id}`);
      setClient(response.data);
    } catch (error) {
      console.error('Error fetching client:', error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchClient();
  }, [id]);

  if (loading) return <p>Cargando...</p>;
  if (!client) return <p>No se encontró el cliente.</p>;

  return (
    <ContainerProfile>
      <h1>Perfil de {client.nombre} {client.apellido}</h1>
      <ClientInfo>
        <p><strong>DNI:</strong> {client.dni}</p>
        <p><strong>Teléfono:</strong> {client.telefono}</p>
        <p><strong>Localidad:</strong> {client.localidad}</p>
        <p><strong>Dirección:</strong> {client.direccion}</p>
      </ClientInfo>
      <h2>Vehículos</h2>
      {client.Vehicles.length > 0 ? (
        <VehicleList>
          {client.Vehicles.map((vehicle) => (
            <VehicleItem key={vehicle.id}>
              <p><strong>Marca:</strong> {vehicle.marca}</p>
              <p><strong>Modelo:</strong> {vehicle.modelo}</p>
              <p><strong>Patente:</strong> {vehicle.patente}</p>
              <p><strong>Compañía:</strong> {vehicle.compañia}</p>
              <p><strong>Cuota:</strong> {vehicle.cuota}</p>
            </VehicleItem>
          ))}
        </VehicleList>
      ) : (
        <p>Este cliente no tiene vehículos registrados.</p>
      )}
    </ContainerProfile>
  );
};

export default Profile;
