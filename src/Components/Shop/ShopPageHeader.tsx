import Arrow from '../../assets/ArrowRight.svg'

export default function ShopPageHeader(){
    return(
        <div className="ShopPageHeader zeroPosition">
            <h1 className="ShopPageHeaderTitle">
                SHOP
            </h1>
            <p className="ShopPageSubTitle">
                <b>Home </b> <img src={Arrow} alt="" /> Shop
            </p>
        </div>
    )
}