import './App.css';
import {useState} from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
function App() {
  const [count, setCount] = useState(0);
  return (
    <>
     <Header/>
      <p>UseState</p>
      <p>Count is upgraded : {count}</p>
     <button onClick={()=>{setCount(count+1)}}>Click me</button>
     <Footer/>
    </>
  );
}

export default App;
