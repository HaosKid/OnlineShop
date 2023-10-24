import MainPageBarHeader from "../MainPage/MainPageBarHeader";
import MainPageFooter from "../MainPage/MainPageFooter";
import ProductPageInfo from "./ProductPageInfo";
import ProductPagePathBar from "./ProductPagePathBar";
import ProductPageProduct from "./ProductPageProduct";




export default function ProductPage(){
    return(
        <>
            
            <ProductPagePathBar />
            <ProductPageProduct />
            <ProductPageInfo />
            <MainPageFooter />
        </>
    )
}