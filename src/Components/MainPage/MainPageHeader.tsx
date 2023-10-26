import MainPageBarHeader from "./MainPageBarHeader"
import CutiaMisterelor from '../../assets/CutiaMisterelor.svg'
import MainPageHeaderContact from "./MainPageHeaderContact"
import { Link } from "react-router-dom"

export default function MainPageHeader(){
    return(
        <>
        <header className="header zeroPosition">
            <div className="HeaderContent">
                <div className="HeaderContentItem">
                    <h1 className="HeaderH1">
                        <span className="HeaderSpan">Auto</span> Spare Parts
                    </h1>
                    <h2 className="HeaderH2">All Major Brands Available</h2>
                    <Link to='/Shop' className="HeaderButton">Shop Now</Link>
                </div>
                <img src={CutiaMisterelor} alt="Box filled with tools and car parts" className="MainPageHeaderImage dNone"/>
            </div>
        </header>
        </>
        

    )
}