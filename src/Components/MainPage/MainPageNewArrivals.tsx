import ShellEngineOil from '../../assets/ShellEngineOil.svg'
export default function MainPageNewArrivals(){
    return (
        <article className="NewArrivalContainer zeroPosition">
            <div className="NewArrivalContainer2">

            <img src={ShellEngineOil} alt="Shell Engine Oil image" className='NewArrivalImg'/>
            <div className="NewArrivalText">
                <p className="NewArrivalOverHead">New Arrivals</p>
                <h2 className="NewArrivalTitle">
                    Shell Engine Oil
                </h2>
                <button className="NewArrivalButton">Shop Now</button>
            </div>
            </div>
        </article>
    )
}