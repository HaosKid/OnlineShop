import MainPageBarHeader from "../MainPage/MainPageBarHeader";
import MainPageFooter from "../MainPage/MainPageFooter";
import ShopPageAds from "../Shop/ShopPageAds";
import ContactBody from "./ContactBody";
import ContactHeader from "./ContactHeader";



export default function ContactPage() {
    return(
        <>
        <MainPageBarHeader />
        <ContactHeader />
        <ContactBody />
        <ShopPageAds />
        <MainPageFooter />
        </>
    )
}