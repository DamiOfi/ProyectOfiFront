export const validateDni = (dni) => {
    if (!dni) return "El DNI es obligatorio.";
    return "";
  };
  
  export const validateNombre = (nombre) => {
    if (!nombre) return "El nombre es obligatorio.";
    if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(nombre)) return "El nombre solo puede contener letras.";
    return "";
  };
  
  export const validateApellido = (apellido) => {
    if (!apellido) return "El apellido es obligatorio.";
    if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(apellido)) return "El apellido solo puede contener letras.";
    return "";
  };
  
  export const validateTelefono = (telefono) => {
    if (!telefono) return "El teléfono es obligatorio.";
    if (!/^\d{10}$/.test(telefono)) return "El teléfono debe tener 10 dígitos.";
    return "";
  };
  
  export const validateDireccion = (direccion) => {
    if (!direccion) return "La dirección es obligatoria.";
    return "";
  };
  
  export const validateLocalidad = (localidad) => {
    if (!localidad) return "La localidad es obligatoria.";
    return "";
  };
  