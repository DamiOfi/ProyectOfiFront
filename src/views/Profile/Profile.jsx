import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FormPostVehicle from '../../components/FormPostVehicle/FormPostVehicle';
/* import './Profile.css'; */

const Profile = ({ clientId }) => {
  const [clientData, setClientData] = useState(null);
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    const fetchClientData = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/clientes/${clientId}`);
        setClientData(response.data);
        setVehicles(response.data.vehicles || []);
      } catch (error) {
        console.error('Error fetching client data:', error);
      }
    };

    fetchClientData();
  }, [clientId]);

  const handleAddVehicle = (newVehicle) => {
    setVehicles((prevVehicles) => [...prevVehicles, newVehicle]);
  };

  if (!clientData) return <p>Loading...</p>;

  return (
    <div className="profile-container">
      <div className="client-info">
        <h2>{`${clientData.nombre} ${clientData.apellido}`}</h2>
        <p><strong>Teléfono:</strong> {clientData.telefono}</p>
        <p><strong>Compañía:</strong> {clientData.compania}</p>
        <p><strong>Último pago:</strong> {clientData.ultimoPago}</p>
        <p><strong>Fecha de vencimiento:</strong> {clientData.fechaVencimiento}</p>
        <p><strong>Ganancia:</strong> ${clientData.ganancia}</p>
      </div>

      <div className="vehicles-list">
        <h3>Vehículos</h3>
        <div className="vehicle-cards">
          {vehicles.map((vehicle, index) => (
            <div key={index} className="vehicle-card">
              <p><strong>Patente:</strong> {vehicle.patente}</p>
              <p><strong>Modelo:</strong> {vehicle.modelo}</p>
              <p><strong>Año:</strong> {vehicle.anio}</p>
              <p><strong>Color:</strong> {vehicle.color}</p>
            </div>
          ))}

          {/* Card to add a new vehicle */}
          <div className="add-vehicle-card">
            <FormPostVehicle clientId={clientId} onAddVehicle={handleAddVehicle} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
