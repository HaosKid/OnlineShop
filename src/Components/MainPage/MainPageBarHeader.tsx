import logo from '../../assets/logo.svg'
import LilGuy from '../../assets/LilGuy.svg'
import Search from '../../assets/Search.svg'
import Heart from '../../assets/Heart.svg'
import Cart from '../../assets/Cart.svg'
import xSacosa from '../../assets/xSacosa.svg'
import { Link } from 'react-router-dom'
import { products } from '../Shop/ShopPage'
import { useEffect, useState } from 'react'


function MainPageBarHeader({cart, setCart}){
    

    let total = 0

    function DelCartItem(ids){

        const index = cart.filter(product => product.id !== ids)
        setCart(index)
        localStorage.setItem('cart', JSON.stringify(index))

    }

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
                        {cart? cart.map((Product : any) => {
                            total = total + Product.price
                            return <>
                            <div  className="CartDropDownMenuMiddle2">
                                <div className="ProductCarouselItem">
                                    <img src={Product.imagine} alt={Product.alt} height={'100px'}/>
                                </div>
                                <div className="CartDropDownItemDesc">
                                    <p><b>{Product.desc1}</b></p>
                                    <p><input type="number" placeholder={'1'} className='CartItemQuantity'/> x {Product.price}€</p>
                                </div>
                                <button className='CartDropDownCheckBox' onClick={() =>DelCartItem(Product.id)}>x</button>
                            </div>
                            </>
                        }): null}
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