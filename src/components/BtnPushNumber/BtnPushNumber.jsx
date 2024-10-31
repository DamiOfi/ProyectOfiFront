import React from 'react';
import { notiToast } from '../NotiToast/NotiToast';

const BtnPushNumber = () => {
  return (
    <div>
        <button
            className="font-semibold cursor-pointer py-1 px-2 w-auto break-keep sm:text-sm text-xs rounded-lg transition-colors text-[#634647] hover:text-[#ddad81] bg-[#faedcd] hover:bg-[#634647]"
            type="button"
            onClick={() => notiToast("error", "Todavia no funciona imbecil")}
        >
            Agregar Num
        </button>
    </div>
  )
}

export default BtnPushNumber
