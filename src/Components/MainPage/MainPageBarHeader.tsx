import logo from '../../assets/logo.svg'
import LilGuy from '../../assets/LilGuy.svg'
import Search from '../../assets/Search.svg'
import Heart from '../../assets/Heart.svg'
import Cart from '../../assets/Cart.svg'




function MainPageBarHeader(){
    return(
    <div className="HeaderBar zeroPosition">
        <img src={logo} alt="Auto Essentials Logo" />

        <div className="LinkBar">
            <a href="#" className='LinkBarItem'>Home</a>
            <a href="#" className='LinkBarItem'>Shop</a>
            <a href="#" className='LinkBarItem'>About</a>
            <a href="#" className='LinkBarItem'>Contact</a>
            <a href="#" className='LinkBarItem'>Tools</a>
        </div>
        <div className="IconLinkBar">
            <a href="#"><img src={LilGuy} alt="Profile" /></a>
            <a href="#"><img src={Search} alt="Search" /></a>
            <a href="#"><img src={Heart} alt="Favorites" /></a>
            <a href="#"><img src={Cart} alt="My Cart" /></a>
        </div>
    </div>
    )
}

export default MainPageBarHeader