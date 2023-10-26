import './App.css'

import RedOil from './assets/ShellEngineOilRed.svg'
import CremOil from './assets/ShellEngineOilCrem.svg'
import BlackOil from './assets/ShellEngineOilBlack.svg'
import {useEffect, useReducer, useState} from 'react'
import ContactPage from './Components/ContactPage/ContactPage'
import { Route, Routes } from 'react-router-dom'
import MainPage from './Components/MainPage/MainPage'
import CartPage from './Components/CartPage/CartPage'
import Checkout from './Components/CheckOutPage/Checkout'
import MyAccount from './Components/MyAccount/MyAccount'
import ProductPage from './Components/ProductPage/ProductPage'
import ShopPage from './Components/Shop/ShopPage'
import MainPageBarHeader from './Components/MainPage/MainPageBarHeader'
import { products } from './Components/Shop/ShopPage'


function App() {
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart") as string))


    const setProductsInLocalHost = (productId: number, qty: number)=> {

        const carut = JSON.parse(localStorage.getItem("cart") as string)
        if(productId) {
            if(!carut) {
                localStorage.setItem('cart', JSON.stringify([products[(productId - 1)]]));
                setCart(localStorage.setItem('cart', JSON.stringify([products[(productId - 1)]])))
            }
            setCart(cart.concat(products[(productId - 1)]))

            console.log('new cart', productId);
            localStorage.setItem('cart', JSON.stringify(cart));
        } else {return}
    }

    function addToCart(id: string) {
        console.log("Add to cart ", id);
        setProductsInLocalHost(id, 1)
    }





  return (
    <>
      <MainPageBarHeader cart = {cart} setCart={setCart}/>
      <Routes>
        <Route path='/' element={<MainPage  />}/>
        <Route path='/Cart' element={<CartPage />}/>
        <Route path='/Checkout' element={<Checkout />}/>
        <Route path='/Contact' element={<ContactPage />}/>
        <Route path='/Account' element={<MyAccount />}/>
        <Route path='/Product' element={<ProductPage />}/>
        <Route path='/Shop' element={<ShopPage setProductsInLocalHost = {setProductsInLocalHost} addToCart = {addToCart}  />}/>
        <Route path='/Shop/:id' element={<ShopPage/>}/>
        {/* <Route path='/Blog' element={<BlogPage />}/>
        <Route path='/Favorite' element={<FavoritePage />}/> 
        <Route path='/Return' element={<ReturnPage />}/> 
        */}
      </Routes>
    </>
  )
}

export default App
