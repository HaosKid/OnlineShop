import './App.css'

import RedOil from './assets/ShellEngineOilRed.svg'
import CremOil from './assets/ShellEngineOilCrem.svg'
import BlackOil from './assets/ShellEngineOilBlack.svg'

import ContactPage from './Components/ContactPage/ContactPage'
import { Route, Routes } from 'react-router-dom'
import MainPage from './Components/MainPage/MainPage'
import CartPage from './Components/CartPage/CartPage'
import Checkout from './Components/CheckOutPage/Checkout'
import MyAccount from './Components/MyAccount/MyAccount'
import ProductPage from './Components/ProductPage/ProductPage'
import ShopPage from './Components/Shop/ShopPage'
import MainPageBarHeader from './Components/MainPage/MainPageBarHeader'



function App() {
  let ItemList = {
    Item1: {
        imagine:RedOil,
        alt: 'Shell Engile Oil Red Image',
        desc1: "Shell Engile Oil",
        desc2: "Shope: Oil house",
        price: 1,
        other: "",
        id: 1,
        Color: "Red",
        Favorite: 0,
        InCart: 0
    },
    Item2: {
        imagine:CremOil,
        alt: 'Shell Engile Oil Crem Image',
        desc1: "Shell Engile Oil",
        desc2: "Shope: Oil house",
        price: 2,
        other: 'ImageCorrectionLeft',
        id: 2,
        Color: "Crem",
        Favorite: 0,
        InCart: 0
    },
    Item3ShellRedOil: {
        imagine:RedOil,
        alt: 'Shell Engile Oil Red Image',
        desc1: "Shell Engile Oil",
        desc2: "Shope: Oil house",
        price: 3,
        other: '',
        id: 3,
        Color: "Red",
        Favorite: 0,
        InCart: 0
    },
    Item4: {
        imagine: BlackOil,
        alt: 'Shell Engile Oil Black Image',
        desc1: "Shell Engile Oil",
        desc2: "Shope: Oil house",
        price: 4,
        other: '',
        id: 4,
        Color: "Black",
        Favorite: 0,
        InCart: 0
    },
    Item5: {
        imagine:RedOil,
        alt: 'Shell Engile Oil Red Image',
        desc1: "Shell Engile Oil",
        desc2: "Shope: Oil house",
        price: 5,
        other: '',
        id: 5,
        Color: "Red",
        Favorite: 0,
        InCart: 0
    },
    Item6: {
        imagine:CremOil,
        alt: 'Shell Engile Oil CremOil Image',
        desc1: "Shell Engile Oil",
        desc2: "Shope: Oil house",
        price: 6,
        other: '',
        id: 6,
        Color: "Crem",
        Favorite: 0,
        InCart: 0
    },
    Item7: {
        imagine:RedOil,
        alt: 'Shell Engile Oil Red Image',
        desc1: "Shell Engile Oil",
        desc2: "Shope: Oil house",
        price: 7,
        other: '',
        id: 7,
        Color: "Red",
        Favorite: 0,
        InCart: 0
    },
    Item8: {
        imagine:CremOil,
        alt: 'Shell Engile Oil Crem Image',
        desc1: "Shell Engile Oil",
        desc2: "Shope: Oil house",
        price: 8,
        other: '',
        id: 8,
        Color: "Crem",
        Favorite: 0,
        InCart: 0
    },
    Item9: {
      imagine: BlackOil,
      alt: 'Shell Engile Oil Black Image',
      desc1: "Shell Engile Oil",
      desc2: "Shope: Oil house",
      price: 9,
      other: '',
      id: 9,
      Color: "Black",
      Favorite: 0,
      InCart: 0
    },
    Item10: {
        imagine:RedOil,
        alt: 'Shell Engile Oil Red Image',
        desc1: "Shell Engile Oil",
        desc2: "Shope: Oil house",
        price: 10,
        other: '',
        id: 10,
        Color: "Red",
        Favorite: 0,
        InCart: 0
    },
    Item11: {
        imagine:CremOil,
        alt: 'Shell Engile Oil CremOil Image',
        desc1: "Shell Engile Oil",
        desc2: "Shope: Oil house",
        price: 11,
        other: '',
        id: 11,
        Color: "Crem",
        Favorite: 0,
        InCart: 0
    },
    Item12: {
        imagine:RedOil,
        alt: 'Shell Engile Oil Red Image',
        desc1: "Shell Engile Oil",
        desc2: "Shope: Oil house",
        price: 12,
        other: '',
        id: 12,
        Color: "Red",
        Favorite: 0,
        InCart: 1
    },
    Item13: {
        imagine:CremOil,
        alt: 'Shell Engile Oil Crem Image',
        desc1: "Shell Engile Oil",
        desc2: "Shope: Oil house",
        price: 13,
        other: '',
        id: 13,
        Color: "Crem",
        Favorite: 0,
        InCart: 1
    },
}



var Item = []

for (const i in ItemList) {
    const item = ItemList[i]

    Item.push(
        <div className="ShopPageItemContainer">
            <img src={item.imagine} alt={item.alt} className={item.other}/>
            <div className="ShopPageItemDesc">
                <p className="ShopItemDesc">{item.desc1}</p>
                <p className="ShopItemDesc">{item.desc2}</p>
                <p className="ShopItemPrice"><b>Price: {item.price}</b></p>
                <button className='ShopItemAddCartButton' id={ItemList[i].id} onClick={() => ItemList[i].InCart = 1}>Add to cart</button>
            </div>
        </div>
    )
}

  return (
    <>
      <MainPageBarHeader ItemList = {ItemList}/>
      <Routes>
        <Route path='/' element={<MainPage ItemList = {ItemList}/>}/>
        <Route path='/Cart' element={<CartPage />}/>
        <Route path='/Checkout' element={<Checkout />}/>
        <Route path='/Contact' element={<ContactPage />}/>
        <Route path='/Account' element={<MyAccount />}/>
        <Route path='/Product' element={<ProductPage />}/>
        <Route path='/Shop' element={<ShopPage Item = {Item}/>}/>
        <Route path='/Shop/:id' element={<ShopPage Item = {Item}/>}/>
        {/* <Route path='/Blog' element={<BlogPage />}/>
        <Route path='/Favorite' element={<FavoritePage />}/> 
        <Route path='/Return' element={<ReturnPage />}/> 
        */}
      </Routes>
    </>
  )
}

export default App
