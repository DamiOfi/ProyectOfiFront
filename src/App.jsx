import './App.css';
//libraries
import { Routes, Route } from 'react-router-dom';
//views
import Home from './views/Home/Home.jsx';
import Messages from './views/Messages/Messages.jsx';
import MainForm from './views/MainForm/MainForm.jsx';
import Insured from './views/Insured/Insured.jsx';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/clientes-vencidos' element={<Messages />} />
        <Route path='/formulario' element={<MainForm />} />
        <Route path='/asegurado' element={<Insured />} />
      </Routes>
    </>
  )
}

export default App
