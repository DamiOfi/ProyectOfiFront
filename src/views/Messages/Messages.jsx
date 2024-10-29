import React, { useEffect, useState } from 'react';
import { ContainerMessages } from './messages.styled';
import axios from 'axios';
import CardMsj from '../../components/CardMsj/CardMsj';

const Messages = () => {
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

  // Filtrar clientes vencidos y no vencidos
  const vencidosHoy = clientes.filter(cliente => cliente.defeated === true);
  const vencenEnTresDias = clientes.filter(cliente => cliente.defeated === false);

  return (
    <ContainerMessages className='flex flex-col p-10'>
      <div className='text-4xl'>
        <h1>Clientes vencidos</h1>
      </div>
      <div className='text-2xl text-zinc-500 w-full h-auto my-12 flex justify-start'>
        <h2>Vencen el día de hoy</h2>
      </div>
      <div className='flex flex-wrap gap-4'>
        {vencidosHoy.length > 0 ? (
          vencidosHoy.map(cliente => (
            <CardMsj 
              name={cliente.name} 
              surname={cliente.surname} 
              num={cliente.telefono} 
              mensaje={cliente.mensaje} 
              key={cliente.id} 
              id={cliente.id} 
            />
          ))
        ) : (
          <p>No hay clientes vencidos hoy.</p>
        )}
      </div>
      <div className='text-2xl text-zinc-500 w-full h-auto my-12 flex justify-start'>
        <h2>Vencen en tres días</h2>
      </div>
      <div className='flex flex-wrap gap-4'>
        {vencenEnTresDias.length > 0 ? (
          vencenEnTresDias.map(cliente => (
            <CardMsj 
              name={cliente.name} 
              surname={cliente.surname} 
              num={cliente.telefono} 
              mensaje={cliente.mensaje} 
              key={cliente.id} 
              id={cliente.id} 
            />
          ))
        ) : (
          <p>No hay clientes que venzan en tres días.</p>
        )}
      </div>
    </ContainerMessages>
  );
}

export default Messages;
