import { useEffect, useState } from "react";
import { useUser } from "../../contexts/UserContext";
import { Error } from "../Error/Error";
import { app } from "../../config/firebaseConfig";
import Toastify from "toastify-js";
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  getFirestore,
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
// import AddIcon from "@mui/icons-material/Add";
import Swal from "sweetalert2";
// import { v4 as uuidv4 } from "uuid";
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

  // const addProduct = () => {
  //   const prodID = uuidv4();
  //   Swal.fire({
  //     title: "Añadir producto",
  //     html: `
  //             <form class="add-product-form" id="dynamic-form">

  //                   <label for="nombreInput">Nombre:</label>
  //                   <input id="nombreInput" class="swal2-input" required>

  //                   <label for="descInput">Descripción:</label>
  //                   <input id="descInput" class="swal2-input" required>

  //                   <label for="califInput">Calificación:</label>
  //                   <input id="califInput" class="swal2-input" type="number" min=0 step=0.1 max=5 required>

  //                   <label for="imgInput">Imagen:</label>
  //                   <input id="imgInput" class="swal2-input" type="url" placeholder="http://..." required>

  //                   <label for="precioInput">Precio:</label>
  //                   <input id="precioInput" class="swal2-input" type="number" min=0 required>

  //                   <label for="catInput">Categoría:</label>
  //                   <select id="catInput" class="swal2-input" required>
  //                     <option value="Celulares" >Celulares</option>
  //                     <option value="Sonido" >Sonido</option>
  //                     <option value="Iluminacion" >Iluminación</option>
  //                     <option value="Cargadores" >Cargadores</option>
  //                     <option value="Ofertas" >Ofertas</option>
  //                   </select>
  //                   <div id="dynamic-inputs-container">
  //                     <label for="precOriginalInput">Precio Original:</label>
  //                     <input id="precOriginalInput" class="swal2-input" type="number" min=0 step=0.1 >

  //                     <label for ="tipoOfInput">Tipo</label>
  //                     <select id="tipoOfInput" class="swal2-input">
  //                       <option>10% off</option>
  //                       <option>Best pick</option>
  //                       <option>Hot sale</option>
  //                     </select>
  //                     <label for="ofDiariaInput">¿Es oferta del día?</label>
  //                     <select id="ofDiariaInput" class="swal2-input">
  //                       <option value=false>No</option>
  //                       <option value=true>Sí</option>
  //                     </select>
  //                   </div>
  //             </form>
  //           `,
  //     focusConfirm: false,
  //     showCancelButton: true,
  //     didOpen: () => {
  //       const db = getFirestore(app);
  //       const select = document.getElementById("catInput");
  //       const inputContainer = document.getElementById(
  //         "dynamic-inputs-container"
  //       );

  //       select.addEventListener("change", () => {
  //         const { value } = select;
  //         let inputsHTML = "";
  //         if (value === "Ofertas") {
  //           inputsHTML = `<label for="precOriginalInput">Precio Original:</label><input id="precOriginalInput" class="swal2-input" type="number" min=0 step=0.1 >
  //           <label for ="tipoOfInput">Tipo</label> <select id="tipoOfInput" class="swal2-input"><option>10% off</option><option>Best pick</option><option>Hot sale</option></select>
  //           <label for="ofDiariaInput">¿Es oferta del día?</label> <select id="ofDiariaInput" class="swal2-input"><option value=false>No</option> <option value=true>Sí</option></select>
  //           `;
  //         }
  //         if (value === "Celulares") {
  //           inputsHTML = `<label for="precOriginalInput">Precio Original:</label><input id="precOriginalInput" class="swal2-input" type="number" min=0 step=0.1 >
  //           <label for ="tipoOfInput">Tipo</label> <select id="tipoOfInput" class="swal2-input"><option>10% off</option><option>Best pick</option><option>Hot sale</option></select>
  //           <label for="ofDiariaInput">¿Es oferta del día?</label> <select id="ofDiariaInput" class="swal2-input"><option value=false>No</option> <option value=true>Sí</option></select>
  //           `;
  //         }

  //         inputContainer.innerHTML = inputsHTML;
  //       });

  //       const docRef = doc(db, categoria, prodID);
  //     },
  //   });
  // };

  const viewProduct = (producto) => {
    const { id, precio, nombre, descripcion, categoria, imagen, stock } =
      producto;
    Swal.fire({
      title: "Información del producto",
      html: `<div class="item-detail-view-form">
                <span style="text-align: center; display: block;"><strong>Product ID:</strong> <br/> ${id}</span>
                
                <div class="view-data-container">
                  <div class="view-image-container">
                    <span >Nombre:</span>
                    <p>${nombre}</p>

                    <span>Imagen:</span>
                    <div class="view-image">
                      <img src="${imagen}">
                      <span>Fuente: </span>
                      <p>${imagen}</p>
                    </div>
                  </div>

                  <div class="view-desc-container">
                    <span>Descripción:</span>
                    <p>${descripcion || "N/A"}</p>

                    <span>Categoría:</span>
                    <p id="cat"  style="width: 100%;">
                      ${capitalize(categoria)}
                    </p>

                    <span>Stock:</span>
                    <p id="stock" class="swal2-input">${stock || "N/A"}</p>

                    <span>Precio:</span>
                    <p id="precio" class="swal2-input" >${formatear(precio)}</p>
                  </div>
                </div>
              </div>`,
    });
  };

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

        if (stockInput !== stock) {
          batch.update(docRef, { stock: stockInput });
        }

        if (precioInput !== precio) {
          batch.update(docRef, { precio: precioInput });
        }

        if (catInput !== categoria) {
          const docSnapshot = await getDoc(docRef);
          const docData = docSnapshot.data();

          const newColRef = collection(db, capitalize(catInput));
          const newDocRef = doc(newColRef, id);

          batch.set(newDocRef, { ...docData, categoria: catInput });
          batch.delete(docRef);
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

  const deleteProduct = (producto) => {
    Swal.fire({
      title: "¿Eliminar producto?",
      text: "Esta acción es irreversible",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#656766",
      cancelButtonText: "Cancelar",
      confirmButtonText: "Eliminar",
    }).then((result) => {
      if (result.isConfirmed) {
        const { categoria, id } = producto;
        const db = getFirestore(app);
        const docRef = doc(db, capitalize(categoria), id);
        deleteDoc(docRef);
        Toastify({
          text: "Producto eliminado con éxito",
          duration: 3000,
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
        setProducts(products.filter((prod) => prod.id !== id));
      }
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
            {/* <button className="admin-add-btn" onClick={addProduct}>
              <AddIcon /> AÑADIR UN PRODUCTO
            </button> */}
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
                          <IconButton
                            color="secondary"
                            onClick={() => viewProduct(prod)}
                          >
                            <InfoIcon />
                          </IconButton>
                          <IconButton
                            color="secondary"
                            onClick={() => editProduct(prod)}
                          >
                            <EditIcon />
                          </IconButton>
                          <IconButton
                            color="secondary"
                            onClick={() => deleteProduct(prod)}
                          >
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
