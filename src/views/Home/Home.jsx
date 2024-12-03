import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchClientesVencidos } from '../../redux/slices/clientesVencidosSlice';
import Messages from '../Messages/Messages';

const Home = () => {
  const dispatch = useDispatch();
  const { data: clientesVencidos, status, error } = useSelector((state) => state.clientesVencidos);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchClientesVencidos());
    }
  }, [dispatch, status]);

  return (
    <div className="w-full">
      {status === 'loading' && <p>Cargando clientes...</p>}
      {status === 'failed' && <p>Error: {error}</p>}
      {status === 'succeeded' && <Messages clientes={clientesVencidos} />}
    </div>
  );
};

export default Home;
