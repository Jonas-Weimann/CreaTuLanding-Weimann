import {SideFilter} from "../../components/SideFilter"
import { SearchSection } from "../../components/SearchSection"

export const Celulares = () => {
  const dropdowns = {
    "Tipo": ["Funda", "Soporte", "Protector"], 
    "Marca": ["Samsung", "iPhone", "Motorola", "Xiaomi", "Huawei"],
    "Modelo": ['Todos los modelos','Edge 30 Fusion','Galaxy A12', 'Galaxy A32','Galaxy A53','Galaxy M12','Galaxy M32','Galaxy S21','Galaxy S22','Galaxy S23','Galaxy Z Flip 3','Galaxy Z Fold 4','Mate 40','Moto G60','Moto G71','Moto E8','Moto E9','Nova 10','Nova 9','P40','P50','Poco X5','ROG Phone 5','ROG Phone 6','Redmi Note 10','Redmi Note 11','Redmi Note 12','iPhone 11','iPhone 12','iPhone 13','iPhone 14'],
    "Material": ["silicona", "aluminio", "metal", "plástico", "cuero", "vidrio templado"]
  }
  return (
    <main className="celulares-page main">
          <h1>Todo lo que tu smartphone necesita, en un solo lugar</h1>
          <div className="celulares-sections-container">
            <SideFilter options={dropdowns} url="https://jonas-weimann.github.io/CreaTuLanding-Weimann/db/celulares.json"></SideFilter>
            <SearchSection/>
          </div>
    </main>
  )
}
