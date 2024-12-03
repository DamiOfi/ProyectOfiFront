import { configureStore } from '@reduxjs/toolkit';
import clientesVencidosReducer from './slices/clientesVencidosSlice';

const store = configureStore({
  reducer: {
    clientesVencidos: clientesVencidosReducer,
  },
});

export default store;
