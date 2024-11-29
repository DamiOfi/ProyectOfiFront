import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  clientes: [],
  loading: false,
};

const clienteSlice = createSlice({
  name: 'cliente',
  initialState,
  reducers: {
    setClientes(state, action) {
      state.clientes = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
  },
});

export const { setClientes, setLoading } = clienteSlice.actions;
export default clienteSlice.reducer;
