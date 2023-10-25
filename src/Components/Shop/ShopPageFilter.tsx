import FilterIcon from '../../assets/filterIcon.svg'
import FilterDots from '../../assets/FilterDots.svg'
import FilterCollumn from '../../assets/FilterCollumn.svg'

export default function ShopPageFilter(){
    return (
        <div className="ShopPageFilter zeroPosition">
            <div className="ShopPageFilterLeft">
                <img src={FilterIcon} alt="FilterIcon" height={'30px'}/>
                <p className="ShopPageFilterName">
                    Filter
                </p>
                <img src={FilterDots} alt="Dot Filter" />
                <img src={FilterCollumn} alt="Collumn Filter" />
                <div className="filterHr"></div>
                <p className="ShopPageFilterInfoItems">
                    Showing 1-16 of 32 results
                </p>
            </div>
            <div className="ShopPageFilterRight">
                <div className="FilterRightItem">
                   <p>Show</p>
                    <input type="number" name="number" id="number" min={'1'} max={'32'} placeholder={'1'} className='FilterItemInputNr'/> 
                </div>
                <div className="FilterRightItem">
                    <p>Short by </p>
                    <input type="text" placeholder='Default' className='FilterItemInputTxt'/>
                </div>

            </div>
        </div>

    )
}