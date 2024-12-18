import styled from 'styled-components';

// Contenedor principal
export const ContainerInsured = styled.div`
  padding: 20px;
  font-family: Arial, sans-serif;
  background-color: #f9f9f9;
  min-height: 100vh;
`;

// Contenedor del buscador
export const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

// Input de búsqueda
export const SearchInput = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 300px;
  margin-right: 10px;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

// Botón de buscar
export const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

// Contenedor de la tabla
export const InsuredList = styled.div`
  display: table;
  width: 100%;
  border-collapse: collapse;
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

// Fila de encabezado
export const TableHeader = styled.div`
  display: table-row;
  background-color: #007bff;
  color: #fff;
  font-weight: bold;
`;

// Columna de la tabla (encabezado y datos)
export const TableCell = styled.div`
  display: table-cell;
  padding: 10px;
  border: 1px solid #ddd;
  text-align: left;

  &:first-child {
    font-weight: bold;
  }
`;

// Fila de datos
export const TableRow = styled.div`
  display: table-row;
  &:nth-child(even) {
    background-color: #f2f2f2;
  }

  &:hover {
    background-color: #e9f5ff;
    cursor: pointer;
  }
`;
