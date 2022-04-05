import React, {useState} from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({setCategories}) => {

  //agregando estado para el input para la busqueda
  const [inputValue, setInputValue] = useState('')

  //handler para manejar el evento del input
  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  //handler para manejar el evento de enter y no refrescar la pagina
  //previniendo el comportamiento por defecto
  const handleSubmit = (e) => {
    e.preventDefault()

    if(inputValue.trim().length > 2) {
      setCategories(cats => [inputValue, ...cats])
      setInputValue('')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <p> {inputValue}</p>
      <input 
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />
    </form>
  )
}

//Agregando proptypes para hacer requerido el setCategories
AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
}