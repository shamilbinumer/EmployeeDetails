
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Register from './Components/Register/Register'
import Edit from './Components/Edit/Edit'
import View from './Components/View/View'
function App() {
 

  return (
    <>
   
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' Component={Home}/>
          <Route path='/register' Component={Register}/>
          <Route path='/edit/:id' Component={Edit}/>
          <Route path='/view/:id' Component={View}/>
        </Routes>
      </BrowserRouter>
       
    </>
  )
}

export default App
