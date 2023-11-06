import { products } from "../Shop/ShopPage"


export default function CheckoutBilling() {
    var cartStorage = JSON.parse(localStorage.getItem('cart'))
    return(
        <main className="CheckoutBillingContainer">
            <section className="Billing">
                <h1 className="BillingHead">
                    Billing details
                </h1>
                <div className="BillingNameContainer">
                    <div className="BillingJusttName">
                        <p>First Name</p>
                        <input type="text" className="BilltingTextArea"/>
                    </div>
                    <div className="BillingJustName">
                        <p>Last Name</p>
                        <input type="text" className="BilltingTextArea"/>
                    </div>
                </div>
                <div className="BillingJustName">
                    <p>Company Name {"(Optional)"}</p>
                    <input type="text" className="BilltingTextArea w10"/>
                </div>
                <div className="BillingJustName">
                    <p>Country / Region</p>
                    <input type="text" className="BilltingTextArea w10"/>
                </div>
                <div className="BillingJustName">
                    <p>Street address </p>
                    <input type="text" className="BilltingTextArea w10"/>
                </div>
                <div className="BillingJustName">
                    <p>Town / City</p>
                    <input type="text" className="BilltingTextArea w10"/>
                </div>
                <div className="BillingJustName">
                    <p>Province</p>
                    <input type="text" className="BilltingTextArea w10"/>
                </div>
                <div className="BillingJustName">
                    <p>ZIP code</p>
                    <input type="number" className="BilltingTextArea w10"/>
                </div>
                <div className="BillingJustName">
                    <p>Phone</p>
                    <input type="number" className="BilltingTextArea w10"/>
                </div>
                <div className="BillingJustName">
                    <p>Email address</p>
                    <input type="email" className="BilltingTextArea w10"/>
                </div>
                <div className="BillingJustName p10">
                    <input type="text" className="BilltingTextArea w10" placeholder="Additional information"/>
                </div>

            </section>
            <section className="BillingRight">
                <article className="BillingRightUp">
                    <div className="BillingProductDetails">
                        <h2 className="BillingProductDetailsTitle">
                            Product
                        </h2>
                        {cartStorage.map((product: any) =>{
                            return(
                                <p className="BillingProductDetailsName">
                                    {product.alt} <b>x 1</b>
                                </p>
                            )
                        })}
                        
                        <p className="BillingProductDetailsTotal">Subtotal</p>
                        <p className="BillingProductDetailsTotal">Total</p>
                    </div>
                    <div className="BillingProductDetails TextRight">
                        <h2 className="BillingProductDetailsTitle">
                            Subtotal
                        </h2>
                        <p className="BillingProductDetailsPrice">
                            250€
                        </p>
                        <p className="BillingProductDetailsPrice">250€</p>
                        <p className="BillingProductDetailsLastPrice">250€</p>
                    </div>
                </article>
                <div className="hr100">

                </div>
                <div className="BillOptionOne">
                    <div className="BillOption">
                        <div className="bullet">

                        </div>
                        <b>Direct Bank Transfer</b>
                    </div>
                    <div className="BillOptionDesc">
                        <p>Make your payment directly into our bank account. Please use <br />
                            your Order ID as the payment reference. Your order will not be <br />
                            shipped until the funds have cleared in our account.</p>
                    </div>
                </div>
                <div className="BillOtherOption">
                    <div className="BillOption Grey">
                        <div className="bullet NoBg">

                        </div>
                        <b>Direct Bank Transfer</b>
                    </div>
                </div>
                <div className="BillOtherOption">
                    <div className="BillOption Grey">
                        <div className="bullet NoBg">

                        </div>
                        <b>Cash On Delivery</b>
                    </div>
                </div>
                <p className="LineSpace25">Your personal data will be used to support your experience <br />
                throughout this website, to manage access to your account, and <br />
                for other purposes described in our <b>privacy policy.</b></p>
                <div className="PlaceOrderContainer">
                   <button className="PlaceOrderButton">
                        Place order
                    </button> 
                </div>
                
            </section>
        </main>
    )
}