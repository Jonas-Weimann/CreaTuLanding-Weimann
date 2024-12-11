import {Button } from './Button'

export const Hero = () => {
  const filled = {backgroundColor:'var(--accent)', border: 'none', color: 'none'}
  const empty = {backgroundColor:'transparent', border: 'var(--accent) 2px solid', color:'var(--accent)'}

  return (
    <div className='hero'>
        <h1>LLEVA TU TECNOLOGIA AL <b>SIGUIENTE NIVEL</b></h1>
        <p>Soluciones <b>innovadoras y accesibles</b> para mejorar tus dispositivos con productos de calidad y  soporte especializado.
        </p>
        <div className='button-container'>
        <Button style={filled} className="filled"> CATÁLOGO </Button>
        <Button style={empty} className="empty">SERVICIOS</Button>
        </div>
    </div>
    )
}
