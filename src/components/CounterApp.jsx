import PropTypes from "prop-types"
import { useState } from "react"

export default function CounterApp({title, subtitle, value}) {

    const [counter, setCounter] = useState(value)

    const handleAdd = () => setCounter(counter + 1)
    const handleReset = () => setCounter(value )
    
    const handleSub = () => setCounter(counter - 1)

  return (
    <div>

        <h1 className="text-3xl font-bold" data-testid="test-title">{title}</h1>
        <p>{subtitle}</p>
        <h2 className="text-2xl font-bold p-2 m-1 bg-indigo-300 "> {counter} </h2>
        <button className="p-1 m-1 bg-amber-200 rounded hover:cursor-pointer" onClick={handleAdd}> +1 </button>
        <button className="p-1 m-1 bg-amber-200 rounded hover:cursor-pointer" onClick={handleSub}> -1 </button>
        <button aria-label="btn-reset"  className="p-1 m-1 bg-amber-200 rounded hover:cursor-pointer" onClick={handleReset}> Reset </button>
    </div>
  )
}

CounterApp.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired
}
CounterApp.defaultProps = {
  value: 0,
}