import MainPageBarHeader from "./MainPageBarHeader"
import CutiaMisterelor from '../../assets/CutiaMisterelor.svg'
import MainPageHeaderContact from "./MainPageHeaderContact"

export default function MainPageHeader(){
    return(
        <>
        <MainPageHeaderContact />
        <header className="header zeroPosition">
           <MainPageBarHeader /> 
            <div className="HeaderContent">
                <div className="HeaderContentItem">
                    <h1 className="HeaderH1">
                        <span className="HeaderSpan">Auto</span> Spare Parts
                    </h1>
                    <h2 className="HeaderH2">All Major Brands Available</h2>
                    <button className="HeaderButton">Shop Now</button>
                </div>
                <img src={CutiaMisterelor} alt="Box filled with tools and car parts" />
            </div>
        </header>
        </>
        

    )
}