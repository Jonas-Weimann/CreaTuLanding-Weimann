import Logo from "../assets/images/logo.svg";
import { Link } from "react-router-dom";
import { useUser } from "../contexts/UserContext";

export const Footer = () => {
  const { loggedIn } = useUser();
  return (
    <footer>
      <div className="footer-logo-container">
        <img src={Logo} alt="NUCLEO Technology" className="footer-logo-icon" />
        <span>
          Soluciones tecnológicas al alcance de todos, con calidad y confianza.
        </span>
      </div>
      <div className="footer-links-container">
        <div className="link-list contacto">
          <h6>Contacto</h6>
          <Link
            target="_blank"
            className="link"
            to="https://api.whatsapp.com/message/O2ZHRIO7JGGQE1?autoload=1&app_absent=0"
          >
            11 4033 2284
          </Link>
          <Link className="link" to="mailto:nucleo.cell1@gmail.com">
            nucleo.cell1@gmail.com
          </Link>

          <Link
            target="_blank"
            className="link"
            to="https://www.linkedin.com/in/jonasweimann/"
            // PROVISORIO
          >
            www.linkedin.com/company/nucleo
          </Link>
        </div>

        <div className="link-list empresa">
          <h6>Empresa</h6>
          <Link className="link" to="/NucleoTechnology/About">
            Sobre nosotros
          </Link>
          <Link className="link" to="/NucleoTechnology/Servicios">
            Nuestros servicios
          </Link>
          <Link className="link" to="/NucleoTechnology/Privacy">
            Política de privacidad
          </Link>
        </div>

        <div className="link-list cliente">
          <h6>Cliente</h6>
          <Link
            className="link"
            to={
              loggedIn
                ? "/NucleoTechnology/Account"
                : "/NucleoTechnology/LoginRegister"
            }
          >
            Mi cuenta
          </Link>
          <Link className="link" to="/NucleoTechnology/FAQ">
            Preguntas frecuentes
          </Link>
          <Link className="link" to="/NucleoTechnology/LoginRegister">
            Recuperar contraseña
          </Link>
        </div>
        <div className="link-list social">
          <h6>Social</h6>
          <Link
            target="_blank"
            className="link"
            to="https://www.instagram.com/nucleo.celulares?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
          >
            nucleo.celulares
          </Link>
          <Link
            target="_blank"
            className="link"
            to="https://www.facebook.com/nucleo.celulares"
          >
            Núcleo celulares
          </Link>

          <Link
            target="_blank"
            className="link"
            to="https://www.tiktok.com/@joni.dw"
            // PROVISORIO
          >
            nucleo_celulares
          </Link>
        </div>
      </div>
    </footer>
  );
};
