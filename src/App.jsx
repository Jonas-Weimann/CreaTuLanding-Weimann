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
              <Route path="/NucleoTechnology/" element={<Ofertas />} />
              <Route
                path="/NucleoTechnology/LoginRegister"
                element={<LogInRegister />}
              />
              <Route path="/NucleoTechnology/Ofertas" element={<Ofertas />} />
              <Route
                path="/NucleoTechnology/Ofertas/:idProducto"
                element={
                  <ItemDetailContainer
                    url="http://localhost:5173/NucleoTechnology/db/ofertas.json"
                    page="Ofertas"
                  />
                }
              />
              <Route
                path="/NucleoTechnology/Celulares"
                element={<Celulares />}
              />
              <Route
                path="/NucleoTechnology/Celulares/:idProducto"
                element={
                  <ItemDetailContainer
                    url="http://localhost:5173/NucleoTechnology/db/celulares.json"
                    page="Celulares"
                  />
                }
              />
              <Route
                path="/NucleoTechnology/Cargadores"
                element={<Cargadores />}
              />
              <Route
                path="/NucleoTechnology/Cargadores/:idProducto"
                element={
                  <ItemDetailContainer
                    url="http://localhost:5173/NucleoTechnology/db/cargadores.json"
                    page="Cargadores"
                  />
                }
              />
              <Route path="/NucleoTechnology/Sonido" element={<Sonido />} />
              <Route
                path="/NucleoTechnology/Sonido/:idProducto"
                element={
                  <ItemDetailContainer
                    url="http://localhost:5173/NucleoTechnology/db/sonido.json"
                    page="Sonido"
                  />
                }
              />
              <Route
                path="/NucleoTechnology/Iluminacion"
                element={<Iluminacion />}
              />
              <Route
                path="/NucleoTechnology/Iluminacion/:idProducto"
                element={
                  <ItemDetailContainer
                    url="http://localhost:5173/NucleoTechnology/db/iluminacion.json"
                    page="Iluminacion"
                  />
                }
              />
              <Route
                path="/NucleoTechnology/Servicios"
                element={<Servicios />}
              />
              <Route
                path="/NucleoTechnology/Favoritos"
                element={<Favoritos />}
              />
              <Route path="/NucleoTechnology/Admin" element={<Admin />} />
              <Route path="/NucleoTechnology/Cart" element={<Cart />} />
              <Route path="/NucleoTechnology/FAQ" element={<FAQ />} />
              <Route path="/NucleoTechnology/Account" element={<Account />} />
              <Route
                path="/NucleoTechnology/Privacy"
                element={<Privacidad />}
              />
              <Route path="/NucleoTechnology/About" element={<About />} />
              <Route
                path="/NucleoTechnology/MisCompras"
                element={<Compras />}
              />
              <Route path="*" element={<Error />}></Route>
            </Routes>
          </CartProvider>
          <Footer />
        </UserProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
};
