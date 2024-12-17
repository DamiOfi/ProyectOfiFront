import styled from 'styled-components';

export const ContainerProfile = styled.div`
  padding: 20px;
  font-family: Arial, sans-serif;
`;

export const ClientInfo = styled.div`
  margin-bottom: 20px;

  p {
    margin: 5px 0;
  }
`;

export const VehicleList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const VehicleItem = styled.div`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #f9f9f9;

  p {
    margin: 5px 0;
  }
`;
