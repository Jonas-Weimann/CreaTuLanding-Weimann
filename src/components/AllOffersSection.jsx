import useFetch from '../hooks/usefetch'
import { OfertaCard } from './OfertaCard'

export const AllOffersSection = () => {

  const {data, loading, error} = useFetch('src/db/Ofertas.json')
  
  if(loading) return <p>Cargando</p>
  if(error) return <p>Error: {error.message}</p>

  return (
    <section className='all-offers-section'>
      <img src="src/assets/images/blob3.png" alt="blob" className='blob3'/>
      <img src="src/assets/images/blob4.png" alt="blob" className='blob4'/>
      <h5>Descubre oportunidades únicas</h5>
      <div className="all-offers-container">
      {
    data.map(oferta=>(
      <OfertaCard
      key={oferta.id}
      name={oferta.nombre}
      src={oferta.imagen}
      oldPrice={oferta.precioOriginal}
      price={oferta.precioDescontado}
      offerType={oferta.tipo}
      />
    ))
    }
      </div>
    </section>
  )
}
