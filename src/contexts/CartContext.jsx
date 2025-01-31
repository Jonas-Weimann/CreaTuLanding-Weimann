import "toastify-js/src/toastify.css";
import { useState, createContext, useContext } from "react";
import Toastify from "toastify-js";
import { useNavigate } from "react-router-dom";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const navigate = useNavigate();
  const [productCount, setProductCount] = useState(0);
  const [productList, setProductList] = useState([]);

  const addToCart = (product) => {
    setProductList((prevProducts) => {
      const existingProduct = prevProducts.find(
        (item) => item.id === product.id
      );
      if (existingProduct) {
        return prevProducts.map((item) =>
          item.id === product.id
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
        addToCart,
        removeFromCart,
        cleanCart,
        getTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
