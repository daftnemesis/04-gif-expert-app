import React, { useEffect, useState } from 'react'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

  const [images, setImages] = useState([])

  // el hook useEffect se usa para hacer cambios en el estado pero solo cuando el componente es renderizado
  useEffect( () => {
    getGifs();
  }, [])

  // Metodo para usar la API de giphy, usando un parametro predeterminado
  const getGifs = async () => {
    const url = 'https://api.giphy.com/v1/gifs/search?q=scooby &limit=10&api_key=jnfYUZIxm7WR1pG7mWAcxrSQ7pGkJv5h'; // url de la peticion
    const resp = await fetch(url); //se usa el fetch
    const {data} = await resp.json(); // se pasa a formato json para poder trabajar con el

    // se usa el map para llebar la peticion a un arreglo y solo con las propiedades que se necesitan
    const gifs = data.map(img => {
      return {
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
      }
    })

    console.log(gifs);

    setImages(gifs) // se llena el arreglo con los gifs retornados de la peticion
  }

  return (
    <>
      <h3>{category}</h3>
      <div className='card-grid'>
        <ol>
          {
            images.map( img => (
              <GifGridItem 
                key={img.id}
                {...img}
              />
            ))
          }
        </ol>
      </div>
    </>
  )
}
