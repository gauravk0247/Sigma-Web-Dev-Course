import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  useEffect(()=>{
    alert("This is an alert message")
  }, [])
  return (
    <>
      <p>Counting</p>
      <p>Counting is start here : {count}</p>
      <button onClick={()=>setCount(count+1)}>Click ME</button>
    </>
  )
}

export default App
