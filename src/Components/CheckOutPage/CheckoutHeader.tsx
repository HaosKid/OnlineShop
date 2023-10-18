import Arrow from '../../assets/ArrowRight.svg'

export default function CheckoutHeader(){

    return (
        <header className="MyAccountHeaderContainer CheckoutBg">
            <div className="MyAccountHeaderTitle">
                <h1 className="MyAccountHeader">
                    My Account
                </h1>
                <p className="MyAccountUnderHead">
                    <b>
                        Home 
                    </b>
                    <img src={Arrow} alt="Arrow image" />
                    Checkout
                </p>
            </div>
        </header>
    )
}