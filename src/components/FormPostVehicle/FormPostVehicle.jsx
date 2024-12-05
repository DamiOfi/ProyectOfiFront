import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { notiToast } from "../../components/NotiToast/NotiToast";

const FormPostVehicle = ({ clientId }) => {
    const navigate = useNavigate();
    const [vehicleData, setVehicleData] = useState({
        clientId,
        tipo: "Auto",
        patente: "",
        compañia: "",
        cuota: "",
        cobertura: "",
        ultimo_pago: "",
        fecha_vencimiento: "",
        primer_pago: "",
        marca: "",
        modelo: "",
        año: "",
        precio_real: "",
        precio_agencia: "",
        local: "",
    });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVehicleData({
      ...vehicleData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/vehiculo", vehicleData);
      notiToast("success", "Vehículo agregado exitosamente");
      navigate("/");
      console.log("Vehículo guardado:", response.data);
    } catch (error) {
      notiToast("error", "Ocurrió un error al agregar el vehículo");
      console.error("Error:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-lg"
    >
      <h1 className="text-2xl font-bold mb-6 text-center">Agregar Vehículo</h1>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Patente</label>
        <input
          type="text"
          name="patente"
          value={vehicleData.patente}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Compañía</label>
        <input
          type="text"
          name="compañia"
          value={vehicleData.compañia}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Cuota</label>
        <input
          type="number"
          name="cuota"
          value={vehicleData.cuota}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Cobertura</label>
        <input
          type="text"
          name="cobertura"
          value={vehicleData.cobertura}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Último Pago</label>
        <input
          type="date"
          name="ultimo_pago"
          value={vehicleData.ultimo_pago}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Fecha de Vencimiento</label>
        <input
          type="date"
          name="fecha_vencimiento"
          value={vehicleData.fecha_vencimiento}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Primer Pago</label>
        <input
          type="date"
          name="primer_pago"
          value={vehicleData.primer_pago}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Marca</label>
        <input
          type="text"
          name="marca"
          value={vehicleData.marca}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Modelo</label>
        <input
          type="text"
          name="modelo"
          value={vehicleData.modelo}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Año</label>
        <input
          type="number"
          name="año"
          value={vehicleData.año}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Precio Real</label>
        <input
          type="number"
          name="precio_real"
          value={vehicleData.precio_real}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Precio Agencia</label>
        <input
          type="number"
          name="precio_agencia"
          value={vehicleData.precio_agencia}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Local</label>
        <input
          type="text"
          name="local"
          value={vehicleData.local}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Guardar Vehículo
        </button>
      </div>
    </form>
  );
};

export default FormPostVehicle;
