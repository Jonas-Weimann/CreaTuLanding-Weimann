//Ejemplo de peticion GET a una api con react.

// function Peticion(){
//     const [data, setData] = useState();
//     const [mensaje, setMensaje] = useState('Este es el contenido de children')

//     const traerInformacion = async () =>{
//         const result = await obtenerDatos();
//         setData(result)
//     }

//     useEffect(()=>{
//         traerInformacion()
//     },[])


// }

import {useEffect, useState} from 'react'
//Se debe chusmear los endpoints de la api para saber como acceder a los datos que queremos.
export const CountryInfo = (countryName) =>{
    const [country, setCountry] = useState(null);

    useEffect(()=>{
        fetch(`https://restcountries.com/v3.1/name/${countryName}`)
        .then((response)=> response.json())
        .then((data)=>{
            setCountry(data[0])
            console.log(data[0])
        })
        .catch((error)=> console.error('Error:', error))
    },[countryName])

    return (
        <div>
            {country ? (
                <div>
                    <h2>{country.name.common}</h2>
                    <p>Capital: {country.capital}</p>
                    <p>Region: {country.region}</p>
                </div>
            ) : <p>Cargando...</p>}
        </div>
    )
}

//FETCH API-CALL desde Hook personalizado

