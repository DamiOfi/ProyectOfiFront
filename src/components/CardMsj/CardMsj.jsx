import React from "react";

const CardMsj = ({ num, mensaje, name, surname, id }) => {
  
  const handleMensajeDirecto = () => {
    const numero = num.replace(/\D/g, ""); // Elimina caracteres no numéricos
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
  };

  const handleCopyNumero = () => {
    const numero = num.replace(/\D/g, ""); // Elimina caracteres no numéricos
  
    // Verifica que el número tenga al menos 13 dígitos para poder extraer desde el 11
    if (numero.length >= 12) {
      const numeroSinCodigo = numero.slice(2); // Elimina el +54
      /* const numeroFinal = numeroSinCodigo.slice(0, 11); */ // Obtiene los primeros 11 dígitos
  
      navigator.clipboard.writeText(numeroSinCodigo)
        .then(() => {
          alert("Número copiado al portapapeles!");
        })
        .catch(err => {
          console.error("Error al copiar el número: ", err);
        });
    } else {
      alert("Número no válido.");
    }
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
    <div className="w-full items-center h-auto rounded-2xl py-2 px-4 bg-white [box-shadow:var(--shadow)] [--shadow:rgba(60,64,67,0.3)_0_1px_2px_0,rgba(60,64,67,0.15)_0_2px_6px_2px] ">
      <div className="flex items-center justify-between gap-y-2">

        <div className="h-10 flex items-center justify-center pr-1 text-zinc-600 sm:text-sm text-xs">
            <span>#{id}</span>
        </div>

        <div className="h-10 flex items-center justify-center px-1 truncate">
          <p className="truncate sm:text-sm text-xs">
            {surname} {name}
          </p>
        </div>

        <div className="h-10 flex items-center truncate justify-center px-1">
          <p className="font-semibold truncate text-left mr-auto text-zinc-700 sm:text-sm text-xs">
            {num}
          </p>
        </div>

        <div className="flex items-center justify-between gap-x-1">
          <button
            className="sm:text-sm text-xs py-1 px-2 w-auto text-zinc-600 cursor-pointer rounded-lg border font-semibold transition-colors hover:text-[#634647] hover:underline underline-offset-2"
            onClick={handleCopyNumero}
          >Copy Num</button>

          <button
            className="font-semibold cursor-pointer py-1 px-2 w-auto break-keep sm:text-sm text-xs rounded-lg transition-colors text-[#634647] hover:text-[#ddad81] bg-[#ddad81] hover:bg-[#634647]"
            type="button"
            onClick={handleCopyMensaje}
          >
            Copy Msj
          </button>

          <button
            className="font-semibold cursor-pointer py-1 px-2 w-auto break-keep sm:text-sm text-xs rounded-lg transition-colors text-[#634647] hover:text-[#ddad81] bg-[#ddad81] hover:bg-[#634647]"
            type="button"
            onClick={handleMensajeDirecto}
          >
            Msj Direct
          </button>
        </div>

      </div>
    </div>
  );
};

export default CardMsj;
