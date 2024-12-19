import styled from 'styled-components';

export const AddVehicleCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f9fafb;
  border: 2px dashed #d1d5db;
  border-radius: 0.5rem;
  height: 100%;
  min-height: 150px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #f3f4f6;
  }

  p {
    font-size: 1rem;
    color: #6b7280;
  }
`;

export const VehicleCard = styled.div`
  padding: 1rem;
  background-color: #f9fafb;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s, opacity 0.3s, transform 0.3s;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  /* Animaciones para la transición */
  &.vehicle-enter {
    opacity: 0;
    transform: scale(0.9);
  }

  &.vehicle-enter-active {
    opacity: 1;
    transform: scale(1);
    transition: opacity 300ms, transform 300ms;
  }

  &.vehicle-exit {
    opacity: 1;
    transform: scale(1);
  }

  &.vehicle-exit-active {
    opacity: 0;
    transform: scale(0.9);
    transition: opacity 300ms, transform 300ms;
  }

  h4 {
    font-size: 1.125rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: #111827;
  }

  p {
    font-size: 0.875rem;
    color: #4b5563;
    margin-bottom: 0.25rem;
  }
`;

export const OptionsMenu = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: white;
  border-radius: 0.375rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 120px;
  padding: 0.5rem 0;
  z-index: 10;

  button {
    display: block;
    width: 100%;
    text-align: left;
    padding: 0.5rem;
    background-color: transparent;
    border: none;
    font-size: 0.875rem;
    color: #111827;
    cursor: pointer;

    &:hover {
      background-color: #f3f4f6;
    }
  }
`;

export const DotsButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #4b5563;
  cursor: pointer;
  padding: 0;
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 10;
  
  &:hover {
    color: #111827;
  }
`;

