
import MainPageBarHeader from "../MainPage/MainPageBarHeader";
import MainPageFooter from "../MainPage/MainPageFooter";
import ShopPageAds from "./ShopPageAds";
import ShopPageFilter from "./ShopPageFilter";
import ShopPageHeader from "./ShopPageHeader";
import ShopPageItems from "./ShopPageItems";


export default function ShopPage() {
    return(
        <>
            <MainPageBarHeader />
            <ShopPageHeader />
            <ShopPageFilter />
            <ShopPageItems />
            <ShopPageAds />
            <MainPageFooter />
        </>
    )
}