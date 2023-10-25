import logo from '../../assets/logo.svg'
import LilGuy from '../../assets/LilGuy.svg'
import Search from '../../assets/Search.svg'
import Heart from '../../assets/Heart.svg'
import Cart from '../../assets/Cart.svg'
import xSacosa from '../../assets/xSacosa.svg'
import { Link } from 'react-router-dom'
import { useReducer, useEffect, useState } from 'react'

function MainPageBarHeader({Carut, total}){
    // const [ref, setRef] = useReducer(x => x + 1, 0)



    // let Carut: any[] = []
    // let total = 0
    // function merge(){
    //     console.log("merge")
    //     for (const i in ItemList){
    //         function OutCart(){
    //             ItemList[i].InCart = 0
    //             Carut.splice(ItemList[i].id, 1)
    //             setRef()         //I have no idea WHY this is working but if you delete this line the cart is not updating. (╯°□°)╯︵ ┻━┻
    //             console.log('merge')    //I actually need that table. ┬─┬ノ( º _ ºノ) here you go.

    //         }
    //         if (ItemList[i].InCart === 1 && ItemList[i].Added === 0){

    //             total = total + ItemList[i].price
    //             Carut.push(
    //                 <div className="CartDropDownMenuMiddle2">
    //                     <div className="ProductCarouselItem">
    //                         <img src={ItemList[i].imagine} alt={ItemList[i].alt} height={'100px'}/>
    //                     </div>
    //                     <div className="CartDropDownItemDesc">
    //                         <p><b>{ItemList[i].desc1}</b></p>
    //                         <p><input type="number" value={'1'} className='CartItemQuantity'/> x {ItemList[i].price}€</p>
    //                     </div>
    //                     <button className='CartDropDownCheckBox' id={ItemList[i].id} onClick={OutCart}>x</button>
    //                 </div>
    //             )
    //         }
    //     }

    // }
    // merge()
    return(
    <div className="HeaderBar zeroPosition">
        <img src={logo} alt="Auto Essentials Logo" className='AELogo'/>

        <div className="LinkBar">
            <Link to="/" className='LinkBarItem'>Home</Link>
            <Link to="/Shop" className='LinkBarItem'>Shop</Link>
            <Link to="/Contact" className='LinkBarItem'>Contact</Link>
        </div>
        <div className="IconLinkBar">
            <Link to="/Account"><img src={LilGuy} alt="Profile" className='px20'/></Link>
            <div className="searchContainer">
                <input type="text" className='SearchText' placeholder='Type to search'/>
                <img src={Search} alt="Search" />
            </div>
            <Link to="/Favorite"><img src={Heart} alt="Favorites"  className='px20' /></Link>
            <div className="CartDropDownMenuContainer">
                <button className='CartDropDownMenuButton'  ><img src={Cart} alt="Search"  className='px20'/></button>
                <div className="CartDropDownMenu">
                    <div className="DropDownMenuTop">
                        <h2 className='DropDownMenuTitle'>
                            Shopping Cart
                        </h2>
                        <img src={xSacosa} alt="Bag Image" className="DropDownMenuSacosaImg" />
                        <div className="hr90"></div>
                    </div>
                    <div className="CartDropDownMenuMiddle">
                        {Carut}
                    </div>
                    <div className="CartDropDownMenuDown">
                        <div className="CartDownSubTotal">
                            <p>Subtotal</p>
                            <p>{total}€</p>

                        </div>
                        <div className="hr90 hr100"></div>
                        <div className="CartDownButtons">
                            <button className="CartButtonDown">View Cart</button>
                            <button className="CartButtonDown">Checkout</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
    )
}

export default MainPageBarHeader