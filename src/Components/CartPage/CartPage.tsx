import MainPageBarHeader from "../MainPage/MainPageBarHeader";
import MainPageFooter from "../MainPage/MainPageFooter";
import ShopPageAds from "../Shop/ShopPageAds";
import CartBody from "./CartBody";
import CartHeader from "./CartHeader";



export default function CartPage(){
    return(
        <>
        
        <CartHeader />
        <CartBody />
        <ShopPageAds />
        <MainPageFooter />
        </>
    )
}