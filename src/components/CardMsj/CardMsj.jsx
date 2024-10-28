import React from "react";

const CardMsj = ({ cel, mensaje }) => {
  
  const handleMensajeDirecto = () => {
    const numero = cel.replace(/\D/g, ""); // Elimina caracteres no numéricos
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
  };

  const handleCopyNumero = () => {
    const numero = cel.replace(/\D/g, ""); // Elimina caracteres no numéricos
    navigator.clipboard.writeText(numero)
      .then(() => {
        alert("Número copiado al portapapeles!");
      })
      .catch(err => {
        console.error("Error al copiar el número: ", err);
      });
  };

  const handleCopyMensaje = () => {
    navigator.clipboard.writeText(mensaje)
      .then(() => {
        alert("Mensaje copiado al portapapeles!");
      })
      .catch(err => {
        console.error("Error al copiar el mensaje: ", err);
      });
  };

  return (
    <div className="[--shadow:rgba(60,64,67,0.3)_0_1px_2px_0,rgba(60,64,67,0.15)_0_2px_6px_2px] w-4/5 h-auto rounded-2xl bg-white [box-shadow:var(--shadow)] max-w-[300px]">
      <div className="flex flex-col items-center justify-between gap-y-2 pt-9 px-6 pb-6">

        <h5 className="text-sm font-semibold mb-2 text-left mr-auto text-zinc-700">
          {cel}
        </h5>

        <p className="w-full mb-4 text-sm text-justify text-zinc-700">
          {mensaje}
        </p>

        <div className="flex items-center justify-between gap-x-1">
          <button
            className="mb-2 text-sm mr-auto text-zinc-600 w-1/2 cursor-pointer font-semibold transition-colors hover:text-[#634647] hover:underline underline-offset-2"
            onClick={handleCopyNumero}
          >
            Copy numero
          </button>

          <button
            className="font-semibold cursor-pointer py-2 px-8 w-max break-keep text-sm rounded-lg transition-colors text-[#634647] hover:text-[#ddad81] bg-[#ddad81] hover:bg-[#634647]"
            type="button"
            onClick={handleCopyMensaje}
          >
            Copy mens
          </button>
        </div>

        <button
          className="font-semibold cursor-pointer py-2 px-8 w-full break-keep text-sm rounded-lg transition-colors text-[#634647] hover:text-[#ddad81] bg-[#ddad81] hover:bg-[#634647]"
          type="button"
          onClick={handleMensajeDirecto}
        >
          Mensaje directo
        </button>
      </div>
    </div>
  );
};

export default CardMsj;
