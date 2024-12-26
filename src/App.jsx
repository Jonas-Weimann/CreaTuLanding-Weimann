import './App.css'
import { Route, Routes } from 'react-router-dom';
import { Ofertas } from './pages/Ofertas/Ofertas'

function App(){ 
  return (
      <Routes>
        <Route path='/' element={<Ofertas/>}></Route>
      </Routes>
  )
}

export default App