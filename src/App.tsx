import './App.css'
import { Header } from './components/Header/Header'
import { Banner } from './components/Banner/Banner'
import { Habilidades } from './components/Habilidades/Habilidades'

function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <Habilidades/>
    </div>
  )
}

export default App
