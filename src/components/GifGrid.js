import React from 'react'
import PropTypes from 'prop-types'

import { useFetchGifs } from '../hooks/useFetchGifs';
//import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

  //const [images, setImages] = useState([])

  // el hook useEffect se usa para hacer cambios en el estado pero solo cuando el componente es renderizado
  // useEffect( () => {
  //   getGifs(category)
  //     .then(img => setImages(img));
  // }, [category])

  const {data, loading} = useFetchGifs(category)


  return (
    <>
      <h3 className='animate__animated animate__fadeIn'>{category}</h3>

      {loading && <p className='animate__animated animate__flash'>Loading</p>}

      <div className='card-grid'>
          {
            data.map( img => (
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

GifGrid.propTypes = {
  category: PropTypes.string.isRequired
}