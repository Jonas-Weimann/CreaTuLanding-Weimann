import './App.css'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Ofertas } from './pages/Ofertas/Ofertas';
import { Celulares } from './pages/Celulares/celulares';
import { Error } from './pages/Error/Error';

export const App = ()=>{ 

  const theme = createTheme({
    palette: {
      primary: {
        light: "#bbbace",
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
        light: "#f896eb",
        main: "#ff20e1",
        dark: "#920d80",
        contrastText: '#000',
      }
    },
  });

  return (
    <ThemeProvider  theme={theme}>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/CreaTuLanding-Weimann/' element={<Ofertas/>}></Route>
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
    </ThemeProvider>

  )
}

