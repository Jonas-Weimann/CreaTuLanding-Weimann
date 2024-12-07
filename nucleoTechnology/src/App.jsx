import './App.css'
import { Navbar } from './components/Navbar'
import {Button } from './components/Button'
import {ItemListContainer} from './components/ItemListContainer'

function App() {

  return (
    <div>
      <video muted autoPlay loop> <source src='./src/assets/videos/landingVideo.mp4'/></video>
    <Navbar/>
    <h1>LLEVA TU TECNOLOGIA AL <b>SIGUIENTE NIVEL</b></h1>
    <p>Encotrá soluciones <b>rápidas</b> y <b>efectivas</b></p>
    <div>
      <Button style={{backgroundColor:'accent', border: 'none', color:'accent'}}>CATÁLOGO</Button>
      <Button >SERVICIOS</Button>
    </div>
    <ItemListContainer/>
    </div>
  )
}

export default App
