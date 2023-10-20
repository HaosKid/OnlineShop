import logo from '../../assets/logo.svg'
import LilGuy from '../../assets/LilGuy.svg'
import Search from '../../assets/Search.svg'
import Heart from '../../assets/Heart.svg'
import Cart from '../../assets/Cart.svg'
import xSacosa from '../../assets/xSacosa.svg'
import tire from '../../assets/Tire.svg'
import { Link } from 'react-router-dom'

function MainPageBarHeader(){
    let Carut = {
        item1: {
          id: 1,
          img: tire,
          name: "MIRAGE MR-AT172 285/65",
          price: 250,
          quantity: 1
        },

    }
    let total = 0
    for (let i in Carut) {
 
        total += Carut[i].price
    }
    function DropItem(){
        delete Carut.item1
    }
    return(
    <div className="HeaderBar zeroPosition">
        <img src={logo} alt="Auto Essentials Logo" />

        <div className="LinkBar">
            <Link to="/" className='LinkBarItem'>Home</Link>
            <Link to="/Shop" className='LinkBarItem'>Shop</Link>
            <Link to="/Contact" className='LinkBarItem'>Contact</Link>
        </div>
        <div className="IconLinkBar">
            <a href="#"><img src={LilGuy} alt="Profile" /></a>
            <div className="searchContainer">
                <input type="text" className='SearchText' placeholder='Type to search'/>
                <img src={Search} alt="Search" />
            </div>
            <a href="#"><img src={Heart} alt="Favorites" /></a>
            <div className="CartDropDownMenuContainer">
                <button className='CartDropDownMenuButton'><img src={Cart} alt="Search" /></button>
                <div className="CartDropDownMenu">
                    <div className="DropDownMenuTop">
                        <h2 className='DropDownMenuTitle'>
                            Shopping Cart
                        </h2>
                        <img src={xSacosa} alt="Bag Image" className="DropDownMenuSacosaImg" />
                        <div className="hr90"></div>
                    </div>
                    <div className="CartDropDownMenuMiddle">
                        <div className="ProductCarouselItem">
                            <img src={Carut.item1.img} alt="Tire img" height={'100px'}/>
                        </div>
                        <div className="CartDropDownItemDesc">
                            <p><b>MIRAGE MR-AT172 285/65</b></p>
                            <p>{Carut.item1.quantity} x {Carut.item1.price}€</p>
                        </div>
                        <button className='CartDropDownCheckBox' onClick={DropItem}>x</button>
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