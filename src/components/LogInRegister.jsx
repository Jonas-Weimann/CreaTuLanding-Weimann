import { useState } from "react";
import { LoginForm } from "./LoginForm";
import { RegisterForm } from "./RegisterForm";
import { useUser } from "../contexts/UserContext";

export const LogInRegister = () => {
  const { handleAuthenticate, handleGoogleAuthenticate, recoverPassword } =
    useUser();
  const [visible, setVisible] = useState(false);

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
        <LoginForm
          onToggleRegister={handleToggleRegister}
          onToggleViewPassword={handleToggleViewPassword}
          onAuthenticate={handleAuthenticate}
          onGoogleAuthenticate={handleGoogleAuthenticate}
          onForgetPassword={recoverPassword}
          visible={visible}
        ></LoginForm>
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
