import {ItemListContainer} from '../../components/ItemListContainer'
import {Hero} from '../../components/Hero'
import { MainLayout } from '../../layouts/MainLayout'

export const Ofertas = ()=>{
    return(
        <div className='ofertas-page'>
        <MainLayout>
            <img src="src/assets/images/blob1.png" alt="blob" className='blob1'/>
            <Hero/>
            <img src="src/assets/images/blob2.png" alt="blob" className='blob2'/>

        </MainLayout>
        </div>
    )
}