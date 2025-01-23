import './App.css'
import { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Ofertas } from './pages/Ofertas/Ofertas';
import { Celulares } from './pages/Celulares/Celulares';
import { Cargadores } from './pages/Cargadores/Cargadores';
import { Sonido } from './pages/Sonido/Sonido';
import { Iluminacion } from './pages/Iluminacion/Iluminacion'
import { Error } from './pages/Error/Error';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import { CartProvider } from './contexts/CartContext';



export const App = ()=>{ 
  const [darkMode, setDarkMode] = useState(true);
  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        light: "#9282e4",
        main: "#332a62",
        dark: "#150030",
        contrastText: '#fff',
      },
      secondary: {
        light: "#f4f7c1",
        main: "#d8e520",
        dark: "#b9bc0d",
        contrastText: '#000',
      },
      accent: {
        light: "#9effff",
        main: "#00ffff",
        dark: "#12bdbd",
        contrastText: '#000',
      },
      pink: {
        light: "#f3c2ec",
        main: "#ff20e1",
        dark: "#920d80",
        contrastText: '#000',
      }
    },
  });



  return (
    
    <ThemeProvider  theme={theme}>
      <CartProvider>
        <BrowserRouter>
          <Header/>
          <Routes>
            <Route path='/NucleoTechnology/' element={<Ofertas/>}></Route>
            <Route path='/NucleoTechnology/Ofertas' element={<Ofertas/>}></Route>
            <Route path='/NucleoTechnology/Ofertas/:idProducto' element={<ItemDetailContainer url="http://localhost:5173/NucleoTechnology/db/ofertas.json" page="Ofertas"/>}></Route>
            <Route path='/NucleoTechnology/Celulares' element={<Celulares/>}></Route>
            <Route path='/NucleoTechnology/Celulares/:idProducto' element={<ItemDetailContainer url="http://localhost:5173/NucleoTechnology/db/celulares.json" page="Celulares"/>} ></Route>
            <Route path='/NucleoTechnology/Cargadores' element={<Cargadores/>}></Route>
            <Route path='/NucleoTechnology/Sonido' element={<Sonido/>}></Route>
            <Route path='/NucleoTechnology/Iluminacion' element={<Iluminacion/>}></Route>
            <Route path='/NucleoTechnology/Servicios' element={<Ofertas/>}></Route>
            <Route path='*' element={<Error/>}></Route>
          </Routes>
          <Footer/>
        </BrowserRouter>
      </CartProvider>
    </ThemeProvider>

  )
}

