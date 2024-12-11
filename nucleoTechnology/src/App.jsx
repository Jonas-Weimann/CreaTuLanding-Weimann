import './App.css'
import { Navbar } from './components/Navbar'
import {ItemListContainer} from './components/ItemListContainer'
import {Hero} from './components/Hero'

function App() {

  return (
    <div className='landing-page'>
      <div className='video-container'>
        <video muted autoPlay loop> <source src='./src/assets/videos/landingVideo.mp4'/></video>
      </div>
      <Navbar/>
      <Hero/>
      <ItemListContainer>
        <h2>PRODUCTOS EN STOCK</h2>
      </ItemListContainer>
    </div>
  )
}

export default App
