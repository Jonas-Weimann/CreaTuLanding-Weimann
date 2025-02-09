import "toastify-js/src/toastify.css";
import { useState, createContext, useContext, useEffect } from "react";
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
import {
  getAuth,
  sendEmailVerification,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import Swal from "sweetalert2";

const UserContext = createContext();
const auth = getAuth(app);

export const UserProvider = ({ children }) => {
  const navigate = useNavigate();
  const [favs, setFavs] = useState([]);
  const [compras, setCompras] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [admin, setAdmin] = useState(false);
  const [verified, setVerified] = useState(false);

  const recoverPassword = async (email) => {
    const auth = getAuth(app);
    try {
      await sendPasswordResetEmail(auth, email).then(() => {
        Swal.fire({
          title: "Cambiar contraseña",
          text: "Se ha enviado un email de recuperación a tu correo.",
          icon: "success",
          confirmButtonText: "Aceptar",
          confirmButtonColor: "#232323",
          willClose: async () => {
            await user.reload();
          },
        });
      });
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: "Error",
        text: "Escribe una dirección de correo válida.",
        icon: "error",
        confirmButtonText: "Aceptar",
        confirmButtonColor: "#232323",
        willClose: async () => {
          await user.reload();
        },
      });
    }
  };

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
    setUser(user);
    setUsername(user.displayName);
    setEmail(user.email);
    setCompras(await getCompras(user));
    setFavs(await getFavs(user));
    setVerified(user.emailVerified);
    if (user.email === "admin@admin.com") {
      setAdmin(true);
      setVerified(true);
    }
    navigate("/NucleoTechnology/Ofertas", { replace: false });
  };

  const logout = () => {
    setLoggedIn(false);
    setUser(null);
    setUsername("");
    setEmail("");
    setCompras([]);
    setFavs([]);
    setAdmin(false);
    setVerified(false);
    navigate("/NucleoTechnology/Ofertas", { replace: false });
  };

  useEffect(() => {
    const autoAuthenticate = async () => {
      const sesionGuardada = localStorage.getItem("userSession");
      if (sesionGuardada) {
        const user = JSON.parse(sesionGuardada);
        try {
          login(user);
          navigate("/NucleoTechnology/Ofertas");
        } catch (err) {
          console.log(err);
        }
      }
    };
    autoAuthenticate();
  }, []);

  const handleAuthenticate = async (e) => {
    e.preventDefault();
    const accion = e.target.action.value;
    const correo = e.target.email.value;
    const contraseña = e.target.password.value;
    if (accion === "Iniciar sesión") {
      const rememberme = e.target.rememberme.checked;
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
          confirmButtonColor: "#232323",

          willClose: async () => {
            login(userCredential.user);
            navigate("/NucleoTechnology/Ofertas");
            if (rememberme) {
              localStorage.setItem(
                "userSession",
                JSON.stringify(userCredential.user)
              );
            } else {
              localStorage.removeItem("userSession");
            }
          },
        });
      } catch (error) {
        Swal.fire({
          title: "¡Error!",
          text: "Usuario o contraseña incorrectos",
          icon: "error",
          confirmButtonText: "Aceptar",
          confirmButtonColor: "#232323",
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
        const { user } = userCredential;
        await updateProfile(user, { displayName });
        await sendEmailVerification(user);
        Swal.fire({
          title: "¡Éxito!",
          text: "Usuario registrado correctamente.",
          icon: "success",
          confirmButtonText: "Aceptar",
          confirmButtonColor: "#232323",
          willClose: async () => {
            await user.reload();
            login(user);
            navigate("/NucleoTechnology/Ofertas");
          },
        }).then(() => {
          Swal.fire({
            title: "Verificación pendiente",
            text: "Debes verificar tu correo antes de continuar.",
            icon: "warning",
            confirmButtonText: "Entendido",
            confirmButtonColor: "#232323",
          });
        });
      } catch (error) {
        if (error.code === "auth/email-already-in-use") {
          Swal.fire({
            title: "¡Error!",
            text: "Ya hay una cuenta registrada con ese correo electrónico",
            icon: "error",
            confirmButtonText: "Aceptar",
            confirmButtonColor: "#232323",
          });
        }
        if (error.code === "auth/weak-password") {
          Swal.fire({
            title: "¡Error!",
            text: "La contraseña debe tener al menos 6 caracteres",
            icon: "error",
            confirmButtonText: "Aceptar",
            confirmButtonColor: "#232323",
          });
        } else {
          console.error(error);
        }
      }
    }
  };

  const handleGoogleAuthenticate = () => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        Swal.fire({
          title: "¡Éxito!",
          text: "Has iniciado sesión correctamente",
          icon: "success",
          confirmButtonText: "Aceptar",
          willClose: () => {
            login(result.user);
            navigate("/NucleoTechnology/Ofertas");
          },
        });
      })
      .catch((error) => {
        Swal.fire({
          title: "Error",
          text: "No se pudo iniciar sesión con Google",
          icon: "error",
          confirmButtonText: "Aceptar",
        });
        console.log(error);
      });
  };

  return (
    <UserContext.Provider
      value={{
        user,
        username,
        email,
        loggedIn,
        admin,
        compras,
        favs,
        verified,
        setCompras,
        setFavs,
        login,
        logout,
        addToFavs,
        removeFromFavs,
        recoverPassword,
        handleAuthenticate,
        handleGoogleAuthenticate,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
