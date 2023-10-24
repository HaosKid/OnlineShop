import MainPageBlog from './MainPageBlog'
import MainPageFooter from './MainPageFooter'
import MainPageHeader from './MainPageHeader'
import MainPageHighlight from './MainPageHighlight'
import MainPageInstagram from './MainPageInstagram'
import MainPageNewArrivals from './MainPageNewArrivals'
import MainPageTopPicks from './MainPageTopPicks'

export default function MainPage({ ItemList }){

    return(
         <>
    <MainPageHeader ItemList = {ItemList}/>
    <MainPageHighlight />
    <MainPageTopPicks />
    <MainPageNewArrivals />
    <MainPageBlog />
    <MainPageInstagram />
    <MainPageFooter />
  </>
    )

}