import React, { useEffect, useState } from 'react';
import { ContainerMessages } from './messages.styled';
import axios from 'axios';
import CardMsj from '../../components/CardMsj/CardMsj';
import CardSkeletonExpired from '../../components/CardSkeletonExpired/CardSkeletonExpired';

const Messages = () => {
  const [clientes, setClientes] = useState([]);
  const [loading, setLoading] = useState(true); // Estado de loading

  useEffect(() => {
    // Hacer la solicitud al servidor para obtener los clientes asegurados
    axios.get('http://localhost:3000/clientes-vencidos')
      .then(response => {
        setClientes(response.data); // Asignar los datos obtenidos al estado
      })
      .catch(error => {
        console.error('Error al obtener los clientes:', error);
      })
      .finally(() => {
        setLoading(false); // Desactivar loading al finalizar la solicitud
      });
  }, []);

  // Filtrar clientes vencidos y no vencidos
  const vencidosHoy = clientes.filter(cliente => cliente.defeated === true);
  const vencenEnTresDias = clientes.filter(cliente => cliente.defeated === false);

  return (
    <ContainerMessages className='flex flex-col p-10'>
      {/* <CardSkeletonExpired></CardSkeletonExpired> */}
      <div className='text-4xl text-[#bc6c25]'>
        <h1>Clientes vencidos</h1>
      </div>

      {loading ? ( // Condicional para mostrar el loading
        <div className='w-full flex items-center justify-center'>
          <p className='text-[#c1121f] text-2xl'>Cargando...</p>
        </div>
      ) : (
        <>
          <div className='text-2xl text-[#dda15e] w-full h-auto my-12 flex justify-start'>
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
                  company={cliente.company}
                  patent={cliente.patent}
                  share={cliente.share}
                  coverage={cliente.coverage}
                  lastPayment={cliente.lastPayment}
                />
              ))
            ) : (
              <div className='w-full flex items-center justify-center'>
                <p className='text-[#c1121f] text-2xl'>No hay clientes vencidos hoy.</p>
              </div>
            )}
          </div>

          <div className='text-2xl text-[#dda15e] w-full h-auto my-12 flex justify-start'>
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
                  company={cliente.company}
                  patent={cliente.patent}
                  share={cliente.share}
                  coverage={cliente.coverage}
                  lastPayment={cliente.lastPayment}
                />
              ))
            ) : (
              <div className='w-full flex items-center justify-center'>
                <p className='text-[#c1121f] text-2xl'>No hay clientes que venzan en tres días.</p>
              </div>
            )}
          </div>
        </>
      )}
    </ContainerMessages>
  );
}

export default Messages;
