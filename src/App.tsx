import './App.css'
import ContactPage from './Components/ContactPage/ContactPage'
import { Route, Routes } from 'react-router-dom'
import MainPage from './Components/MainPage/MainPage'
import CartPage from './Components/CartPage/CartPage'
import Checkout from './Components/CheckOutPage/Checkout'
import MyAccount from './Components/MyAccount/MyAccount'
import ProductPage from './Components/ProductPage/ProductPage'
import ShopPage from './Components/Shop/ShopPage'




function App() {


  return (
    <>
      
      <Routes>
        <Route path='/' element={<MainPage />}/>
        <Route path='/Cart' element={<CartPage />}/>
        <Route path='/Checkout' element={<Checkout />}/>
        <Route path='/Contact' element={<ContactPage />}/>
        <Route path='/Account' element={<MyAccount />}/>
        <Route path='/Product' element={<ProductPage />}/>
        <Route path='/Shop' element={<ShopPage />}/>
      </Routes>
    </>
  )
}

export default App
