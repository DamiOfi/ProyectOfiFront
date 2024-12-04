import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl text-[#bc6c25] mb-8">Bienvenido</h1>
      <Link to="/clientes-vencidos">
        <button className="px-6 py-3 bg-[#dda15e] text-white text-lg rounded-lg shadow-md hover:bg-[#bc6c25]">
          Ver Clientes Vencidos
        </button>
      </Link>

      <Link to="/asegurado">
        <button className="px-6 py-3 bg-[#dda15e] text-white text-lg rounded-lg shadow-md hover:bg-[#bc6c25]">
          Asegurados
        </button>
      </Link>

      <Link to="/formulario-cliente">
        <button className="px-6 py-3 bg-[#dda15e] text-white text-lg rounded-lg shadow-md hover:bg-[#bc6c25]">
          Agregar cliente
        </button>
      </Link>
    </div>
  );
};

export default Home;
