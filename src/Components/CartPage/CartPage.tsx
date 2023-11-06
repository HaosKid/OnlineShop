import MainPageBarHeader from "../MainPage/MainPageBarHeader";
import MainPageFooter from "../MainPage/MainPageFooter";
import ShopPageAds from "../Shop/ShopPageAds";
import CartBody from "./CartBody";
import CartHeader from "./CartHeader";



export default function CartPage({cart, setCart}){
    return(
        <>
        
        <CartHeader />
        <CartBody cart = {cart} setCart={setCart}/>
        <ShopPageAds />
        <MainPageFooter />
        </>
    )
}