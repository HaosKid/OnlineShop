import MainPageBarHeader from "../MainPage/MainPageBarHeader";
import MainPageFooter from "../MainPage/MainPageFooter";
import ShopPageAds from "../Shop/ShopPageAds";
import CheckoutBilling from "./CheckoutBilling";
import CheckoutHeader from "./CheckoutHeader";



export default function Checkout() {

    return(
        <>
        <MainPageBarHeader />
        <CheckoutHeader />
        <CheckoutBilling />
        <ShopPageAds />
        <MainPageFooter />
        </>
    )
}