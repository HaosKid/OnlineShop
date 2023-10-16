import MainPageBarHeader from "../MainPage/MainPageBarHeader";
import MainPageFooter from "../MainPage/MainPageFooter";
import ShopPageAds from "../Shop/ShopPageAds";
import MyAccountHeader from "./MyAccountHeader";
import MyAccountRegister from "./MyAccountRegister";


export default function MyAccount(){

    return(
        <>
        <MainPageBarHeader />
        <MyAccountHeader />
        <MyAccountRegister />
        <ShopPageAds />
        <MainPageFooter />
        </>
    )
}