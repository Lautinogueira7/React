import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Menu from './components/Menu/Menu'
import ItemListContainer from './components/ItemListContainer'

function Titulo ({titulo, subtitulo}) {


  return (
    <div>
      <h2>{titulo}</h2>
      <h3>{subtitulo}</h3>
    </div>
  ) 
  }

function App() {
  let tituloApp = 'Hola soy titulo de app'
  let subtituloApp = 'Hola soy subtitulo de app'
  let tituloForm = 'Hola soy titulo de form'


return (
  <div>
    <Menu />
    <Titulo titulo='titulo de App' subtitulo='sub de app' />

  <form>
    <Titulo
    titulo={tituloApp}
    subtitulo={subtituloApp}
    />
    <input type="text" placeholder='ingrese nombre' />
    <br />
    <input type="text" placeholder='ingrese apellido' />
  </form>
   
  <section>
    <Titulo
    titulo='titulo de section'
    subtitulo='sub de section'
    />
    <h2>Titulo de section</h2>
    <p>Parrafo de section</p>
    <ItemListContainer greeting={'bienvenido'} />
  </section>
  </div>



)
}


export default App

