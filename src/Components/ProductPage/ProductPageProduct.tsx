import Roata1 from '../../assets/Roata1.svg'
import Roata2 from '../../assets/Roata2.svg'
import Roata3 from '../../assets/Roata3.svg'
import Roata4 from '../../assets/Roata4.svg'


export default function ProductPageProduct() {
    return(
        <div className="ProductPageProductContainer">
            <div className="ProductContainerLeft">
                <div className="ProductImgCarousel">
                    <div className="ProductCarouselItem">
                        <img src={Roata1} alt="Tire image 1" />
                    </div>
                    <div className="ProductCarouselItem">
                        <img src={Roata2} alt="Tire image 2" />
                    </div>
                    <div className="ProductCarouselItem">
                        <img src={Roata3} alt="Tire image 3" />
                    </div>
                    <div className="ProductCarouselItem">
                        <img src={Roata4} alt="Tire image 4(last)" />
                    </div>
                </div>
            </div>
        </div>
    )
}