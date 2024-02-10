import { useEffect, useRef } from 'react'
import './App.css'

function App() {

  const inputRef = useRef(null);

  const handleClick = ()=> {
    inputRef.current.focus();
  }

  return (
    <>
      <form action="">
      <input ref={inputRef} />
      <button onClick={handleClick}>
        Focus the input
      </button>
      </form>
    </>
  )
}

export default App
