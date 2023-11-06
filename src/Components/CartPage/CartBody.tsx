import Roata from '../../assets/Roata1.svg'
import MainPageFooter from "../MainPage/MainPageFooter";
import ShopPageAds from "./ShopPageAds";
import ShopPageFilter from "./ShopPageFilter";
import ShopPageHeader from "./ShopPageHeader";
// import ShopPageItems from "./ShopPageItems";

import RedOil from '../../assets/ShellEngineOilRed.svg'
import CremOil from '../../assets/ShellEngineOilCrem.svg'
import BlackOil from '../../assets/ShellEngineOilBlack.svg'
import DelImg from '../../assets/CartDelButtonImg.svg'
import { useState } from 'react'
import { Link } from 'react-router-dom';
export default function CartBody({cart, setCart}){
    const [quantity, setQuantity] = useState(1)

    var cartStorage = JSON.parse(localStorage.getItem('cart'))
    console.log(cartStorage)
    var total = 0
    function DelCartItems(ids: number){

        const deleteItemFromCart = cartStorage.filter(product  => product.id !== ids)
        setCart(deleteItemFromCart)
        localStorage.setItem('cart', JSON.stringify(deleteItemFromCart))
        //const index = cartStorage.filter(product  => product.id !== ids)
        //setCart(index)
        //localStorage.setItem('cart', JSON.stringify(index))
        

    }
    

    return(
        <main className="CartBodyContainer">
            <article className="CartBodyLeft">
                <div className="CartBodyLegend">
                    <p className="CartBodyLegendItem">
                        Product
                    </p>
                    <p className="CartBodyLegendItem">
                        Price
                    </p>
                    <p className="CartBodyLegendItem">
                        Quantity
                    </p>
                    <p className="CartBodyLegendItem">
                        Subtotal
                    </p>
                </div>
                {cartStorage.map((product: any) =>{
                    total = total + product.price
                    return (
                        <div className="CartBodyListItems">
                    <img src={product.img} alt={product.alt} className='CartItemImg'/>
                    <div className="CartItemItemTextContainer">
                        <p className="CartItemName">{product.alt}</p>
                        <p className="CartItemPrice">{product.price} €</p>
                        <div className="CartQuantityItemContainer">
                            <button className="NoBdBg" onClick={() => (quantity <= 1)? null : setQuantity(quantity - 1)}>
                                -
                            </button>
                            <p className="CartQuantityItemNr">
                                {quantity}
                            </p>
                            <button className="NoBdBg" onClick={() => setQuantity(quantity + 1)}>
                                +
                            </button>
                        </div>
                        <p className="CartItemTotalPrice">{product.price} €</p>
                        <button className='CartItemDelButton NoBdBg' onClick={() =>DelCartItems(product.id)}><img src={DelImg} alt="Delete Button" className='deleteCartItemImg'/></button>
                    </div>
                </div>
                    )
                })}
            </article>
            <article className="CartBodyRight">
                <h2 className="CartTitle">
                    Cart Totals
                </h2>
                <div className="CartBodyRightContainer">
                    <div className="CartBodyRightItem">
                        <p className="CartBodyRightText">
                            Subtotal
                        </p>
                        <p className="CartBodyRightText">
                            Total
                        </p>
                    </div>
                    <div className="CartBodyRightItem">
                        <p className="CartBodyRightPrice1">
                            {total}€
                        </p>
                        <p className="CartBodyRightPrice2">
                            {total}€
                        </p>
                    </div>
                </div>
                <Link to='/Checkout' className='CartCheckoutButton NoBdBg'>
                    Check Out
                </Link>
            </article>
        </main>
    )
}