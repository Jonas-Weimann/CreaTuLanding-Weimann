import { useState, createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const navigate = useNavigate();
  const [favItems, setFavItems] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [admin, setAdmin] = useState(false);

  const login = (user) => {
    setLoggedIn(true);
    setUsername(user.displayName);
    setEmail(user.email);
    if (user.email === "jonas.weimann04@gmail.com") setAdmin(true);
    navigate("/NucleoTechnology/Ofertas", { replace: false });
  };

  const logout = () => {
    setLoggedIn(false);
    setUsername("");
    setEmail("");
    setAdmin(false);
  };

  return (
    <UserContext.Provider
      value={{ username, email, loggedIn, admin, login, logout }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
