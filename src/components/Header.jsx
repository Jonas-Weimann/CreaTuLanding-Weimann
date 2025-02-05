import { CartWidget } from "./CartWidget";
import { SearchBar } from "./SearchBar";
import { Link, NavLink, useNavigate } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LogoutIcon from "@mui/icons-material/Logout";
import Logo from "../assets/images/logo.svg";
import LoginRegisterIcon from "../assets/images/login-register.svg";
import Swal from "sweetalert2";
import { useUser } from "../contexts/UserContext";

export const Header = () => {
  const navigate = useNavigate();
  const { username, loggedIn, logout, admin } = useUser();
  return (
    <header className="header">
      <div className="search-container">
        <Link to="/NucleoTechnology/Ofertas">
          <img src={Logo} alt="NUCLEO Technology" className="logo-icon" />
        </Link>
        <SearchBar page="Nucleo Technology" />
        <div className="widgets">
          {loggedIn ? (
            <>
              <h6 className="welcome-widget">
                Bienvenido <br /> {username}
              </h6>
              <LogoutIcon
                cursor="pointer"
                color="secondary"
                sx={{ width: "2rem", height: "2rem" }}
                onClick={() =>
                  Swal.fire({
                    title: "¿Cerrar sesión?",
                    text: "Estás a punto de salir de tu cuenta",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#d33",
                    cancelButtonColor: "#656766",
                    cancelButtonText: "Cancelar",
                    confirmButtonText: "Cerrar sesión",
                  }).then((result) => {
                    if (result.isConfirmed) {
                      logout();
                    }
                  })
                }
              />
            </>
          ) : (
            <Link to="/NucleoTechnology/LoginRegister">
              <img
                src={LoginRegisterIcon}
                alt="Iniciar Sesión / Registrarse"
                className="login-icon"
              />
            </Link>
          )}
          <FavoriteBorderIcon
            cursor="pointer"
            color="pink"
            sx={{ width: "2rem", height: "2rem" }}
            onClick={
              loggedIn
                ? () =>
                    navigate("/NucleoTechnology/Favoritos", { replace: true })
                : () =>
                    Swal.fire({
                      title: "Atención",
                      text: "Debes iniciar sesión para guardar tus productos favoritos",
                      icon: "warning",
                      showCancelButton: true,
                      confirmButtonColor: "#d33",
                      cancelButtonColor: "#656766",
                      confirmButtonText: "Iniciar sesión",
                    }).then((result) => {
                      if (result.isConfirmed) {
                        navigate("/NucleoTechnology/LoginRegister", {
                          replace: true,
                        });
                      }
                    })
            }
          />
          <Link to="/NucleoTechnology/Cart" className="cart-widget">
            <CartWidget />
          </Link>
        </div>
      </div>
      <nav className="links-container">
        <NavLink
          to="/NucleoTechnology/Ofertas"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
          id="nav-ofertas"
        >
          Ofertas
        </NavLink>
        <NavLink
          to="/NucleoTechnology/Celulares"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
          id="nav-celulares"
        >
          Celulares
        </NavLink>
        <NavLink
          to="/NucleoTechnology/Cargadores"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
          id="nav-cargadores"
        >
          Cargadores
        </NavLink>
        <NavLink
          to="/NucleoTechnology/Sonido"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
          id="nav-sonido"
        >
          Sonido
        </NavLink>
        <NavLink
          to="/NucleoTechnology/Iluminacion"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
          id="nav-iluminacion"
        >
          Iluminación
        </NavLink>
        <NavLink
          to="/NucleoTechnology/Servicios"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
          id="nav-servicio"
        >
          Servicios
        </NavLink>

        {admin && (
          <NavLink
            to="/NucleoTechnology/Admin"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Opciones de Administrador
          </NavLink>
        )}
      </nav>
    </header>
  );
};
