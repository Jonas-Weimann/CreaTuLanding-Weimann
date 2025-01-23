import { DailyOfferSection } from '../../components/DailyOfferSection'
import {SpecialOffersSection} from '../../components/SpecialOffersSection'
import {AllOffersSection} from '../../components/AllOffersSection'
import Blob1 from "../../assets/images/blob1.png"
import Blob2 from "../../assets/images/blob2.png"


export const Ofertas = ()=>{

    return(
        <main className='ofertas-page main'>
            <img src={Blob1} alt="blob" className='blob1'/>
            <SpecialOffersSection/>
            <img src={Blob2} alt="blob" className='blob2'/>
            <DailyOfferSection/>
            <AllOffersSection/>
        </main>
    )
}