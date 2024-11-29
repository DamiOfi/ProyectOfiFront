import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Thunk para obtener los clientes desde la API
export const fetchClientes = createAsyncThunk('cliente/fetchClientes', async () => {
  const response = await axios.get('http://localhost:3001/clientes');
  return response.data; // Asegúrate de que el servidor responde con un array de clientes
});

const clienteSlice = createSlice({
  name: 'cliente',
  initialState: {
    clientes: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchClientes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchClientes.fulfilled, (state, action) => {
        state.loading = false;
        state.clientes = action.payload;
      })
      .addCase(fetchClientes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default clienteSlice.reducer;
