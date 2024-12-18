import React, { useState, useEffect } from "react";
import axios from "axios";
import { ContainerFormPostCLient } from "./formPostClient.styled";
import { notiToast } from "../../components/NotiToast/NotiToast";
import {
  validateDni,
  validateNombre,
  validateApellido,
  validateTelefono,
  validateDireccion,
  validateLocalidad,
} from "./formValidations";
import { div } from "framer-motion/client";

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

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  useEffect(() => {
    const allFieldsFilled = Object.values(formData).every((value) => value !== "");
    const noErrors = Object.values(errors).every((error) => !error);
    setIsButtonDisabled(!(allFieldsFilled && noErrors));
  }, [formData, errors]);  

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;

    setFormData({
      ...formData,
      [name]: name === "apellido" || "nombre" || "localidad" || "direccion" ? value.toUpperCase() :newValue,
    });

    validateField(name, newValue);
  };

  const validateField = (name, value) => {
    let error = "";
    switch (name) {
      case "dni":
        error = validateDni(value);
        break;
      case "nombre":
        error = validateNombre(value);
        break;
      case "apellido":
        error = validateApellido(value);
        break;
      case "telefono":
        error = validateTelefono(value);
        break;
      case "direccion":
        error = validateDireccion(value);
        break;
      case "localidad":
        error = validateLocalidad(value);
        break;
      default:
        break;
    }
    setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      newErrors[key] = validateField(key, formData[key]);
    });

    if (Object.values(newErrors).some((error) => error)) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await axios.post("http://localhost:3001/clientes", formData);
      notiToast("success", "Cliente agregado exitosamente");
      onClientCreated(response.data.cliente.id);
    } catch (error) {
      notiToast("error", "Ocurrió un error al agregar el cliente");
    } finally {
      setIsSubmitting(false);
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
              {errors.dni && <div className="w-full rounded bg-red-200 p-1 border-solid border-2 border-red-600 flex items-center font-bold justify-center"><p className="text-red-600 text-xs">{errors.dni}</p></div>}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Nombre</label>
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
              {errors.nombre && <div className="w-full rounded bg-red-200 p-1 border-solid border-2 border-red-600 flex items-center font-bold justify-center"><p className="text-red-600 text-xs">{errors.nombre}</p></div>}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Localidad</label>
              <input
                type="text"
                name="localidad"
                value={formData.localidad}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
              {errors.localidad && <div className="w-full rounded bg-red-200 p-1 border-solid border-2 border-red-600 flex items-center font-bold justify-center"><p className="text-red-600 text-xs">{errors.localidad}</p></div>}
            </div>
          </div>
          <div className="flex flex-col items-center justify-between gap-y-3">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Apellido</label>
              <input
                type="text"
                name="apellido"
                value={formData.apellido}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
              {errors.apellido && <div className="w-full rounded bg-red-200 p-1 border-solid border-2 border-red-600 flex items-center font-bold justify-center"><p className="text-red-600 text-xs">{errors.apellido}</p></div>}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Teléfono</label>
              <input
                type="text"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
              {errors.telefono && <div className="w-full rounded bg-red-200 p-1 border-solid border-2 border-red-600 flex items-center font-bold justify-center"><p className="text-red-600 text-xs">{errors.telefono}</p></div>}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Dirección</label>
              <input
                type="text"
                name="direccion"
                value={formData.direccion}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
              {errors.direccion && <div className="w-full rounded bg-red-200 p-1 border-solid border-2 border-red-600 flex items-center font-bold justify-center"><p className="text-red-600 text-xs">{errors.direccion}</p></div>}
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end w-full">
          <button
            type="submit"
            disabled={isButtonDisabled || isSubmitting}
            className={`${
              isButtonDisabled || isSubmitting ? "bg-gray-500 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-700"
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
