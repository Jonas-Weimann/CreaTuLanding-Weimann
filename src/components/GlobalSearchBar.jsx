import { useEffect, useState } from "react";
import SearchIcon from "../assets/images/search-icon.svg";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { app } from "../config/firebaseConfig";
import { SearchResultItem } from "./SearchResultItem";
import HeartBrokenIcon from "@mui/icons-material/HeartBroken";

export const GlobalSearchBar = () => {
  const [allProductsData, setAllProductsData] = useState([]);
  const [focus, setFocus] = useState(false);
  const [inputText, setInputText] = useState("");

  useEffect(() => {
    const db = getFirestore(app);
    const collections = [
      "Ofertas",
      "Celulares",
      "Cargadores",
      "Sonido",
      "Iluminacion",
    ];

    const getAllProductsData = async () => {
      const promesas = collections.map(async (col) => {
        const colRef = collection(db, col);
        const snapshot = await getDocs(colRef);
        return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      });
      const data = await Promise.all(promesas);
      setAllProductsData(data.flat());
    };
    getAllProductsData();
  }, []);

  const handleInputText = (event) => {
    const { value } = event.target;
    setInputText(value);
  };

  return (
    <div style={{ position: "relative", width: "100%" }}>
      <div className="searchbar">
        <input
          className="searchbar-input"
          type="text"
          placeholder={`Buscar en Nucleo Technology...`}
          value={inputText}
          onChange={handleInputText}
          onFocus={() => setFocus(true)}
          onBlur={() => setTimeout(() => setFocus(false), 100)}
        />
        <img src={SearchIcon} alt="Search" className="searchbar-button" />
      </div>
      {inputText !== "" && focus && (
        <div className="results-container">
          {(() => {
            const productosFiltrados = allProductsData.filter((prod) =>
              prod.nombre.toLowerCase().includes(inputText.toLowerCase())
            );
            return productosFiltrados.length > 0 ? (
              productosFiltrados.map((prodfiltrado) => (
                <SearchResultItem key={prodfiltrado.id} object={prodfiltrado} />
              ))
            ) : (
              <div className="search-result-empty">
                <span>Ningún resultado coincide con tu búsqueda</span>
                <HeartBrokenIcon className="empty-cart--icon" />
              </div>
            );
          })()}
        </div>
      )}
    </div>
  );
};
