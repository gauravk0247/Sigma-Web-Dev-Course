import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [count, setCount] = useState(0)


  useEffect(()=>{
    console.warn("Updated");
  })
  return (
    <>
      <p>Now start</p>
      <p>Counting is start here : {count}</p>
      <button onClick={()=>setCount(count+1)}>Click ME</button>
    </>
  )
}

export default App
