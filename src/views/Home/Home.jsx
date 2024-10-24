import React, { useEffect, useState } from 'react';
import { ContainerHome } from './home.styled';
import axios from 'axios';
import CardMsj from '../../components/CardMsj/CardMsj';

const Home = () => {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    // Hacer la solicitud al servidor para obtener los clientes asegurados
    axios.get('http://localhost:3000/clientes-vencidos') // Cambia la URL por la que corresponda
      .then(response => {
        setClientes(response.data); // Asignar los datos obtenidos al estado
      })
      .catch(error => {
        console.error('Error al obtener los clientes:', error);
      });
  }, []);

  return (
    <ContainerHome className='flex '>
      {clientes.map(cliente => (
        <CardMsj cel={cliente.telefono} mensaje={cliente.mensaje} key={cliente.id}></CardMsj>
      ))}
    </ContainerHome>
  );
}

export default Home;
