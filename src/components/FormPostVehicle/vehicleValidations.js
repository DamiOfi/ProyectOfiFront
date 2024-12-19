const validateTipo = (value) => {
    if (!value) return "El tipo es obligatorio.";
    return "";
  };
  
  const validatePatente = (value) => {
    const regex = /^(101)?[A-Z]{3}[0-9]{3}$|^(101)?[A-Z]{2}[0-9]{3}[A-Z]{2}$|^(101)?[0-9]{3}[A-Z]{3}$/;
    if (!regex.test(value)) {
      return "La patente debe estar en formato AA123BB, AAA123 o 132AAA";
    }
    return "";
  };  
  
  const validateMarca = (value) => {
    if (!value) return "La marca es obligatoria.";
    return "";
  };

  const validateCompañia = (value) => {
    if (!value) return "La compañia es obligatoria.";
    return "";
  };

  const validateCobertura = (value) => {
    if (!value) return "La cobertura es obligatoria.";
    return "";
  };

  const validateLocal = (value) => {
    if (!value) return "El local es obligatorio.";
    return "";
  };
  
  const validateModelo = (value) => {
    if (!value) return "El modelo es obligatorio.";
    return "";
  };
  
  const validateAño = (value) => {
    const currentYear = new Date().getFullYear();
    if (!value) return "El año es obligatorio.";
    if (isNaN(value) || value < 1900 || value > currentYear)
      return `El año debe ser un número entre 1900 y ${currentYear}.`;
    return "";
  };
  
  const validateCuota = (value) => {
    if (!value) return "La cuota es obligatoria.";
    if (isNaN(value) || value <= 0) return "La cuota debe ser un número mayor a 0.";
    return "";
  };
  
  const validatePrecio = (value, fieldName) => {
    if (!value) return `El ${fieldName} es obligatorio.`;
    if (isNaN(value) || value <= 0) return `El ${fieldName} debe ser un número positivo.`;
    return "";
  };
  
  const validateDate = (value, fieldName) => {
    if (!value) return `La fecha de ${fieldName} es obligatoria.`;
    return "";
  };
  
  export {
    validateTipo,
    validatePatente,
    validateMarca,
    validateModelo,
    validateAño,
    validateCuota,
    validatePrecio,
    validateDate,
    validateCompañia,
    validateCobertura,
    validateLocal
  };
  