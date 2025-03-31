import PropTypes from "prop-types"
import { useState } from "react"

export default function AddCategory({agregarNuevaCategoria}) {

    const [inputValue, setInputValue] = useState('')

    const onInputChange = ({target}) => setInputValue(target.value)

    const onSubmit = (event) => {
        event.preventDefault()
        if(inputValue.trim().length <= 1) return
        agregarNuevaCategoria(inputValue.trim())
        setInputValue('')
    }

  return (
    <form onSubmit={onSubmit} aria-label = "form"
    className="flex justify-center items-center mt-8">
        
        <span className="m-2 text-3xl">Buscar :</span>
        <input 
          value={inputValue}
          onChange={event => onInputChange(event)}
          type="text" 
          className="text-black bg-white rounded-lg text-3xl "
          placeholder="Flower..."
        />
      </form>
  )
}

AddCategory.propTypes = {
  agregarNuevaCategoria: PropTypes.func.isRequired
}
