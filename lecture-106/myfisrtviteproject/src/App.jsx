import './App.css'
import Footer from './Components/Footer'
import NavBar from './Components/NavBar'
import Card from './Components/Card'

function App() {

  return (
    <>
      <NavBar/>
      <div className="cards">
      <Card title="title 1" desc="description of the card 1"/>
      <Card title="title 2" desc="description of the card 2"/>
      <Card title="title 3" desc="description of the card 3"/>
      <Card title="title 4" desc="description of the card 4"/>
      </div>
      <Footer/>
    </>
  )
}

export default App
