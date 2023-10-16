import Arrow from '../../assets/ArrowRight.svg'



export default function MyAccountHeader(){
    return(
        <header className="MyAccountHeaderContainer">
            <div className="MyAccountHeaderTitle">
                <h1 className="MyAccountHeader">
                    My Account
                </h1>
                <p className="MyAccountUnderHead">
                    <b>
                        Home 
                    </b>
                    <img src={Arrow} alt="Arrow image" />
                    My account
                </p>
            </div>
        </header>
    )
}