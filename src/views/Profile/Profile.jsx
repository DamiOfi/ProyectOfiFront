import React, { useEffect, useState, forwardRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AddVehicleCard, VehicleCard, OptionsMenu, DotsButton } from './profile.styled';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const Profile = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const client = location.state?.client;
  const clientId = client?.id;

  const [clientData, setClientData] = useState(null);
  const [vehicles, setVehicles] = useState([]);
  const [activeMenu, setActiveMenu] = useState(null);
  const [clientMenuActive, setClientMenuActive] = useState(false);

  const handleMenuToggle = (index) => {
    setActiveMenu(activeMenu === index ? null : index);
  };

  const toggleClientMenu = () => {
    setClientMenuActive(!clientMenuActive);
  };

  const fetchClientData = async () => {
    if (!clientId) return;

    try {
      const response = await axios.get(`https://proyectofi-production.up.railway.app/clientes/${clientId}`); // PRODUCCION
      // const response = await axios.get(`http://localhost:3001/clientes/${clientId}`); // LOCAL
      setClientData(response.data);
      setVehicles(response.data.Vehicles || []);
    } catch (error) {
      console.error('Error fetching client data:', error);
    }
  };

  useEffect(() => {
    fetchClientData();
  }, [clientId]);

  const handleAddVehicle = () => {
    navigate('/form-vehiculo', { state: { clientId } });
  };

  const handleDeleteVehicle = async (vehicleId) => {
    try {
      await axios.delete(`https://proyectofi-production.up.railway.app/vehiculo/${vehicleId}`); // PRODUCCION
      // await axios.delete(`http://localhost:3001/vehiculo/${vehicleId}`); // LOCAL
      setVehicles((prevVehicles) => prevVehicles.filter((vehicle) => vehicle.id !== vehicleId));
    } catch (error) {
      console.error('Error deleting vehicle:', error);
    }
  };

  if (!clientData) return <p className="text-center text-gray-500">Loading...</p>;

  const VehicleCardWrapper = forwardRef(({ vehicle, index }, ref) => (
    <VehicleCard ref={ref} className="transition-all duration-300 ease-in-out opacity-100">
      <div className="relative">
        <DotsButton onClick={() => handleMenuToggle(index)}>
          &#8942;
        </DotsButton>
        {activeMenu === index && (
          <OptionsMenu>
            <button onClick={() => console.log('Editar vehículo no implementado aún')}>Editar</button>
            <button onClick={() => handleDeleteVehicle(vehicle.id)}>Borrar</button>
          </OptionsMenu>
        )}
      </div>
      <h4>{vehicle.marca} {vehicle.modelo} ({vehicle.año})</h4>
      <p><strong>Patente:</strong> {vehicle.patente}</p>
      <p><strong>Tipo:</strong> {vehicle.tipo}</p>
      <p><strong>Compañía:</strong> {vehicle.compañia}</p>
      <p><strong>Último pago:</strong> {new Date(vehicle.ultimo_pago).toLocaleDateString()}</p>
      <p><strong>Fecha de vencimiento:</strong> {new Date(vehicle.fecha_vencimiento).toLocaleDateString()}</p>
      <p><strong>Precio real:</strong> ${vehicle.precio_real}</p>
      <p><strong>Precio agencia:</strong> ${vehicle.precio_agencia}</p>
    </VehicleCard>
  ));

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white rounded-lg shadow-md">
      <div className="mb-6 relative">
        <div className="flex justify-center gap-x-8 items-start">
          <div>
            <h2 className="text-2xl font-bold mb-2">{`${clientData.nombre} ${clientData.apellido}`}</h2>
            <p className="text-gray-600"><strong>DNI:</strong> {clientData.dni}</p>
            <p className="text-gray-600"><strong>Teléfono:</strong> {clientData.telefono}</p>
            <p className="text-gray-600"><strong>Localidad:</strong> {clientData.localidad}</p>
            <p className="text-gray-600"><strong>Dirección:</strong> {clientData.direccion}</p>
            <p className="text-gray-600"><strong>Enviar mensaje:</strong> {clientData.enviarMsj ? 'Sí' : 'No'}</p>
          </div>
          <div className="relative">
            <DotsButton onClick={toggleClientMenu}>
              &#8942;
            </DotsButton>
            {clientMenuActive && (
              <OptionsMenu>
                <button onClick={() => console.log('Editar cliente no implementado aún')}>Editar</button>
                <button onClick={() => console.log('Eliminar cliente no implementado aún')}>Eliminar</button>
              </OptionsMenu>
            )}
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">Vehículos</h3>
        <TransitionGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {vehicles.map((vehicle, index) => (
            <CSSTransition
              key={vehicle.id}
              timeout={300}
              classNames="vehicle"
              unmountOnExit
            >
              <VehicleCardWrapper vehicle={vehicle} index={index} />
            </CSSTransition>
          ))}
        </TransitionGroup>

        <AddVehicleCard onClick={handleAddVehicle}>
          <p className="text-gray-500 text-center cursor-pointer">+ Agregar vehículo</p>
        </AddVehicleCard>
      </div>
    </div>
  );
};

export default Profile;
