import "toastify-js/src/toastify.css";
import { useState, createContext, useContext } from "react";
import Toastify from "toastify-js";
import { useNavigate } from "react-router-dom";
import { count } from "../utilities/count";
import { capitalize } from "../utilities/capitalize";
import { doc, getFirestore, writeBatch } from "firebase/firestore";
import { app } from "../config/firebaseConfig";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const navigate = useNavigate();
  const [productCount, setProductCount] = useState(0);
  const [productList, setProductList] = useState([]);

  const productsInStock = () => {
    return productList.every((prod) => prod.stock >= prod.quantity);
  };

  const reduceStock = () => {
    const db = getFirestore(app);
    const batch = writeBatch(db);
    productList.forEach((prod) => {
      const { categoria, id, stock } = prod;
      let singleProductCount = count(productList, id);
      const docRef = doc(db, capitalize(categoria), id);
      batch.update(docRef, { stock: Math.max(0, stock - singleProductCount) });
    });
    batch.commit();
  };

  const addToCart = (product) => {
    let singleProductCount = count(productList, product.id);

    if (singleProductCount < product.stock) {
      setProductList((prevProducts) => {
        const existingProduct = prevProducts.find(
          (item) => item.id === product.id
        );
        if (existingProduct) {
          return prevProducts.map((item) =>
            item.id === product.id && item.quantity < product.stock
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
        }
        return [...prevProducts, { ...product, quantity: 1 }];
      });
      setProductCount((prevCount) => prevCount + 1);
      Toastify({
        text: "Producto añadido con éxito",
        duration: 3000,
        onClick: () =>
          navigate("/NucleoTechnology/Cart", {
            replace: true,
          }),
        newWindow: false,
        close: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        style: {
          color: "#00ffff",
          border: "#00ffff 2px solid",
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
      singleProductCount += 1;
    } else {
      Toastify({
        text: "Límite de stock alcanzado",
        duration: 3000,
        onClick: () =>
          navigate("/NucleoTechnology/Cart", {
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
    }
  };

  const removeFromCart = (product) => {
    setProductList((prevProducts) => {
      const productToRemove = prevProducts.find(
        (prod) => prod.id === product.id
      );
      if (productToRemove.quantity === 1) {
        return prevProducts.filter((prod) => prod.id !== product.id);
      } else {
        return prevProducts.map((prod) =>
          prod.id === product.id
            ? { ...prod, quantity: prod.quantity - 1 }
            : prod
        );
      }
    });
    setProductCount((prevCount) => Math.max(prevCount - 1, 0));
  };

  const cleanCart = () => {
    setProductCount(0);
    setProductList([]);
  };

  const getTotal = () => {
    return productList.reduce((total, item) => {
      return total + item.precio * item.quantity;
    }, 0);
  };

  return (
    <CartContext.Provider
      value={{
        productCount,
        productList,
        setProductCount,
        setProductList,
        addToCart,
        removeFromCart,
        cleanCart,
        getTotal,
        reduceStock,
        productsInStock,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
