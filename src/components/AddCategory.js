import React, {useState} from 'react'

export const AddCategory = () => {

  //agregando estado para el input para la busqueda
  const [inputValue, setInputValue] = useState('Hola Mundo')

  //handler para manejar el evento del input
  const handleInputChange = (e) => {
    console.log(e.target.value)
    setInputValue(e.target.value)
  }

  //handler para manejar el evento de enter y no refrescar la pagina
  //previniendo el comportamiento por defecto
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('submit')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />
    </form>
  )
}
