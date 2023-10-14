import MainPageBarHeader from "../MainPage/MainPageBarHeader";
import ProductPagePathBar from "./ProductPagePathBar";
import ProductPageProduct from "./ProductPageProduct";




export default function ProductPage(){
    return(
        <>
            <MainPageBarHeader />
            <ProductPagePathBar />
            <ProductPageProduct />
        </>
    )
}