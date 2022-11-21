import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Menu from './components/Menu/Menu.jsx'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer'
import Cart from './pages/Cart/Cart'
//import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  console.log('App')

   // llamadas a las api

   const saludo = 'saludando' // estado

   const saludar = () => {
       
   } 

   return (
       //  funciones de la librería
       <BrowserRouter> 
           <Menu  />    
           <Routes>
               <Route path='/' element={<ItemListContainer greeting={saludo} saludar={ saludar } />} />
               <Route path='/categoria/:categoriaId' element={<ItemListContainer greeting={saludo} saludar={ saludar } />} />
               <Route path='/detail/:productId' element={<ItemDetailContainer />} />
               <Route path='/cart'  element={<Cart />}/>
               {/* <Route path='/404Notfound' element={<NotFound404 />} />   */}

               <Route path='*' element={<Navigate to='/' />} />             
           </Routes>
       </BrowserRouter>
   )
}


export default App

