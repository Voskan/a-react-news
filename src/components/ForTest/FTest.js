import { useState } from 'react';
import './for-test.css'

function FTest() {
  const [value, setValue] = useState(0)
  const [error, setError] = useState(false)

  const changeValue = (value) => {
    setValue(value)
    setError(false)
  }
  
  const onMinus = () => changeValue(value - 1)
  const onPlus = () => changeValue(value + 1)

  const onInputChange = (event) => {
    const value = Number(event.target.value.trim())

    if (isNaN(value)) {
      return setError(true)
    }

    setError(false)
    setValue(value)
  }

  return (
    <div className="test">
      <button onClick={onMinus}>-</button>
      <input type="text" value={value} onChange={onInputChange} />
      <button onClick={onPlus}>+</button>

      { error ? <div>Input only number</div> : null }
    </div>
  )
}

export default FTest;