
import MainPageBarHeader from "../MainPage/MainPageBarHeader";
import MainPageFooter from "../MainPage/MainPageFooter";
import ShopPageAds from "./ShopPageAds";
import ShopPageFilter from "./ShopPageFilter";
import ShopPageHeader from "./ShopPageHeader";
import ShopPageItems from "./ShopPageItems";


export default function ShopPage(Item) {

    return(
        <>
            
            <ShopPageHeader />
            <ShopPageFilter />
            <ShopPageItems Item = {Item}/>
            <ShopPageAds />
            <MainPageFooter />
        </>
    )
}