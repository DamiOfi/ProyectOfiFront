import { configureStore } from '@reduxjs/toolkit';
import clientesVencidosReducer from '../features/clientesVencidosSlice';

export const store = configureStore({
  reducer: {
    clientesVencidos: clientesVencidosReducer,
  },
});
