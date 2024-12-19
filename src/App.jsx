import './App.css';
//libraries
import { Routes, Route } from 'react-router-dom';
//views
import Home from './views/Home/Home.jsx';
import Messages from './views/Messages/Messages.jsx';
import MainForm from './views/MainForm/MainForm.jsx';
import Insured from './views/Insured/Insured.jsx';
import Profile from './views/Profile/Profile.jsx';
//Components
import FormPostVehicle from './components/FormPostVehicle/FormPostVehicle.jsx';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/clientes-vencidos' element={<Messages />} />
        <Route path='/formulario' element={<MainForm />} />
        <Route path='/asegurado' element={<Insured />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/form-vehiculo" element={<FormPostVehicle />} />
      </Routes>
    </>
  )
}

export default App
