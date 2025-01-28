import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

export const LogInForm = ({
  onToggleRegister,
  onToggleViewPassword,
  onAuthenticate,
  visible,
}) => {
  return (
    <div className="form-box login">
      <form action="#" onSubmit={onAuthenticate}>
        <h2>Iniciar sesión</h2>
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
          <input type="email" required name="email" />
          <label>Correo electrónico</label>
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
            Recuérdame
          </label>
          <a href="#">¿Olvidaste tu contraseña?</a>
        </div>
        <input
          type="submit"
          className="btn"
          value="Iniciar sesión"
          name="action"
        />
        <div className="login-register">
          <p>
            ¿No tienes una cuenta?{" "}
            <a href="#" className="register-link" onClick={onToggleRegister}>
              Registrarse
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};
