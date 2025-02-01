import { useEffect, useState } from "react";
import { useUser } from "../../contexts/UserContext";
import { Error } from "../Error/Error";
import { app } from "../../config/firebaseConfig";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { formatear } from "../../utilities/formateo";
import { LoadingPage } from "../Loading/LoadingPage";
import { FetchError } from "../Error/FetchError";

export const Admin = () => {
  const { admin } = useUser();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const db = getFirestore(app);
    const categorias = [
      "Ofertas",
      "Celulares",
      "Cargadores",
      "Sonido",
      "Iluminacion",
    ];
    const fetchData = async () => {
      try {
        const data = [];
        for (const categoria of categorias) {
          const collectionRef = collection(db, categoria);
          const snapshot = await getDocs(collectionRef);
          snapshot.forEach((doc) => {
            if (doc.id.includes("of")) {
              data.push({ id: doc.id, ...doc.data(), oferta: true });
            } else {
              data.push({ id: doc.id, ...doc.data(), oferta: false });
            }
          });
        }
        setLoading(false);
        setProducts(data);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {admin ? (
        loading ? (
          <LoadingPage />
        ) : error ? (
          <FetchError />
        ) : (
          <main className="admin-page main">
            <h1>Lista de productos</h1>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Imagen</th>
                  <th>Nombre</th>
                  <th>Descripcion</th>
                  <th>Categoria</th>
                  <th>Stock</th>
                  <th>Precio</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map((prod) => {
                  return (
                    <tr key={prod.id} className="prod-row">
                      <td>{prod.id}</td>
                      <td>
                        <img src={prod.imagen} alt={prod.nombre} />
                      </td>
                      <td>{prod.nombre}</td>
                      <td>{prod.descripcion || "N/A"}</td>
                      <td>{prod.categoria.toUpperCase()}</td>
                      <td>{prod.stock || "N/A"}</td>
                      <td>{formatear(prod.precio)}</td>
                      <td className="actions-container">
                        <button>Edit</button>
                        <button>Delete</button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </main>
        )
      ) : (
        <Error />
      )}
    </>
  );
};
