import './App.css';
//libraries
import { Routes, Route } from 'react-router-dom';
//views
import Home from './views/Home/Home.jsx';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  )
}

export default App
