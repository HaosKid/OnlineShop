import { Link, useParams } from 'react-router-dom'
import { useState } from 'react'

export default function ShopPageItems(Item){
    const [Count, setCount] = useState(2)
    const { id }: { id: string } = useParams()
    let Items = Item.Item.Item
    var Just3Items = []
    for (let i = 0; i < 4; i++) {
        if (Number(id) == 2){
            Just3Items.push(Items[i + (Number(id)+2)])
        }
        else if(Number(id) > 2){
            Just3Items.push(Items[i + (Math.floor(Number(id)*2.7))])
        }
        else{
            Just3Items.push(Items[i])
        }
    }

    var FirstNumber = () => (Count === 1)? <Link to={'/Shop/' + (Count)} className='ShopPageButon'>{Count}</Link>:<Link to={'/Shop/' + (Count - 1)} onClick={() => (Count === 1)? setCount(Count):setCount(Count - 1)} className='ShopPageButon'>{Count - 1}</Link>
    var MainNumber = () => (Count === 1)? <Link to={'/Shop/' + (Count + 1)} className='ShopPageButon'>2</Link>: <Link to={'/Shop/' + Count} className='ShopPageButon'>{Count}</Link>
    var SecNumber = () => (Count === 1)? <Link to={'/Shop/' + (Count + 2)} onClick={() => setCount(Count + 2)} className='ShopPageButon'>3</Link>:<Link to={'/Shop/' + (Count + 1)} onClick={() => setCount(Count + 1)} className='ShopPageButon'>{Count + 1}</Link>

    return(
        <div className="ShopPageItemCarousel">
            <div className="ShopPageItemList">
              {Just3Items}
            </div>
            
            <div className="ShopPageButtons">
                {FirstNumber()}
                {MainNumber()}
                {SecNumber()}
                <Link to={'/Shop/' + (Count + 1)} onClick={() => setCount(Count + 1)} className='ShopPageButon'>Next</Link>
            </div>
        </div>
    )
}