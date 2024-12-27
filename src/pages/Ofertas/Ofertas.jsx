import { DailyOfferSection } from '../../components/DailyOfferSection'
import {SpecialOffersSection} from '../../components/SpecialOffersSection'
import { MainLayout } from '../../layouts/MainLayout'
import {AllOffersSection} from '../../components/AllOffersSection'

export const Ofertas = ()=>{
    return(
        <div className='ofertas-page'>
        <MainLayout>
            <img src="src/assets/images/blob1.png" alt="blob" className='blob1'/>
            <SpecialOffersSection/>
            <img src="src/assets/images/blob2.png" alt="blob" className='blob2'/>
            <DailyOfferSection/>
            <AllOffersSection/>
        </MainLayout>
        </div>
    )
}