import "toastify-js/src/toastify.css";
import { useState, createContext, useContext } from "react";
import Toastify from "toastify-js";
import { useNavigate } from "react-router-dom";
import { app } from "../config/firebaseConfig";
import {
  arrayRemove,
  arrayUnion,
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const navigate = useNavigate();
  const [favs, setFavs] = useState([]);
  const [compras, setCompras] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [admin, setAdmin] = useState(false);

  const removeFromFavs = async (product) => {
    const db = getFirestore(app);
    const favRef = doc(db, "Favoritos", email);
    await updateDoc(favRef, { favoritos: arrayRemove(product) });
    setFavs(favs.filter((fav) => fav.id !== product.id));
    Toastify({
      text: "Producto eliminado de favoritos",
      duration: 3000,
      onClick: () =>
        navigate("/NucleoTechnology/Favoritos", {
          replace: true,
        }),
      newWindow: false,
      close: true,
      gravity: "top",
      position: "right",
      stopOnFocus: true,
      style: {
        color: "#ff0000",
        border: "#ff0000 2px solid",
        fontFamily: "alata",
        fontSize: "1rem",
        marginTop: "9rem",
        display: "flex",
        gap: "1rem",
        backdropFilter: "blur(1rem)",
        background: "transparent",
        borderRadius: "2rem",
      },
    }).showToast();
  };

  const addToFavs = async (product) => {
    const db = getFirestore(app);
    const favRef = doc(db, "Favoritos", email);
    const favDoc = await getDoc(favRef);
    if (!favDoc.exists()) {
      const favData = {
        id: email,
        usuario: {
          nombre: username,
          email: email,
        },
        favoritos: [product],
      };
      await setDoc(favRef, favData);
      setFavs([product]);
    } else {
      await updateDoc(favRef, { favoritos: arrayUnion(product) });
      setFavs((prevFavs) => [...prevFavs, product]);
    }
    Toastify({
      text: "Producto añadido a favoritos",
      duration: 3000,
      onClick: () =>
        navigate("/NucleoTechnology/Favoritos", {
          replace: true,
        }),
      newWindow: false,
      close: true,
      gravity: "top",
      position: "right",
      stopOnFocus: true,
      style: {
        color: "#ff20e1",
        border: "#ff20e1 2px solid",
        fontFamily: "alata",
        fontSize: "1rem",
        marginTop: "9rem",
        display: "flex",
        gap: "1rem",
        backdropFilter: "blur(1rem)",
        background: "transparent",
        borderRadius: "2rem",
      },
    }).showToast();
  };

  const getFavs = async (user) => {
    const db = getFirestore(app);
    const favRef = doc(db, "Favoritos", user.email);
    const snapshot = await getDoc(favRef);
    console.log(snapshot.data());
    return snapshot.data().favoritos;
  };

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
    setFavs(await getFavs(user));
    console.log(favs);
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
        favs,
        setCompras,
        setFavs,
        login,
        logout,
        addToFavs,
        removeFromFavs,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
