import './App.css'
import { BrowserRouter, Route, Routes, useLocation, useParams } from 'react-router-dom';
import { Ofertas } from './pages/Ofertas/Ofertas';
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Error } from './pages/Error/Error';
import { Celulares } from './pages/Celulares/celulares';

export const App = ()=>{ 

  const {id} = useParams()

  return (
    <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/ofertas' element={<Ofertas/>}></Route>
          <Route path='/producto/:id'></Route>
          <Route path='/celulares' element={<Celulares/>}></Route>
          <Route path='/cargadores' element={<Ofertas/>}></Route>
          <Route path='/sonido' element={<Ofertas/>}></Route>
          <Route path='/iluminacion' element={<Ofertas/>}></Route>
          <Route path='/servicios' element={<Ofertas/>}></Route>
          <Route path='*' element={<Error/>}></Route>
        </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

