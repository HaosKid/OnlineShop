import Arrow from '../../assets/ArrowRight.svg'

export default function ProductPagePathBar(){
    return(
        <div className="ProductPagePathBarContainer zeroPosition">
            <p className='ProductPageParagraf'>Home <img src={Arrow} alt="Arrow image"/> Shop <img src={Arrow} alt="Arrow image"/> </p>
            <div className="filterHr"></div> 
            <b>Tire</b>
        </div>
    )
}