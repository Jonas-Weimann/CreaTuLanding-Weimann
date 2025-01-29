import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";
import useFetch from "../hooks/usefetch"
import CircularProgress from '@mui/material/CircularProgress';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Button } from "@mui/material";
import { useCart } from "../contexts/CartContext";

export const ItemDetailContainer = ({ page, url }) => {
    const { addToCart } = useCart()
    const { idProducto } = useParams()
    const { data, loading, error } = useFetch(url)
    let producto
    if (data) producto = data.find(producto => producto.id === idProducto)
    if (loading) return <CircularProgress color="secondary" />
    if (error) return <p>Error: {error.message}</p>
    return (
        <main className="main detail-page">
            <div className="producto-detail-container">
                <img src={producto.imagen} alt={producto.nombre} />
                <div className="producto-details">
                    <div className="review-fav-container">
                        <h1>{producto.nombre}</h1>
                        <FavoriteBorderIcon className="fav-icon" color="pink" sx={{ width: '2rem', height: '2rem' }} />
                    </div>
                    <span className={`star star${Math.ceil(producto.calificacion)}`}></span>
                    <span className="detail-precio">{producto.precio}</span>
                    <Button onClick={addToCart} variant='contained' color="accent" sx={{
                        borderRadius: "4rem", fontFamily: "deca", textAlign: "center",
                        color: "white",
                        fontSize: "1.3rem",
                        width: "20rem"
                    }}> Agregar al carrito </Button>
                    <Link to={`/NucleoTechnology/${page}`} className="volver-btn">Volver</Link>
                </div>
            </div>
        </main>
    )
}
