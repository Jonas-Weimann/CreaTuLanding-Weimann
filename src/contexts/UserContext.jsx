import { useState, createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { app } from "../config/firebaseConfig";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const navigate = useNavigate();
  const [favItems, setFavItems] = useState([]);
  const [compras, setCompras] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [admin, setAdmin] = useState(false);

  const getCompras = async (user) => {
    const data = [];
    const db = getFirestore(app);
    const collectionRef = collection(db, "Compras");
    const snapshot = await getDocs(
      query(collectionRef, where("comprador.email", "==", user.email))
    );
    snapshot.forEach((doc) => data.push(doc.data()));
    return data;
  };

  const login = async (user) => {
    setLoggedIn(true);
    setUsername(user.displayName);
    setEmail(user.email);
    setCompras(await getCompras(user));
    if (user.email === "jonas.weimann04@gmail.com") setAdmin(true);
    navigate("/NucleoTechnology/Ofertas", { replace: false });
  };

  const logout = () => {
    setLoggedIn(false);
    setUsername("");
    setEmail("");
    setAdmin(false);
    setCompras([]);
    navigate("/NucleoTechnology/Ofertas", { replace: false });
  };

  return (
    <UserContext.Provider
      value={{
        username,
        email,
        loggedIn,
        admin,
        compras,
        favItems,
        setCompras,
        setFavItems,
        login,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
