import { useEffect, useState } from "react";
import { useUser } from "../../contexts/UserContext";
import useFetch from "../../hooks/usefetch";
import { Error } from "../Error/Error";
import { app } from "../../config/firebaseConfig";
import {
  doc,
  collection,
  getDoc,
  getDocs,
  getFirestore,
  query,
  where,
  limit,
  addDoc,
  deleteField,
  writeBatch,
} from "firebase/firestore";
import { desformatear } from "../../utilities/formateo";

export const Admin = () => {
  const { admin } = useUser();
  const [product, setProduct] = useState({});
  const [products, setProducts] = useState([]);
  const db = getFirestore(app);

  // useEffect(() => {
  //ACCEDER A UN ELEMENTO EN ESPECIFICO CON SU COLECCION + ID
  //   const productoRef = doc(
  //     db,
  //     "cargadores",
  //     "ae46d993-8c6f-431d-a996-97a825828995"
  //   );
  //   getDoc(productoRef).then((snapshot) => {
  //     if (snapshot.exists()) {
  //       setProduct({ id: snapshot.id, ...snapshot.data() });
  //       console.log(product);
  //     } else {
  //       console.log("Item no encontrado");
  //     }
  //   });

  //   //ACCEDER A UNA COLECCION
  //   const collectionRef = collection(db, "cargadores");
  //   getDocs(collectionRef).then((snapshot) => {
  //     if (snapshot.size !== 0) {
  //       const productList = snapshot.docs.map((doc) => ({
  //         id: doc.id,
  //         ...doc.data(),
  //       }));
  //       setProducts(productList);
  //     } else {
  //       console.log("Coleccion no encontrada");
  //     }
  //   });

  //   //ACCEDER A UNA COLECCION CON UNA QUERY (FILTRO)
  //   const q = query(
  //     collectionRef,
  //     where("precioValue", "<", 3000),
  //     where("categoria", "==", "celulares"),
  //     limit(5)
  //   );
  //   getDocs(q).then((snapshot) => {
  //     if (snapshot.size !== 0) {
  //       const productLista = snapshot.docs.map((doc) => ({
  //         id: doc.id,
  //         ...doc.data(),
  //       }));
  //       setProducts(productLista);
  //       console.log(productLista);
  //     } else {
  //       console.log("Coleccion no encontrada");
  //     }
  //   });
  // }, []);

  // //POSTEAR UN ELEMENTO A UNA COLECCION
  // const orderCollection = collection(db, "orders");
  // const sendOrder = () => {
  //   const newOrder = {
  //     buyer: {
  //       name: "Agustin",
  //       phone: 1234,
  //       email: "aaaa@gmail.com",
  //     },
  //     items: [
  //       {
  //         name: "Producto",
  //         price: 999,
  //       },
  //     ],
  //   };
  //   addDoc(orderCollection, newOrder).then((response) => {
  //     console.log(`Documento creado con id: ${response.id}`);
  //   });
  // };

  // ACTUALIZAR UN ELEMENTO EXISTENTE
  // const orderDocRef = doc(db, "orders", "NbRqS2CRmyokbPJkLb0d");

  // const updateOrder = () => {
  //   updateDoc(orderDocRef, { payed: true, status: "packaging" }).then(() => {
  //     console.log("orden actualizada");
  //   });
  // };

  const { data } = useFetch("Sonido");

  const updateOfertas = () => {
    const batch = writeBatch(db);
    data.forEach((prod) => {
      const prodDocRef = doc(db, "Sonido", prod.id);
      batch.update(prodDocRef, {
        precioValue: deleteField(),
      });
    });
    batch.commit().then(() => {
      console.log("Ofertas actualizadas");
    });
  };

  // // ACCEDER A LOTES DE ELEMENTOS
  // const completeOrder = (userId, orderId) => {
  //   const batch = writeBatch(db);
  //   const userRef = doc(db, "users", userId);
  //   const orderRef = doc(db, "orders", orderId);
  //   batch.update(orderRef, { status: "completed" });
  //   batch.update(userRef, { pendingOrders: 0 });

  //   batch.commit().then(() => {
  //     console.log("updated");
  //   });
  // };

  // //SUBIR DATOS DESDE UN JSON
  // const uploadJson = async (url, name) => {
  //   const response = await fetch(url);
  //   const data = await response.json();
  //   const batch = writeBatch(db);
  //   data.forEach((element) => {
  //     const docRef = doc(db, name, element.id);
  //     batch.set(docRef, element);
  //   });
  //   batch
  //     .commit()
  //     .then(() =>
  //       console.log("Todos los productos fueron cargados correctamente")
  //     );
  // };

  // //SUBIR DATOS DE TODOS LOS JSON
  // const uploadAllJson = () => {
  //   uploadJson(
  //     "http://localhost:5173/NucleoTechnology/db/ofertas.json",
  //     "Ofertas"
  //   );
  //   uploadJson(
  //     "http://localhost:5173/NucleoTechnology/db/cargadores.json",
  //     "Cargadores"
  //   );
  //   uploadJson(
  //     "http://localhost:5173/NucleoTechnology/db/celulares.json",
  //     "Celulares"
  //   );
  //   uploadJson(
  //     "http://localhost:5173/NucleoTechnology/db/iluminacion.json",
  //     "Iluminacion"
  //   );
  //   uploadJson(
  //     "http://localhost:5173/NucleoTechnology/db/sonido.json",
  //     "Sonido"
  //   );
  // };

  return (
    <>
      {admin ? (
        <main className="admin-page main">
          {/* <button onClick={uploadAllJson} className="btn">
            SUBIR TODOS LOS PRODUCTOS A LA DATABASE
          </button>
          <button onClick={sendOrder} className="btn">
            POSTEAR UN PRODUCTO
          </button> */}
          <button onClick={updateOfertas} className="btn">
            ACTUALIZAR DATABASE
          </button>
          {/* <button
            onClick={() =>
              completeOrder("YyTMMc2St2sY93YivPH9", "NbRqS2CRmyokbPJkLb0d")
            }
            className="btn"
          >
            ACTUALIZAR POR LOTE
          </button> */}
        </main>
      ) : (
        <Error />
      )}
    </>
  );
};
