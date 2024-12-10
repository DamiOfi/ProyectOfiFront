import React, { useState, useEffect } from "react";
import axios from "axios";
import { ContainerFormPostCLient } from "./formPostClient.styled";
import { notiToast } from "../../components/NotiToast/NotiToast";

const FormPostClient = ({ onClientCreated }) => {
  const [formData, setFormData] = useState({
    dni: "",
    telefono: "",
    nombre: "",
    apellido: "",
    localidad: "",
    direccion: "",
    enviarMsj: true,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true); // Estado para habilitar/deshabilitar el botón

  useEffect(() => {
    // Verifica si todos los campos están llenos
    const allFieldsFilled = Object.values(formData).every((value) => value !== "");
    setIsButtonDisabled(!allFieldsFilled); // Si algún campo está vacío, deshabilita el botón
  }, [formData]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Cambiar a true al comenzar el envío
    try {
      const response = await axios.post("http://localhost:3001/clientes", formData);
      console.log(response);
      const clientId = response.data.cliente.id; // Obtén el ID del cliente creado
      console.log(clientId);
      notiToast("success", "Cliente agregado exitosamente");
      onClientCreated(clientId); // Notifica al componente padre
    } catch (error) {
      notiToast("error", "Ocurrió un error al agregar el cliente");
      console.error("Error:", error);
    } finally {
      setIsSubmitting(false); // Reestablece el estado al finalizar
    }
  };

  return (
    <ContainerFormPostCLient>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-xl flex items-center justify-between gap-6 flex-col"
      >
        <h1 className="text-2xl font-bold mb-6 text-center">Agregar Cliente</h1>
        <div className="flex justify-between items-center gap-x-6 flex-col sm:flex-row">
          <div className="flex flex-col items-center justify-between gap-y-3">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">DNI</label>
              <input
                type="text"
                name="dni"
                value={formData.dni}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Nombre
              </label>
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Localidad
              </label>
              <input
                type="text"
                name="localidad"
                value={formData.localidad}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-between gap-y-3">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Apellido
              </label>
              <input
                type="text"
                name="apellido"
                value={formData.apellido}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Teléfono
              </label>
              <input
                type="text"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Dirección
              </label>
              <input
                type="text"
                name="direccion"
                value={formData.direccion}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end w-full">
          <button
            type="submit"
            disabled={isButtonDisabled || isSubmitting} // Deshabilitar el botón si no todos los campos están llenos o si está enviando
            className={`${
              isButtonDisabled || isSubmitting ? "bg-gray-500" : "bg-blue-500 hover:bg-blue-700"
            } text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
          >
            Siguiente
          </button>
        </div>
      </form>
    </ContainerFormPostCLient>
  );
};

export default FormPostClient;
