import Roata from '../../assets/Roata1.svg'
import DelImg from '../../assets/CartDelButtonImg.svg'
import { useState } from 'react'
export default function CartBody(){
    const [quantity, setQuantity] = useState(1)
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
                <div className="CartBodyListItems">
                    <img src={Roata} alt="Tire image" className='CartItemImg'/>
                    <div className="CartItemItemTextContainer">
                        <p className="CartItemName">MIRAGE MR-AT172 285/65</p>
                        <p className="CartItemPrice">250€</p>
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
                        <p className="CartItemTotalPrice">250€</p>
                        <button className='CartItemDelButton NoBdBg'><img src={DelImg} alt="Delete Button" /></button>
                    </div>
                </div>
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
                            250€
                        </p>
                        <p className="CartBodyRightPrice2">
                            250€
                        </p>
                    </div>
                </div>
                <button className='CartCheckoutButton NoBdBg'>
                    Check Out
                </button>
            </article>
        </main>
    )
}