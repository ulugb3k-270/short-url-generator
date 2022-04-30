// STYLES
import "./InputShortener.css"

// REACT HOOKS
import { useState } from "react"

const InputShortener = ({ setInputValue }) => {
  const [value, setValue] = useState("");

  const handleClick = (e) => {
    e.preventDefault()
    setInputValue(value);
    setValue("");
  }

  return (
    <div className="inputContainer">
      <h1>URL <span>Shortener</span></h1>
      <form >
        <input
          type="text"
          placeholder="Paste a link to shorten it"
          value={value}
          onChange={e => setValue(e.target.value)}  
        />
        <button type="submit" onClick={handleClick}>Generate</button>
      </form>
    </div>
  )
}

export default InputShortener