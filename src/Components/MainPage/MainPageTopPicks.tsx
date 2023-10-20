import BrakeSystem from '../../assets/BrakeSystem.svg'
import Tire from '../../assets/Tire.svg'
import AirFilter from '../../assets/AirFilter.svg'
import CarHeadlights from '../../assets/CarHeadlights.svg'
import { Link } from 'react-router-dom'
export default function MainPageTopPicks(){
    return(
        <article className="TopPicksContainer zeroPosition">
            <div className="TopPicksTitle">
                <h2 className="TopPicksHead">
                    Top Picks For You
                </h2>
                <p className="TopPicksUnderHead">
                Find a bright ideal to suit your taste with our great selection of products.
                </p>
            </div>
            <div className="TopPicksItemContainer">
                {/* item 1 */}
                <div className="TopPicksItem">
                    <img src={BrakeSystem} alt="Brake System image" height={'200px'}/>
                    <p className="TopPicksItemDesc">
                        Brake system <br />
                        Part Number: 8-97100-344-2 <br />
                        Shope: Al Fareed
                    </p>
                    <p className="TopPicksItemPrice">
                        Price: 280€
                    </p>
                </div>
                {/* item 2 */}
                <div className="TopPicksItem">
                    <img src={Tire} alt="Tire image"  height={'200px'}/>
                    <p className="TopPicksItemDesc">
                        Branded Tires <br />
                        Part Number: 8-97100-344-2 <br />
                        Shope: Al Fareed
                    </p>
                    <p className="TopPicksItemPrice">
                        Price: 280€
                    </p>
                </div>
                {/* item 3 */}
                <div className="TopPicksItem">
                    <img src={AirFilter} alt="Air Filter image"  height={'200px'}/>
                    <p className="TopPicksItemDesc">
                    Air Filter system <br />
                    Part Number: 8-97100-344-2 <br />
                    Shope: Vehicle Accessories
                    </p>
                    <p className="TopPicksItemPrice">
                        Price: 280€
                    </p>
                </div>
                {/* item 4 */}
                <div className="TopPicksItem">
                    <img src={CarHeadlights} alt="Car Headlights image"  height={'200px'}/>
                    <p className="TopPicksItemDesc">
                    Car headlights <br />
                    Part Number: 8-97100-344-2 <br />
                    Shope: Light House
                    </p>
                    <p className="TopPicksItemPrice">
                        Price: 280€
                    </p>
                </div>
            </div>
            <div className="TopPicksMore">
                <Link to="/Shop" className='ViewMore'>
                    View More
                </Link>
                <div className="hr"></div>
            </div>
        </article>
    )
}