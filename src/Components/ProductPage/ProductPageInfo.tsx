import Roata1 from '../../assets/Roata1.svg'
import Roata3 from '../../assets/Roata3.svg'

export default function ProductPageInfo(){
    return(
        
        <div className="ProductPageInfoContainer">
            <div className="ProductPageInfoHr"></div>

            <div className="ProductPageInfoNavBar">
                <button className="InfoNavBarButton">Description</button>
                <button className="InfoNavBarButton">Additional Information</button>
                <button className="InfoNavBarButton">Reviews 5</button>
            </div>
            <p className="ProductPageInfoText">
            The Mirage AT MR-172 265/65 R17 is a multipurpose all-terrain light truck tyre. It has been engineered to deliver high mileage. <br />
            Mirage MR AT-172 Performs best in on road and off road driving conditions. The Mirage AT MR-172 265/65 R17 has an aggressive <br />
            tread design. Its aggressive tread delivers excellent wet and dry traction. It also offers even tread wear hence longer tread <br />
            life is achieved.stable tread block design provides better traction and improves cornering and braking in all weather conditions. <br />
            Mirage AT MR-172 265/65 R17 Lateral sipes also help in improving mud snow and wet qualities.
            </p>
            <div className="ProductPageInfoImg">
                <img src={Roata3} alt="Tire Image" className='ProductPageInfoImgItem' height={'400px'}/>
                <img src={Roata1} alt="Tire Image" className='ProductPageInfoImgItem' height={'400px'}/>
            </div>
            <div className="ProductPageInfoHr"></div>
        </div>

    )
}