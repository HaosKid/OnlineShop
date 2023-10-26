
// import MainPageBarHeader from "../MainPage/MainPageBarHeader";
import MainPageFooter from "../MainPage/MainPageFooter";
import ShopPageAds from "./ShopPageAds";
import ShopPageFilter from "./ShopPageFilter";
import ShopPageHeader from "./ShopPageHeader";
// import ShopPageItems from "./ShopPageItems";

import RedOil from '../../assets/ShellEngineOilRed.svg'
import CremOil from '../../assets/ShellEngineOilCrem.svg'
import BlackOil from '../../assets/ShellEngineOilBlack.svg'
import { useEffect, useState } from "react";




export const products:  any = [
{
        imagine:RedOil,
        alt: 'Shell Engile Oil Red Image',
        desc1: "Shell Engile Oil",
        desc2: "Shope: Oil house",
        price: 1,
        other: "",
        id: 1,
        Color: "Red",
        Favorite: 0,
        InCart: 0,
        Added: 0
    },
{
        imagine:CremOil,
        alt: 'Shell Engile Oil Crem Image',
        desc1: "Shell Engile Oil",
        desc2: "Shope: Oil house",
        price: 2,
        other: 'ImageCorrectionLeft',
        id: 2,
        Color: "Crem",
        Favorite: 0,
        InCart: 0,
        Added: 0
    },
 {
        imagine:RedOil,
        alt: 'Shell Engile Oil Red Image',
        desc1: "Shell Engile Oil",
        desc2: "Shope: Oil house",
        price: 3,
        other: '',
        id: 3,
        Color: "Red",
        Favorite: 0,
        InCart: 0,
        Added: 0
    },
{
        imagine: BlackOil,
        alt: 'Shell Engile Oil Black Image',
        desc1: "Shell Engile Oil",
        desc2: "Shope: Oil house",
        price: 4,
        other: '',
        id: 4,
        Color: "Black",
        Favorite: 0,
        InCart: 0,
        Added: 0
    },
{
        imagine:RedOil,
        alt: 'Shell Engile Oil Red Image',
        desc1: "Shell Engile Oil",
        desc2: "Shope: Oil house",
        price: 5,
        other: '',
        id: 5,
        Color: "Red",
        Favorite: 0,
        InCart: 0,
        Added: 0
    },
{
        imagine:CremOil,
        alt: 'Shell Engile Oil CremOil Image',
        desc1: "Shell Engile Oil",
        desc2: "Shope: Oil house",
        price: 6,
        other: '',
        id: 6,
        Color: "Crem",
        Favorite: 0,
        InCart: 0,
        Added: 0
    },
{
        imagine:RedOil,
        alt: 'Shell Engile Oil Red Image',
        desc1: "Shell Engile Oil",
        desc2: "Shope: Oil house",
        price: 7,
        other: '',
        id: 7,
        Color: "Red",
        Favorite: 0,
        InCart: 1,
        Added: 0
    },
{
        imagine:CremOil,
        alt: 'Shell Engile Oil Crem Image',
        desc1: "Shell Engile Oil",
        desc2: "Shope: Oil house",
        price: 8,
        other: '',
        id: 8,
        Color: "Crem",
        Favorite: 0,
        InCart: 0,
        Added: 0
    },
{
      imagine: BlackOil,
      alt: 'Shell Engile Oil Black Image',
      desc1: "Shell Engile Oil",
      desc2: "Shope: Oil house",
      price: 9,
      other: '',
      id: 9,
      Color: "Black",
      Favorite: 0,
      InCart: 1,
      Added: 0
    },
 {
        imagine:RedOil,
        alt: 'Shell Engile Oil Red Image',
        desc1: "Shell Engile Oil",
        desc2: "Shope: Oil house",
        price: 10,
        other: '',
        id: 10,
        Color: "Red",
        Favorite: 0,
        InCart: 0,
        Added: 0
    },
 {
        imagine:CremOil,
        alt: 'Shell Engile Oil CremOil Image',
        desc1: "Shell Engile Oil",
        desc2: "Shope: Oil house",
        price: 11,
        other: '',
        id: 11,
        Color: "Crem",
        Favorite: 0,
        InCart: 0,
        Added: 0
    },
 {
        imagine:RedOil,
        alt: 'Shell Engile Oil Red Image',
        desc1: "Shell Engile Oil",
        desc2: "Shope: Oil house",
        price: 12,
        other: '',
        id: 12,
        Color: "Red",
        Favorite: 0,
        InCart: 0,
        Added: 0
    },
 {
        imagine:CremOil,
        alt: 'Shell Engile Oil Crem Image',
        desc1: "Shell Engile Oil",
        desc2: "Shope: Oil house",
        price: 13,
        other: '',
        id: 13,
        Color: "Crem",
        Favorite: 0,
        InCart: 0,
        Added: 0
    },
]


export default function ShopPage({setProductsInLocalHost, addToCart}) {


    return(
        <>

            <ShopPageHeader />
            <ShopPageFilter />
            <div className="shop">
                {products.map((product: any) => {
                    return <>
                     <div className="ShopPageItemContainer">
                        <img src={product.imagine} alt={product.alt} className={product.other}/>
                            <div className="ShopPageItemDesc">
                                <p className="ShopItemDesc">{product.desc1}</p>
                                <p className="ShopItemDesc">{product.desc2}</p>
                                <p className="ShopItemPrice"><b>Price: {product.price}</b></p>
                                <button className='ShopItemAddCartButton' onClick={(e: any)=> addToCart(product.id)}>Add to cart</button>
                            </div>
                        </div>
                    </>
                })}
            </div>
            {/* <ShopPageItems Item = {Item}/> */}
            <ShopPageAds />
            <MainPageFooter />
        </>
    )
}