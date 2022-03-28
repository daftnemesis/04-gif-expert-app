import React, { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

  const [images, setImages] = useState([])

  // el hook useEffect se usa para hacer cambios en el estado pero solo cuando el componente es renderizado
  useEffect( () => {
    getGifs(category)
      .then(img => setImages(img));
  }, [category])

  

  return (
    <>
      <h3>{category}</h3>
      <div className='card-grid'>
          {
            images.map( img => (
              <GifGridItem 
                key={img.id}
                {...img}
              />
            ))
          }
      </div>
    </>
  )
}
