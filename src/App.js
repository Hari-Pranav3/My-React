import React from 'react'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Login from './Login'
import Signup from './Signup'
import Home from './Home'
import Cart from './Cart'
import Dashboard from './Dashboard'
import ProductList from './ProductList'
import Calculator from './Calculator'
import Car from './Car'
import Update from './Update'
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path= '/loginpage' element={<Login/>}/>
          <Route path='/' element={<Calculator/>}/>
          <Route path='/carpage' element={<Car/>}/>
          <Route path='/cartpage' element={<Cart/>}/>
          <Route path='/dashboard' element={<Update/>}/>
          <Route path='/productlist' element={<ProductList/>}/>
        </Routes>
      </Router>
    </div>
  )
}
export default App
