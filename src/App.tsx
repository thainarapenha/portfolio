import './App.css'
import { Header } from './components/Header/Header'
import { Banner } from './components/Banner/Banner'
import { Habilidades } from './components/Habilidades/Habilidades'
import { Contatos } from './components/Contatos/Contatos'
import { Sobre } from './components/Sobre/Sobre'
import { Footer } from './components/Footer/Footer'
import { Projetos } from './components/Projetos/Projetos'

function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <Habilidades/>
      <Sobre/>
      <Projetos/>
      <Contatos/>
      <Footer/>
    </div>
  )
}

export default App
