import lubricant from "../../assets/Lubricant.svg"
import SpareParts from "../../assets/SpareParts.svg"
import { Link } from "react-router-dom"

export default function MainPageHighlight(){
    return (
        <article className="MainPageHighlightContainer zeroPosition">
            <div className="highlightItem">
                <img src={lubricant} alt="Car Lubricant Img" />
                <h2 className="ItemName">
                    Lubricant
                </h2>
                <div className="highlightItemDown">
                <Link to="/Shop">View More</Link>
                <div className="hr"></div>
                </div>
            </div>
            <div className="highlightItem">
                <img src={SpareParts} alt="Spare Parts Img" />
                <h2 className="ItemName">
                    Spare Parts
                </h2>
                <div className="highlightItemDown">
                <Link to="/Shop">View More</Link>
                <div className="hr"></div>
                </div>
            </div>

        </article>
    )
}