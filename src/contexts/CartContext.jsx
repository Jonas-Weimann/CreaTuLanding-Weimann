import "toastify-js/src/toastify.css"
import {useState, createContext, useContext} from 'react'
import Toastify from 'toastify-js'

const CartContext = createContext()

export const CartProvider = ({children}) => {
  const [productCount, setProductCount] = useState(0)
  const [productList, setProductList] = useState([])

  const addToCart = (product) =>{

    Toastify({
      text: "Producto añadido con éxito",
      duration: 3000,
      destination: "http://localhost:5173/NucleoTechnology/Cart",
      newWindow: false,
      close: true,
      gravity: "top",
      position: "right",
      stopOnFocus: true,
      style: {
        color:"#00ffff",
        border: "#00ffff 2px solid",
        fontFamily: "alata",
        fontSize: "1rem",
        marginTop: "9rem",
        display: "flex",
        gap: "1rem",
        backdropFilter: "blur(1rem)",
        background: "transparent",
        borderRadius: "2rem"
      }
    }).showToast()    

    setProductList((prevProducts)=>[...prevProducts, product])
    setProductCount((prevCount) => prevCount + 1)

  }

  const removeFromCart = (productId) =>{
    setProductList((prevProducts)=> prevProducts.filter((product) => product.id !== productId))
    setProductCount((prevCount) => Math.max(prevCount - 1, 0))

  }



  return (
    <CartContext.Provider value={{productCount, productList, addToCart, removeFromCart}}>{children}</CartContext.Provider>
  )
}

export const useCart = () => {
  return useContext(CartContext)
}