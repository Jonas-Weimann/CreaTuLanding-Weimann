import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

export const RegisterForm = ({
  onToggleLogin,
  onToggleViewPassword,
  onAuthenticate,
  visible,
}) => {
  return (
    <div className="form-box register">
      <form action="#" onSubmit={onAuthenticate}>
        <h2 name="title">Registrarse</h2>
        <div className="input-box">
          <span className="icon">
            <PersonIcon />
          </span>
          <input type="text" required name="username" />
          <label>Nombre de usuario</label>
        </div>
        <div className="input-box">
          <span className="icon">
            <EmailIcon />
          </span>
          <input type="email" name="email" required />
          <label>Correo Electrónico</label>
        </div>
        <div className="input-box">
          <span className="icon" onClick={onToggleViewPassword}>
            {visible ? <VisibilityIcon /> : <VisibilityOffIcon />}
          </span>
          <input
            className="password"
            type="password"
            name="password"
            required
          />
          <label>Contraseña</label>
        </div>
        <div className="remember-forgot">
          <label>
            <input type="checkbox" />
            Acepto las bases y condiciones
          </label>
        </div>
        <input
          type="submit"
          className="btn"
          value="Registrarse"
          name="action"
        ></input>
        <div className="login-register">
          <p>
            Ya tienes una cuenta?{" "}
            <a href="#" className="login-link" onClick={onToggleLogin}>
              Iniciar sesión
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};
