import { Error } from "../Error/Error";
import { useUser } from "../../contexts/UserContext";
import RobotIcon from "../../assets/images/robot-icon.png";
import CloseIcon from "@mui/icons-material/Close";
import VerifiedIcon from "@mui/icons-material/Verified";
export const Account = () => {
  const { user, username, email, verified, loggedIn, recoverPassword } =
    useUser();
  return loggedIn ? (
    <main className="account-page main">
      <h1>Mi cuenta</h1>
      <div className="acc-data-container">
        {<img src={user.photoURL || RobotIcon} />}
        <div className="acc-data">
          <span>
            <b>Usuario:</b> {username}
          </span>
          <span>
            <b>Email:</b> {email}
          </span>
          <span>
            <b>Verificado:</b>
            {verified ? (
              <VerifiedIcon color="secondary" />
            ) : (
              <CloseIcon color="secondary" />
            )}
          </span>
          <a
            href="#"
            onClick={() => {
              recoverPassword(email);
            }}
          >
            Cambiar mi contraseña
          </a>{" "}
        </div>
      </div>
    </main>
  ) : (
    <Error />
  );
};
