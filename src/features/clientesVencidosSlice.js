import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Thunk para obtener los clientes vencidos
export const fetchClientesVencidos = createAsyncThunk(
  'clientesVencidos/fetchClientesVencidos',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('http://localhost:3001/clientes-vencidos');
      return response.data; // Asume que la respuesta es un array de clientes
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Error al cargar los clientes vencidos');
    }
  }
);

// Slice
const clientesVencidosSlice = createSlice({
  name: 'clientesVencidos',
  initialState: {
    data: [],
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchClientesVencidos.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchClientesVencidos.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchClientesVencidos.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export default clientesVencidosSlice.reducer;
