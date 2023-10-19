import MainPageBarHeader from "../MainPage/MainPageBarHeader";
import MainPageFooter from "../MainPage/MainPageFooter";
import ShopPageAds from "../Shop/ShopPageAds";
import CartBody from "./CartBody";
import CartHeader from "./CartHeader";



export default function CartPage(){
    return(
        <>
        <MainPageBarHeader />
        <CartHeader />
        <CartBody />
        <ShopPageAds />
        <MainPageFooter />
        </>
    )
}