import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Button } from "@mui/material";

export const Servicios = () => {
  return (
    <main className="servicios-page">
      <h1>Estamos para ayudarte</h1>
      <div className="container">
        <div className="servicio-01">
          <h4>01</h4>
          <p>Reparación de pantallas de celulares y tablets.</p>
        </div>
        <div className="servicio-02">
          <h4>02</h4>
          <p>
            Diagnóstico y reparación de problemas de hardware en computadoras y
            laptops.
          </p>
        </div>
        <div className="servicio-03">
          <h4>03</h4>
          <p>
            Actualización y mantenimiento de software para computadoras y
            dispositivos móviles.
          </p>
        </div>
        <div className="servicio-04">
          <h4>04</h4>
          <p>Sustitución de baterías para dispositivos móviles y laptops.</p>
        </div>
        <div className="servicio-05">
          <h4>05</h4>
          <p>Recuperación de datos de dispositivos dañados.</p>
        </div>
      </div>
      <Button
        sx={{ fontSize: "1.5rem", fontFamily: "poppins" }}
        variant="contained"
        color="secondary"
        onClick={() => {
          window.open(
            "https://api.whatsapp.com/message/O2ZHRIO7JGGQE1?autoload=1&app_absent=0"
          );
        }}
        startIcon={<WhatsAppIcon sx={{ width: "1.5rem", height: "1.5rem" }} />}
      >
        Solicita una cotización
      </Button>
    </main>
  );
};
