import Arrow from '../../assets/ArrowRight.svg'

export default function ContactHeader(){
    return(
        <div className="ShopPageHeader zeroPosition">
            <h1 className="ShopPageHeaderTitle">
                SHOP
            </h1>
            <p className="ShopPageSubTitle">
                <b>Home </b> <img src={Arrow} alt="" /> Contact
            </p>
        </div>
    )
}