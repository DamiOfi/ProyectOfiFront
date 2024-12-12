import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { notiToast } from "../../components/NotiToast/NotiToast";

const FormPostVehicle = ({ clientId }) => {
  const navigate = useNavigate();
  const getDefaultExpirationDate = () => {
    const today = new Date();
    today.setMonth(today.getMonth() + 1);
    return today.toISOString().split("T")[0];
  };

  const [vehicleData, setVehicleData] = useState({
    clientId,
    tipo: "",
    patente: "",
    compañia: "",
    cuota: "1",
    cobertura: "",
    ultimo_pago: new Date().toISOString().split("T")[0],
    fecha_vencimiento: getDefaultExpirationDate(),
    primer_pago: new Date().toISOString().split("T")[0],
    marca: "",
    modelo: "",
    año: "",
    precio_real: "",
    precio_agencia: "",
    local: "",
  });

  const [isButtonDisabled, setIsButtonDisabled] = useState(true); // Estado para habilitar/deshabilitar el botón

  useEffect(() => {
    // Verifica si todos los campos están llenos
    const allFieldsFilled = Object.values(vehicleData).every((value) => value !== "");
    setIsButtonDisabled(!allFieldsFilled); // Si algún campo está vacío, deshabilita el botón
  }, [vehicleData]);

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
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-lg flex flex-col gap-10 justify-center items-center"
    >
      <h1 className="text-2xl font-bold mb-6 text-center">Agregar Vehículo</h1>
      
      <div className="container w-full h-auto flex justify-between items-center gap-y-10 flex-col">
      <div className=""><h2>Informacion del vehiculo</h2></div>
        <div className="vehiculo w-full h-auto flex justify-center items-center gap-x-6 flex-col sm:flex-row">
          <div className="flex flex-wrap gap-x-4 gap-y-8 justify-center items-center min-[476px]:justify-between">
          <div className="flex-grow-1 basis-48">
              <label className="block text-gray-700 text-sm font-bold mb-2">Tipo</label>
              <select
                name="tipo"
                value={vehicleData.tipo}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              >
                <option value="">Seleccione</option>
                <option value="AUTO">AUTO</option>
                <option value="MOTO">MOTO</option>
                <option value="CAMIONETA">CAMIONETA</option>
              </select>
            </div>
            <div className="flex-grow-1 basis-48">
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
            <div className="flex-grow-1 basis-48">
              <label className="block text-gray-700 text-sm font-bold mb-2">Marca</label>
              <select
                name="marca"
                value={vehicleData.marca}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              >
                <option value="">Seleccione</option>
                <option value="TOYOTA">TOYOTA</option>
                <option value="FORD">FORD</option>
                <option value="CHEVROLET">CHEVROLET</option>
              </select>
            </div>
            <div className="flex-grow-1 basis-48">
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
            <div className="flex-grow-1 basis-48">
              <label className="block text-gray-700 text-sm font-bold mb-2">Año</label>
              <input
                type="text"
                name="año"
                value={vehicleData.año}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
          </div>
        </div>
        <div className=""><h2>Informacion del seguro</h2></div>
        <div className="cliente w-full h-auto flex justify-center items-center gap-x-6 flex-col sm:flex-row">
          <div className="flex flex-wrap gap-x-4 gap-y-8 justify-center items-center min-[476px]:justify-between">
          <div className="flex-grow-1 basis-48">
              <label className="block text-gray-700 text-sm font-bold mb-2">Compañía</label>
              <select
                name="compañia"
                value={vehicleData.compañia}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              >
                <option value="">Seleccione</option>
                <option value="ALLIANZ">ALLIANZ</option>
                <option value="MAPFRE">MAPFRE</option>
                <option value="SURA">SURA</option>
              </select>
            </div>
            <div className="flex-grow-1 basis-48">
              <label className="block text-gray-700 text-sm font-bold mb-2">Cobertura</label>
              <select
                name="cobertura"
                value={vehicleData.cobertura}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              >
                <option value="">Seleccione</option>
                <option value="TOTAL">TOTAL</option>
                <option value="PARCIAL">PARCIAL</option>
                <option value="BASICA">BASICA</option>
              </select>
            </div>
            <div className="flex-grow-1 basis-48">
              <label className="block text-gray-700 text-sm font-bold mb-2">Cuota</label>
              <input
                type="number"
                name="cuota"
                value={vehicleData.cuota}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
                min="1"
              />
            </div>
            <div className="flex-grow-1 basis-48">
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
            <div className="flex-grow-1 basis-48">
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
            <div className="flex-grow-1 basis-48">
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
            <div className="flex-grow-1 basis-48">
              <label className="block text-gray-700 text-sm font-bold mb-2">Precio Real</label>
              <input
                type="text"
                name="precio_real"
                value={vehicleData.precio_real}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="flex-grow-1 basis-48">
              <label className="block text-gray-700 text-sm font-bold mb-2">Precio Agencia</label>
              <input
                type="text"
                name="precio_agencia"
                value={vehicleData.precio_agencia}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="flex-grow-1 basis-48">
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
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center w-full">
        <button
          type="submit"
          className={`${
            isButtonDisabled ? "bg-gray-500" : "bg-green-500 hover:bg-green-700"
          } text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
          disabled={isButtonDisabled} // Deshabilitar si el botón no debe estar habilitado
        >
          Guardar Vehículo
        </button>
      </div>
    </form>
  );
};

export default FormPostVehicle;
