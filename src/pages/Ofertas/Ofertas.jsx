import { DailyOfferSection } from '../../components/DailyOfferSection'
import {SpecialOffersSection} from '../../components/SpecialOffersSection'
import {AllOffersSection} from '../../components/AllOffersSection'

export const Ofertas = ()=>{
    return(
        <main className='ofertas-page main'>
            <img src="src/assets/images/blob1.png" alt="blob" className='blob1'/>
            <SpecialOffersSection/>
            <img src="src/assets/images/blob2.png" alt="blob" className='blob2'/>
            <DailyOfferSection/>
            <AllOffersSection/>
        </main>
    )
}