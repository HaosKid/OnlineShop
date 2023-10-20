import blog1 from "../../assets/blog1.svg"
import blog2 from "../../assets/blog2.svg"
import blog3 from "../../assets/blog3.svg"
import TinyClock from '../../assets/TinyClock.svg'
import Calendar from '../../assets/calendar.svg'
import { Link } from "react-router-dom"
export default function MainPageBlog(){
    return(
        <article className="MainPageBlogContainer zeroPosition">
            <div className="MainPageBlogTitle">
                <h2 className="BlogHead">
                    Our Blogs
                </h2>
                <p className="BlogUnderHead">
                    Find a bright ideal to suit your taste with our great selection
                </p>
            </div>
            <div className="BlogItemContainer">
                {/* Item 1 */}
                <div className="BlogItem">
                    <img src={blog1} alt="Blog Image" />
                    <div className="BlogItemDesc">
                        <p className="BlogItemTitle">
                            How to change endgine oil at home?
                        </p>
                        <Link to="/Blog" className="BlogReadMore"> Read More </Link>
                        <div className="hr w70"></div>
                        <div className="BlogItemDownText">
                            <p className="BlogMinutes">
                                <img src={TinyClock} alt="Tiny clock image" /> 
                                5 minutes   
                                <img src={Calendar} alt="tiny calendar image" />
                                12th Oct 2023
                                </p>

                        </div>
                    </div>
                </div>
                {/* Item 2 */}
                <div className="BlogItem">
                    <img src={blog2} alt="Blog Image" />
                    <div className="BlogItemDesc">
                        <p className="BlogItemTitle">
                            How to change endgine oil at home?
                        </p>
                        <Link to="/Blog" className="BlogReadMore"> Read More </Link>
                        <div className="hr w70"></div>
                        <div className="BlogItemDownText">
                            <p className="BlogMinutes">
                                <img src={TinyClock} alt="Tiny clock image" /> 
                                5 minutes   
                                <img src={Calendar} alt="tiny calendar image" />
                                12th Oct 2023
                                </p>

                        </div>
                    </div>
                </div>
                {/* Item 3 */}
                <div className="BlogItem">
                    <img src={blog3} alt="Blog Image" />
                    <div className="BlogItemDesc">
                        <p className="BlogItemTitle">
                            How to change endgine oil at home?
                        </p>
                        <Link to="/Blog" className="BlogReadMore"> Read More </Link>
                        <div className="hr w70"></div>
                        <div className="BlogItemDownText">
                            <p className="BlogMinutes">
                                <img src={TinyClock} alt="Tiny clock image" /> 
                                5 minutes   
                                <img src={Calendar} alt="tiny calendar image" />
                                12th Oct 2023
                                </p>

                        </div>
                    </div>
                </div>
            </div>
            <div className="ViewBlogPosts">
                <p className="ViewAll">
                    View All Post
                </p>
                <div className="hr"></div>
            </div>
        </article>
    )
}