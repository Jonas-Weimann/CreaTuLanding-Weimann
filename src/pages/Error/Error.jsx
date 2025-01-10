import { Link } from 'react-router-dom'

export const Error = () => {
    return (
        <main className='error-main'>
            <img src="src/assets/images/not-found.png"/>
            <div className="error-container">
                <h1>Error 404</h1>
                <p>La página que buscas no existe o ha sido movida.</p>
                <Link to="/">
                    Volver al inicio
                </Link>
            </div>
        </main>
      );
}
