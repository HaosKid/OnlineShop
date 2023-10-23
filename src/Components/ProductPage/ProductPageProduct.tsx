import Roata1 from '../../assets/Roata1.svg'
import Roata2 from '../../assets/Roata2.svg'
import Roata3 from '../../assets/Roata3.svg'
import Roata4 from '../../assets/Roata4.svg'
import {useState} from 'react'

export default function ProductPageProduct() {
    const [cout, setcout] = useState(1)
    return(
        <div className="ProductPageProductContainer">
            <div className="ProductContainerLeft">
                <div className="ProductImgCarousel">
                    <div className="ProductCarouselItem">
                        <img src={Roata1} alt="Tire image 1" className='ProductCarouselImg'/>
                    </div>
                    <div className="ProductCarouselItem">
                        <img src={Roata2} alt="Tire image 2"  className='ProductCarouselImg'/>
                    </div>
                    <div className="ProductCarouselItem">
                        <img src={Roata3} alt="Tire image 3"  className='ProductCarouselImg'/>
                    </div>
                    <div className="ProductCarouselItem">
                        <img src={Roata4} alt="Tire image 4(last)"  className='ProductCarouselImg'/>
                    </div>
                </div>
                <div className="ProductImgShow">
                <img src={Roata1} alt="Tire image 1" className='ProductPageMainImg' height={'350px'}/>
                </div>
            </div>
            <div className="ProductContainerRight">
                <h1 className='ProductHead'>MIRAGE MR-AT172 285/65</h1>
                <p className='productPrice'>Price: 250€</p>
                <div className="ProductLeftUnderHead">
                    <p><b>Shope: Tire House</b></p>
                    <div className="ProductLeftHr"></div>
                    <p className='ProductLeftRevCount'>5 Customer Review</p>
                </div>
                <p className='ProductDescLeft'>The MIRAGE MR-AT172 285/65 R17 is a tyre developed with an <br />
                    advanced tread pattern and compound which offer a long tread life. <br />
                    It employs a variable pitch tread design. This variable pitch design <br />
                    significantly reduces noise and provides a quiet ride. Its optimized <br />
                    profile provides even wear and classic style.</p>
                <p className="ProductSize">Size</p>
                <div className='ProductSizeButtonContainer'>
                    <button className="ProductSizeButton Sel">17</button>
                    <button className="ProductSizeButton">21</button>
                    <button className="ProductSizeButton">24</button>
                </div>
                <div className="ProductColorContainer">
                    <p className="ProductSize">Color</p>
                    <div className="ProductColor"></div>  
                </div>
                <div className="ProductCountAddCart">
                    <div className="ProductCountContainer">
                        <button onClick={() => (cout > 1) ? (setcout(cout - 1)) : null}>-</button>
                        <p>{cout}</p>
                        <button onClick={() => setcout(cout + 1)}>+</button>
                    </div>
                    <button className='AddToCartButton'>Add To Cart</button>
                </div>
                <div className="margin40"></div>
                <div className="ProductOtherDetails">
                    <p className="ProductOtherDetailsItem">SKU&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;SS001</p>
                    <p className="ProductOtherDetailsItem">Category&nbsp;:&nbsp;Tire</p>
                    <p className="ProductOtherDetailsItem">Tags&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;Tire, rims, Shop</p>
                    <p className="ProductOtherDetailsItem">Share&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: </p>
                </div>
            </div>
        </div>
    )
}