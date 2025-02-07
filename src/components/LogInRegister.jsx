import { useState } from "react";
import { app } from "../config/firebaseConfig";
import { LogInForm } from "./LogInForm";
import { RegisterForm } from "./RegisterForm";
import { useUser } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
const auth = getAuth(app);

export const LogInRegister = () => {
  const { login } = useUser();
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  const handleAuthenticate = async (e) => {
    e.preventDefault();
    const accion = e.target.action.value;
    const correo = e.target.email.value;
    const contraseña = e.target.password.value;
    if (accion === "Iniciar sesión") {
      try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          correo,
          contraseña
        );
        Swal.fire({
          title: "¡Éxito!",
          text: "Has iniciado sesión correctamente",
          icon: "success",
          confirmButtonText: "Aceptar",
          willClose: () => {
            login(userCredential.user);
            navigate("/NucleoTechnology/Ofertas");
          },
        });
      } catch (error) {
        Swal.fire({
          title: "¡Error!",
          text: "Usuario o contraseña incorrectos",
          icon: "error",
          confirmButtonText: "Aceptar",
        });
        console.error(error);
      }
    } else if (accion === "Registrarse") {
      const displayName = e.target.username.value;
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          correo,
          contraseña
        );
        await updateProfile(userCredential.user, { displayName });
        Swal.fire({
          title: "¡Éxito!",
          text: "Usuario registrado correctamente",
          icon: "success",
          confirmButtonText: "Aceptar",
          willClose: () => {
            login(userCredential.user), navigate("/NucleoTechnology/Ofertas");
          },
        });
      } catch (error) {
        if (error.code === "auth/email-already-in-use") {
          Swal.fire({
            title: "¡Error!",
            text: "Ya hay una cuenta registrada con ese correo electrónico",
            icon: "error",
            confirmButtonText: "Aceptar",
          });
        }
        if (error.code === "auth/weak-password") {
          Swal.fire({
            title: "¡Error!",
            text: "La contraseña debe tener al menos 6 caracteres",
            icon: "error",
            confirmButtonText: "Aceptar",
          });
        } else {
          console.error(error);
        }
      }
    }
  };

  const handleToggleViewPassword = (e) => {
    e.preventDefault();
    const passList = document.querySelectorAll(".password");
    passList.forEach((pass) => {
      if (pass.type === "password") {
        pass.type = "text";
        setVisible(true);
      } else {
        pass.type = "password";
        setVisible(false);
      }
    });
  };

  const handleToggleRegister = (e) => {
    e.preventDefault();
    const form = document.querySelector(".login-register-container");
    form.classList.add("active");
  };
  const handleToggleLogin = (e) => {
    e.preventDefault();
    const form = document.querySelector(".login-register-container");
    form.classList.remove("active");
  };

  return (
    <main className="login-page main">
      <section className="login-register-container">
        <LogInForm
          onToggleRegister={handleToggleRegister}
          onToggleViewPassword={handleToggleViewPassword}
          onAuthenticate={handleAuthenticate}
          visible={visible}
        ></LogInForm>
        <RegisterForm
          onToggleLogin={handleToggleLogin}
          onToggleViewPassword={handleToggleViewPassword}
          onAuthenticate={handleAuthenticate}
          visible={visible}
        ></RegisterForm>
      </section>
    </main>
  );
};
