import './App.css';
//libraries
import { Routes, Route } from 'react-router-dom';
//views
import Home from './views/Home/Home.jsx';
import Messages from './views/Messages/Messages.jsx';
import FormPostClient from './views/FormPostClient/FormPostClient.jsx';
import Insured from './views/Insured/Insured.jsx';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/clientes-vencidos' element={<Messages />} />
        <Route path='/formulario-cliente' element={<FormPostClient />} />
        <Route path='/asegurado' element={<Insured />} />
      </Routes>
    </>
  )
}

export default App
