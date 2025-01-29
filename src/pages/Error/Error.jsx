import { Link } from 'react-router-dom'
import NotFound from "../../assets/images/not-found.png"

export const Error = () => {
    return (
        <main className='error-main'>
            <img src={NotFound}/>
            <div className="error-container">
                <h1>Error 404</h1>
                <p>La página que buscas no existe o ha sido movida.</p>
                <Link to="/NucleoTechnology/">
                    Volver al inicio
                </Link>
            </div>
        </main>
      );
}
