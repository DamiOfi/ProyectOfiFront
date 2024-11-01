import React, { useState } from "react";
import { notiToast } from "../NotiToast/NotiToast";
import BtnPushNumber from "../BtnPushNumber/BtnPushNumber";

const CardMsj = ({ num, mensaje, name, surname, id, company, patent, share, coverage, lastPayment }) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleToggleDetails = () => {
    setShowDetails((prev) => !prev);
  };

  const handleMensajeDirecto = () => {
    const url = `https://wa.me/54${num}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
  };

  const handleCopyNumero = () => {
    const numero = String(num).trim();

    if (numero.length === 10) {
      navigator.clipboard.writeText(numero)
        .then(() => {
          notiToast("success","Número copiado!");
        })
        .catch(err => {
          console.error("Error al copiar el número: ", err);
        });
    } else {
      notiToast("error","Número no válido.");
    }
  };

  const handleCopyMensaje = () => {
    navigator.clipboard.writeText(mensaje)
      .then(() => {
        notiToast("success","Mensaje copiado!");
      })
      .catch(err => {
        console.error("Error al copiar el mensaje: ", err);
      });
  };

  return (
    <div className="w-full items-center h-auto rounded-2xl py-2 px-4 bg-white [box-shadow:var(--shadow)] [--shadow:rgba(60,64,67,0.3)_0_1px_2px_0,rgba(60,64,67,0.15)_0_2px_6px_2px] ">
      <div className="flex items-center justify-between gap-y-2">

        <div className="h-10 flex items-center justify-center pr-1 text-zinc-600 sm:text-sm text-xs transition-all">
          <span>#{id}</span>
        </div>

        <div 
          className="h-10 flex items-center justify-center px-1 truncate cursor-pointer hover:text-[#634647] hover:border-b-2 hover:border-[#634647] transition-colors duration-200"
          onClick={handleToggleDetails}
        >
          <p className="truncate sm:text-sm text-xs font-medium transition-all">
            {surname} {name}
          </p>
        </div>

        {num == null ? <BtnPushNumber /> : 
        <div className="h-10 flex items-center truncate justify-center px-1">
          <p className="font-semibold truncate text-left mr-auto text-zinc-700 sm:text-sm text-xs transition-all">
            {num}
          </p>
        </div>}

        <div className="flex items-center justify-between gap-x-1">
          <button
            className="sm:text-sm text-xs transition-all py-1 px-2 w-auto text-zinc-600 cursor-pointer rounded-lg border font-semibold hover:text-[#634647] hover:underline underline-offset-2"
            onClick={handleCopyNumero}
          >Copy Num</button>

          <button
            className="font-semibold cursor-pointer py-1 px-2 w-auto break-keep sm:text-sm text-xs transition-all rounded-lg text-[#634647] hover:text-[#ddad81] bg-[#ddad81] hover:bg-[#634647]"
            type="button"
            onClick={handleCopyMensaje}
          >
            Copy Msj
          </button>

          <button
            className="font-semibold cursor-pointer py-1 px-2 w-auto break-keep sm:text-sm text-xs transition-all rounded-lg text-[#634647] hover:text-[#ddad81] bg-[#ddad81] hover:bg-[#634647]"
            type="button"
            onClick={handleMensajeDirecto}
          >
            Msj Direct
          </button>
        </div>
      </div>

      <div 
        className={`flex items-center justify-between gap-2 flex-wrap sm:text-sm text-xs mt-2 p-2 bg-gray-100 rounded transition-all duration-300 ${showDetails ? "max-h-40 opacity-100" : "max-h-0 opacity-0 overflow-hidden p-0 mt-0"}`}
      >
        <div className="flex items-center justify-center bg-white px-2 py-1 rounded">
          <p>Compañia: {company}</p>
        </div>
        <div className="flex items-center justify-center bg-white px-2 py-1 rounded">
          <p>Patente: {patent}</p>
        </div>
        <div className="flex items-center justify-center bg-white px-2 py-1 rounded">
          <p>Cuota: {share}</p>
        </div>
        <div className="flex items-center justify-center bg-white px-2 py-1 rounded">
          <p>Cobertura: {coverage}</p>
        </div>
        <div className="flex items-center justify-center bg-white px-2 py-1 rounded">
          <p>Ult. Pago: {lastPayment}</p>
        </div>
      </div>
    </div>
  );
};

export default CardMsj;
