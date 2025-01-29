import { useEffect, useState } from "react"
import { useUser } from "../../contexts/UserContext"
import { Error } from "../Error/Error"
import { app, db } from "../../config/firebaseConfig"
import { doc, collection, getDoc, getDocs, getFirestore, query, where, limit, addDoc, updateDoc, writeBatch } from "firebase/firestore";
export const Admin = () => {
  const { admin } = useUser()
  const [product, setProduct] = useState({})
  const [products, setProducts] = useState([])
  const db = getFirestore(app)
  useEffect(() => {
    //ACCEDER A UN ELEMENTO EN ESPECIFICO CON SU COLECCION + ID
    const productoRef = doc(db, "cargadores", "ae46d993-8c6f-431d-a996-97a825828995");
    getDoc(productoRef).then((snapshot) => {
      if (snapshot.exists()) {
        setProduct({ id: snapshot.id, ...snapshot.data() });
        console.log(product);
      } else {
        console.log("Item no encontrado")
      }
    })

    //ACCEDER A UNA COLECCION 
    const collectionRef = collection(db, "cargadores")
    getDocs(collectionRef).then((snapshot) => {
      if (snapshot.size !== 0) {
        const productList = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }))
        setProducts(productList)
      } else {
        console.log("Coleccion no encontrada")
      }
    })


    //ACCEDER A UNA COLECCION CON UNA QUERY (FILTRO)
    const q = query(
      collectionRef, 
      where("precioValue", "<", 3000),
      where("categoria", "==", "celulares"),
      limit(5)
    );
    getDocs(q).then((snapshot) => {
      if (snapshot.size !== 0) {
        const productLista = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }))
        setProducts(productLista)
        console.log(productLista)
      } else {
        console.log("Coleccion no encontrada")
      }
    })

  }, [])

  //POSTEAR UN ELEMENTO A UNA COLECCION
  const orderCollection = collection(db, "orders")
  const sendOrder = ()=>{
    const newOrder = {
      buyer: {
        name: "Agustin",
        phone: 1234,
        email: "aaaa@gmail.com"
      },
      items: [
        {
          name: "Producto",
          price: 999
        }
      ]
    }
    addDoc(orderCollection, newOrder).then((response)=>{
      console.log(`Documento creado con id: ${response.id}`)
    })
  }

  // ACTUALIZAR UN ELEMENTO EXISTENTE
  const orderDocRef = doc(db, "orders", "NbRqS2CRmyokbPJkLb0d")

  const updateOrder = ()=>{
    updateDoc(orderDocRef, {payed: true, status: "packaging"}).then(()=>{
      console.log("orden actualizada")
    })
  }

  // ACCEDER A LOTES DE ELEMENTOS
  const completeOrder = (userId, orderId)=>{
    const batch = writeBatch(db);
    const userRef = doc(db, "users", userId)
    const orderRef = doc(db, "orders", orderId)
    console.log(userRef, orderRef)
  
    batch.update(orderRef, {status: "completed"})
    batch.update(userRef, {pendingOrders: 0})

    batch.commit().then(()=>{
      console.log("updated")
    })
  }


  return (
    <>
      {admin ? (
        <main className='admin-page main'>
          <button onClick={sendOrder} className="btn">POSTEAR UN PRODUCTO</button>
          <button onClick={sendOrder} className="btn">POSTEAR UN PRODUCTO</button>
          <button onClick={updateOrder} className="btn">ACTUALIZAR UN PRODUCTO</button>
          <button onClick={() => completeOrder("YyTMMc2St2sY93YivPH9", "NbRqS2CRmyokbPJkLb0d")} className="btn">ACCEDER A UN LOTE</button>
        </main>) :
        <Error />
      }
    </>

  )
}
