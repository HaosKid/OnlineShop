import RedOil from '../../assets/ShellEngineOilRed.svg'
import CremOil from '../../assets/ShellEngineOilCrem.svg'
import BlackOil from '../../assets/ShellEngineOilBlack.svg'



export default function ShopPageItems(){
    let ItemList = {
        Item1: {
            imagine:RedOil,
            alt: 'Shell Engile Oil Red Image',
            desc1: "Shell Engile Oil",
            desc2: "Shope: Oil house",
            price: "200€",
            other: ''
        },
        Item2: {
            imagine:CremOil,
            alt: 'Shell Engile Oil Crem Image',
            desc1: "Shell Engile Oil",
            desc2: "Shope: Oil house",
            price: "250€",
            other: 'ImageCorrectionLeft'
        },
        Item3ShellRedOil: {
            imagine:RedOil,
            alt: 'Shell Engile Oil Red Image',
            desc1: "Shell Engile Oil",
            desc2: "Shope: Oil house",
            price: "200€",
            other: ''
        },
        Item4: {
            imagine: BlackOil,
            alt: 'Shell Engile Oil Black Image',
            desc1: "Shell Engile Oil",
            desc2: "Shope: Oil house",
            price: "200€",
            other: ''
        },
        Item5: {
            imagine:RedOil,
            alt: 'Shell Engile Oil Red Image',
            desc1: "Shell Engile Oil",
            desc2: "Shope: Oil house",
            price: "200€",
            other: ''
        },
        Item6: {
            imagine:CremOil,
            alt: 'Shell Engile Oil CremOil Image',
            desc1: "Shell Engile Oil",
            desc2: "Shope: Oil house",
            price: "200€",
            other: ''
        },
        Item7: {
            imagine:RedOil,
            alt: 'Shell Engile Oil Red Image',
            desc1: "Shell Engile Oil",
            desc2: "Shope: Oil house",
            price: "200€",
            other: ''
        },
        Item8: {
            imagine:CremOil,
            alt: 'Shell Engile Oil Crem Image',
            desc1: "Shell Engile Oil",
            desc2: "Shope: Oil house",
            price: "200€",
            other: ''
        },
    }
    var Item = []

    for (const i in ItemList) {
        const item = ItemList[i]
        Item.push(
            <div className="ShopPageItemContainer">
                <img src={item.imagine} alt={item.alt} className={item.other}/>
                <div className="ShopPageItemDesc">
                    <p className="ShopItemDesc">{item.desc1}</p>
                    <p className="ShopItemDesc">{item.desc2}</p>
                    <p className="ShopItemPrice"><b>Price: {item.price}</b></p>  
                </div>
                
            </div>
        )
        console.log(Item)
    }


    return(
        <div className="ShopPageItemCarousel">
            <div className="ShopPageItemList">
              {Item}  
            </div>
            
            <div className="ShopPageButtons">
                <button className='ShopPageButon'>1</button>
                <button className='ShopPageButon'>2</button>
                <button className='ShopPageButon'>3</button>
                <button className='ShopPageButon'>Next</button>
            </div>
        </div>
    )
}