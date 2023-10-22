import phone from '../../assets/phone.svg'
import mail from '../../assets/Mail.svg'

export default function MainPageHeaderContact(){
    return(
        <div className="HeaderContactContainer zeroPosition">
            <div className="HeaderContactItemContainer">
                <div className="HeaderContactItem PhoneItem">
                    <img src={phone} alt="Phone img" />
                    <p className="HeaderContactItemText">
                        Call us <br />
                        +22 222 22 22 222
                    </p>
                </div>
                <div className="HeaderContactItem EmailItem">
                    <img src={mail} alt="Mail Img" />
                    <p className="HeaderContactItemText">
                        Send us mail <br />
                        autoessential@example.com
                    </p>
                </div>
            </div>
            <button className="SellerButton">
                Become A Seller
            </button>
        </div>
    )
}