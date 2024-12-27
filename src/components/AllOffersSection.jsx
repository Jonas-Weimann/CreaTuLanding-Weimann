import React from 'react'
import useFetch from '../hooks/usefetch'
import { OfertaCard } from './OfertaCard'

export const AllOffersSection = () => {

  const {data, loading, error} = useFetch('src/db/Ofertas.json')
  
  if(loading) return <p>Cargando</p>
  if(error) return <p>Error: {error.message}</p>

  return (
    <section className='all-offers-section'>
      <h5>Descubre oportunidades únicas</h5>
      <div className="all-offers-container">
      {
    data.map(oferta=>(
      <OfertaCard
      key={oferta.id}
      name={oferta.name}
      src={oferta.img}
      oldPrice={oferta.originalPrice}
      price={oferta.discountedPrice}
      offerType={oferta.offerType}
      />
    ))
    }
      </div>

  
    </section>
  )
}
