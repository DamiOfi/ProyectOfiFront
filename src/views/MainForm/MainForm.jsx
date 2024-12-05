import React, { useState } from "react";
import { motion } from "framer-motion";
import FormPostClient from "../../components/FormPostClient/FormPostClient";
import FormPostVehicle from "../../components/FormPostVehicle/FormPostVehicle";

const MainForm = () => {
  const [step, setStep] = useState(1); // Controla el paso actual
  const [clientId, setClientId] = useState(null); // Almacena el ID del cliente creado

  // Callback para avanzar al paso 2 cuando el cliente sea creado
  const handleClientCreated = (id) => {
    if (id) {
      setClientId(id);
      setStep(2); // Cambiar al segundo formulario
    } else {
      console.error("Client ID no recibido");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 py-5">
      {step === 1 && (
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 200 }}
          transition={{ duration: 0.5 }}
        >
          {/* Formulario para crear cliente */}
          <FormPostClient onClientCreated={handleClientCreated} />
        </motion.div>
      )}

      {step === 2 && clientId && (
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -200 }}
          transition={{ duration: 0.5 }}
        >
          {/* Formulario para crear vehículo */}
          <FormPostVehicle clientId={clientId} />
        </motion.div>
      )}

      {step === 2 && !clientId && (
        <div className="text-red-500 text-center">
          <p>Error: No se recibió el ID del cliente. Intenta nuevamente.</p>
        </div>
      )}
    </div>
  );
};

export default MainForm;
