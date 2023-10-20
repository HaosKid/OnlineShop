import logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom'
export default function MainPageFooter(){
    return(
        <footer>
            <div className="UpperFooterContainer">
                <img src={logo} alt="Logo image" height={'100px'}/>
                <div className="FooterLinksContainer">
                    <div className="FooterLink">
                        <p className="FooterLinkTitle">
                            Links
                        </p>
                        <Link to="/Home" className="FooterLinkItem">Home</Link>
                        <Link to="/Shop" className="FooterLinkItem">Shop</Link>
                        <Link to="/Contact" className="FooterLinkItem">Contact</Link>
                    </div>
                    <div className="FooterLink">
                        <p className="FooterLinkTitle">
                            Help
                        </p>
                        <Link to="/Checkout" className="FooterLinkItem">Payment Options</Link>
                        <Link to="/Return" className="FooterLinkItem">Returns</Link>
                        <Link to="/Policies" className="FooterLinkItem">Privacy Policies</Link>

                    </div>
                    <div className="FooterLink">
                        <p className="FooterLinkTitle">
                            NewsLetter
                        </p>
                        <form action="" method="get" className='FooterInputContainer'>
                            <input type="email" name="email" id="email" className = "InputEmail" placeholder='Enter Your Email Address'/>
                            <button type="submit" className='FooterButton'><b>Subscribe</b></button>
                        </form>
                        

                    </div>
                </div>
            </div>
            <div className="FooterHr"></div>
            <p><b>2023-24 autoessentials. All rights reverved</b></p>
        </footer>
    )
}