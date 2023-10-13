import logo from '../../assets/logo.svg'
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
                        <a href="#" className="FooterLinkItem">Home</a>
                        <a href="#" className="FooterLinkItem">Shop</a>
                        <a href="#" className="FooterLinkItem">About</a>
                        <a href="#" className="FooterLinkItem">Contact</a>
                    </div>
                    <div className="FooterLink">
                        <p className="FooterLinkTitle">
                            Help
                        </p>
                        <a href="#" className="FooterLinkItem">Payment Options</a>
                        <a href="#" className="FooterLinkItem">Returns</a>
                        <a href="#" className="FooterLinkItem">Privacy Policies</a>

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