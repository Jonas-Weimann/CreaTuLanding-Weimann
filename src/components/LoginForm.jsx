import EmailIcon from "@mui/icons-material/Email";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import GoogleIcon from "../assets/images/google-icon.png";

export const LogInForm = ({
  onToggleRegister,
  onToggleViewPassword,
  onAuthenticate,
  onForgetPassword,
  onGoogleAuthenticate,
  visible,
}) => {
  return (
    <div className="form-box login">
      <form action="#" onSubmit={onAuthenticate}>
        <h2>Iniciar sesión</h2>
        <div className="input-box">
          <span className="icon">
            <EmailIcon />
          </span>
          <input id="email" type="email" required name="email" />
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
            <input type="checkbox" name="rememberme" />
            Recuérdame
          </label>
          <a
            href="#"
            onClick={() => {
              const email = document.getElementById("email");
              onForgetPassword(email.value);
              console.log(email.value);
            }}
          >
            ¿Olvidaste tu contraseña?
          </a>
        </div>
        <input
          type="submit"
          className="btn"
          value="Iniciar sesión"
          name="action"
        />
        <button className="btn" onClick={onGoogleAuthenticate}>
          <img src={GoogleIcon} alt="" />
          Iniciar sesión con Google
        </button>
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
