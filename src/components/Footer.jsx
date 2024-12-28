import { LinkList } from "./LinkList"

export const Footer = ()=>{
    return(
        <footer>
            <div className="footer-logo-container">
            <img src="src/assets/images/logo.svg" alt="NUCLEO Technology" className='footer-logo-icon'/>
            <span>Soluciones tecnológicas al alcance de todos, con calidad y confianza.</span>
            </div>
            <div className="footer-links-container">
                <LinkList title="Contacto" links={["11 4033 2284","soporte@nucleotechnology.com", "www.linkedin.com/company/nucleo"]}></LinkList>
                <LinkList title="Empresa" links={["Sobre nosotros","Nuestros servicios", "Política de privacidad"]}></LinkList>
                <LinkList title="Cliente" links={["Mi cuenta","Preguntas frecuentes", "Recuperar contraseña"]}></LinkList>
                <LinkList title="Social" links={["nucleo.celulares","núcleo celulares", "nucleo_celulares"]}></LinkList>
            </div>
        </footer>
    )
}