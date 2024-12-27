import React from 'react'
import { OfertaDelDiaCard } from './OfertaDelDiaCard'
import useFetch from '../hooks/usefetch'

export const DailyOfferSection = () => {

  const {data, loading, error} = useFetch('src/db/Ofertas.json')
    
  if(loading) return <p>Cargando</p>
  if(error) return <p>Error: {error.message}</p>
  
  const ofertaSeleccionada = data.find(oferta=>oferta.dailyOffer)

  return (
    <section className='daily-offer-section'>
        <img src="src/assets/images/popUpOffer.png"/>
        <div className="oferta-container">
          <h3>OFERTA DEL DIA</h3>
          <OfertaDelDiaCard 
          name={ofertaSeleccionada.name}
          oldPrice={ofertaSeleccionada.originalPrice}
          price={ofertaSeleccionada.discountedPrice}
          reviews={ofertaSeleccionada.reviews}
          description={ofertaSeleccionada.description}
          />
        </div>
    </section>
  )
}
