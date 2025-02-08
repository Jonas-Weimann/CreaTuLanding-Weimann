import "./App.css";
import { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LogInRegister } from "./components/LogInRegister";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Ofertas } from "./pages/Ofertas/Ofertas";
import { Celulares } from "./pages/Celulares/Celulares";
import { Cargadores } from "./pages/Cargadores/Cargadores";
import { Sonido } from "./pages/Sonido/Sonido";
import { Iluminacion } from "./pages/Iluminacion/Iluminacion";
import { Admin } from "./pages/Admin/Admin";
import { Error } from "./pages/Error/Error";
import { ItemDetailContainer } from "./components/ItemDetailContainer";
import { CartProvider } from "./contexts/CartContext";
import { UserProvider } from "./contexts/UserContext";
import { Cart } from "./pages/Cart/Cart";
import { Servicios } from "./pages/Servicios/Servicios";
import { Compras } from "./pages/Compras/Compras";
import { Favoritos } from "./pages/Favoritos/Favoritos";
import { Privacidad } from "./pages/Privacidad/Privacidad";
import { About } from "./pages/About/About";
import { FAQ } from "./pages/FAQ/FAQ";
import { Account } from "./pages/Account/Account";

export const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      primary: {
        light: "#9282e4",
        main: "#332a62",
        dark: "#150030",
        contrastText: "#fff",
      },
      secondary: {
        light: "#f4f7c1",
        main: "#d8e520",
        dark: "#b9bc0d",
        contrastText: "#000",
      },
      accent: {
        light: "#9effff",
        main: "#00ffff",
        dark: "#12bdbd",
        contrastText: "#000",
      },
      pink: {
        light: "#f3c2ec",
        main: "#ff20e1",
        dark: "#920d80",
        contrastText: "#000",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <UserProvider>
          <CartProvider>
            <Header />
            <Routes>
              <Route path="/" element={<Ofertas />} />
              <Route path="/LoginRegister" element={<LogInRegister />} />
              <Route path="/Ofertas" element={<Ofertas />} />
              <Route
                path="/Ofertas/:idProducto"
                element={
                  <ItemDetailContainer
                    url="http://localhost:5173/db/ofertas.json"
                    page="Ofertas"
                  />
                }
              />
              <Route path="/Celulares" element={<Celulares />} />
              <Route
                path="/Celulares/:idProducto"
                element={
                  <ItemDetailContainer
                    url="http://localhost:5173/db/celulares.json"
                    page="Celulares"
                  />
                }
              />
              <Route path="/Cargadores" element={<Cargadores />} />
              <Route
                path="/Cargadores/:idProducto"
                element={
                  <ItemDetailContainer
                    url="http://localhost:5173/db/cargadores.json"
                    page="Cargadores"
                  />
                }
              />
              <Route path="/Sonido" element={<Sonido />} />
              <Route
                path="/Sonido/:idProducto"
                element={
                  <ItemDetailContainer
                    url="http://localhost:5173/db/sonido.json"
                    page="Sonido"
                  />
                }
              />
              <Route path="/Iluminacion" element={<Iluminacion />} />
              <Route
                path="/Iluminacion/:idProducto"
                element={
                  <ItemDetailContainer
                    url="http://localhost:5173/db/iluminacion.json"
                    page="Iluminacion"
                  />
                }
              />
              <Route path="/Servicios" element={<Servicios />} />
              <Route path="/Favoritos" element={<Favoritos />} />
              <Route path="/Admin" element={<Admin />} />
              <Route path="/Cart" element={<Cart />} />
              <Route path="/FAQ" element={<FAQ />} />
              <Route path="/Account" element={<Account />} />
              <Route path="/Privacy" element={<Privacidad />} />
              <Route path="/About" element={<About />} />
              <Route path="/MisCompras" element={<Compras />} />
              <Route path="*" element={<Error />}></Route>
            </Routes>
          </CartProvider>
          <Footer />
        </UserProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
};
