import { getDocs, collection, getFirestore } from "firebase/firestore";
import { app } from "../config/firebaseConfig";
import { useEffect, useState } from "react";

const useFetch = (collectionName) => {
  const db = getFirestore(app);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productRef = collection(db, collectionName);
        const snapshot = await getDocs(productRef);

        const productsList = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setData(productsList);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setError("Error al consultar datos");
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return { data, loading, error };
};

export default useFetch;
