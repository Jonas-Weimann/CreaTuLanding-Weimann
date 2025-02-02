import { useEffect, useState } from "react";
import { useUser } from "../../contexts/UserContext";
import { Error } from "../Error/Error";
import { app } from "../../config/firebaseConfig";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  updateDoc,
  writeBatch,
} from "firebase/firestore";
import { formatear } from "../../utilities/formateo";
import { LoadingPage } from "../Loading/LoadingPage";
import { FetchError } from "../Error/FetchError";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Swal from "sweetalert2";
import { capitalize } from "../../utilities/capitalize";

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

  const editProduct = (producto) => {
    const { id, nombre, imagen, descripcion, categoria, stock, precio } =
      producto;
    const db = getFirestore(app);
    Swal.fire({
      title: "Editar datos",
      html: `
              <div class="item-detail-edit-form">
                <span style="text-align: center; display: block;"><strong>Product ID:</strong> <br/> ${id}</span>
                
                <div class="edit-data-container">
                  <div class="edit-image-container">
                    <label for="nombre">Nombre:</label>
                    <input id="nombre" class="swal2-input" value="${nombre}">

                    <label for="img">Imagen:</label>
                    <div class="edit-image">
                      <img src="${imagen}">
                      <input id="img" class="swal2-input" value="${imagen}">
                    </div>
                  </div>

                  <div class="edit-desc-container">
                    <label for="desc">Descripción:</label>
                    <input id="desc" class="swal2-input" value="${
                      descripcion || "N/A"
                    }">

                    <label for="cat">Categoría:</label>
                    <select id="cat" class="swal2-input" style="width: 100%;">
                      <option value="celulares" ${
                        categoria === "celulares" ? "selected" : ""
                      }>Celulares</option>
                      <option value="sonido" ${
                        categoria === "sonido" ? "selected" : ""
                      }>Sonido</option>
                      <option value="iluminacion" ${
                        categoria === "iluminacion" ? "selected" : ""
                      }>Iluminación</option>
                      <option value="cargadores" ${
                        categoria === "cargadores" ? "selected" : ""
                      }>Cargadores</option>
                      <option value="relojes" ${
                        categoria === "relojes" ? "selected" : ""
                      }>Relojes</option>
                      <option value="tv" ${
                        categoria === "tv" ? "selected" : ""
                      }>TV</option>
                      <option value="termos" ${
                        categoria === "termos" ? "selected" : ""
                      }>Termos</option>
                      <option value="ofertas" ${
                        categoria === "ofertas" ? "selected" : ""
                      }>Ofertas</option>
                    </select>

                    <label for="stock">Stock:</label>
                    <input id="stock" class="swal2-input" value="${
                      stock || "N/A"
                    }">

                    <label for="precio">Precio:</label>
                    <input id="precio" class="swal2-input" value="${precio}" type="number">
                  </div>
                </div>
              </div>
            `,
      focusConfirm: false,
      showCancelButton: true,
      preConfirm: async () => {
        const batch = writeBatch(db);
        const docRef = doc(db, capitalize(categoria), id);

        const nombreInput = document.getElementById("nombre").value;
        const imgInput = document.getElementById("img").value;
        const descInput = document.getElementById("desc").value;
        const catInput = document.getElementById("cat").value;
        const stockInput = parseInt(document.getElementById("stock").value);
        const precioInput = parseInt(document.getElementById("precio").value);

        if (nombreInput !== nombre) {
          batch.update(docRef, { nombre: nombreInput });
        }

        if (imgInput !== imagen) {
          batch.update(docRef, { imagen: imgInput });
        }

        if (descInput !== descripcion) {
          batch.update(docRef, { descripcion: descInput });
        }

        if (catInput !== categoria) {
          batch.update(docRef, { categoria: catInput });
        }

        if (stockInput !== stock) {
          batch.update(docRef, { stock: stockInput });
        }

        if (precioInput !== precio) {
          batch.update(docRef, { precio: precioInput });
        }

        try {
          await batch.commit();
          setProducts((prevProducts) =>
            prevProducts.map((prod) =>
              prod.id === id
                ? {
                    ...prod,
                    nombre: nombreInput,
                    imagen: imgInput,
                    descripcion: descInput,
                    categoria: catInput,
                    stock: stockInput,
                    precio: precioInput,
                  }
                : prod
            )
          );
          Swal.fire(
            "¡Éxito!",
            "Los datos han sido actualizados correctamente",
            "success"
          );
        } catch (error) {
          console.error("Error al actualizar el producto:", error);
          Swal.fire("Error", "Hubo un problema al actualizar los datos", error);
        }
      },
    });
  };

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
                        <Stack
                          sx={{
                            display: "flex",
                            flexDirection: "row",
                            gap: "1rem",
                          }}
                        >
                          <IconButton color="secondary">
                            <InfoIcon />
                          </IconButton>
                          <IconButton
                            color="secondary"
                            onClick={() => editProduct(prod)}
                          >
                            <EditIcon />
                          </IconButton>
                          <IconButton color="secondary">
                            <DeleteIcon />
                          </IconButton>
                        </Stack>
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
