import Arrow from '../../assets/ArrowRight.svg'



export default function CartHeader(){
    return(
        <header className="MyAccountHeaderContainer CartPageBg">
            <div className="MyAccountHeaderTitle">
                <h1 className="MyAccountHeader">
                    My Account
                </h1>
                <p className="MyAccountUnderHead">
                    <b>
                        Home 
                    </b>
                    <img src={Arrow} alt="Arrow image" />
                    Cart
                </p>
            </div>
        </header>
    )
}