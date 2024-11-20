import React, { useEffect, useState } from 'react';
import { ContainerMessages } from './messages.styled';
import axios from 'axios';
import CardMsj from '../../components/CardMsj/CardMsj';
import CardSkeletonExpired from '../../components/CardSkeletonExpired/CardSkeletonExpired';

// Función para formatear fechas en el formato dd/mm/aaaa
const formatFecha = (fecha) => {
  const date = new Date(fecha);
  const dia = String(date.getDate()).padStart(2, '0');
  const mes = String(date.getMonth() + 1).padStart(2, '0'); // Los meses comienzan desde 0
  const anio = date.getFullYear();
  return `${dia}/${mes}/${anio}`;
};

const Messages = () => {
  const [clientes, setClientes] = useState([]);
  const [loading, setLoading] = useState(true); // Estado de loading

  useEffect(() => {
    // Hacer la solicitud al servidor para obtener los clientes asegurados
    axios.get('http://localhost:3001/clientes-vencidos')
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
  const vencidosHoy = clientes.filter(cliente => cliente.vencido === true);
  const vencenEnTresDias = clientes.filter(cliente => cliente.vencido === false);
  let auxIdToday = 0;
  let auxId = 0;
  
  return (
    <ContainerMessages className='flex flex-col p-10'>
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
                  nombre={cliente.nombre} 
                  apellido={cliente.apellido} 
                  telefono={cliente.telefono} 
                  mensaje={cliente.mensaje} 
                  key={cliente.id} 
                  id={++auxIdToday}
                  compania={cliente.compania}
                  patente={cliente.patente}
                  cuota={cliente.cuota}
                  cobertura={cliente.cobertura}
                  ultimoPago={formatFecha(cliente.ultimo_pago)} // Formatear fecha aquí
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
                  nombre={cliente.nombre} 
                  apellido={cliente.apellido} 
                  telefono={cliente.telefono} 
                  mensaje={cliente.mensaje} 
                  key={cliente.id} 
                  id={++auxId}
                  compania={cliente.compania}
                  patente={cliente.patente}
                  cuota={cliente.cuota}
                  cobertura={cliente.cobertura}
                  ultimoPago={formatFecha(cliente.ultimo_pago)} // Formatear fecha aquí
                />
              ))
            ) : (
              <div className='w-full flex items-center justify-center'>
                <p className='text-[#c1121f] text-2xl'>No hay clientes que venzan en tres días.</p>
              </div>
            )}
          </div>
          <div className='text-zinc-600 w-full flex items-center justify-end text-xs m-2 px-4'>Total: {auxId + auxIdToday}</div>
        </>
      )}
    </ContainerMessages>
  );
};

export default Messages;

