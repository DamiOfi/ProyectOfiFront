import styled from 'styled-components';

export const ContainerProfile = styled.div`
  padding: 20px;
  font-family: Arial, sans-serif;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const ClientInfo = styled.div`
  margin-bottom: 20px;

  h2 {
    color: #1f2937; /* Tailwind: text-gray-800 */
    margin-bottom: 15px;
  }

  p {
    margin: 5px 0;
    font-size: 1rem; /* Tailwind: text-lg */
    color: #374151; /* Tailwind: text-gray-700 */
  }

  span {
    font-weight: bold; /* Tailwind: font-semibold */
    color: #111827; /* Tailwind: text-gray-900 */
  }
`;

export const VehicleList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  h3 {
    color: #374151; /* Tailwind: text-gray-700 */
    margin-bottom: 10px;
  }
`;

export const VehicleItem = styled.div`
  padding: 10px;
  border: 1px solid #e5e7eb; /* Tailwind: border-gray-300 */
  border-radius: 4px;
  background-color: #f9f9f9;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05); /* Tailwind: shadow-md */

  p {
    margin: 5px 0;
    font-size: 0.9rem; /* Tailwind: text-base */
    color: #374151; /* Tailwind: text-gray-700 */
  }

  span {
    font-weight: bold; /* Tailwind: font-semibold */
    color: #111827; /* Tailwind: text-gray-900 */
  }
`;
