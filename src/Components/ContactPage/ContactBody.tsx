import MapPoint from '../../assets/MapPoint.svg'
import PhoneIcon from '../../assets/PhoneIcon.svg'

export default function ContactBody() {
    return(
        <main className="ContactBodyContainer">
            <section className="ContactBodyHeader">
                <h2 className="ContactBodyTitle">
                    Get In Touch With Us
                </h2>
                <p className="ContactBodyUnderTitle">
                    For More Information About Our Product & Services. Please Feel 
                    Free To Drop Us An Email. Our Staff Always Be There To Help 
                    You Out. Do Not Hesitate!
                </p>
            </section>
            <section className="ContactBodyMiddle">
                <div className="ContactBodyMiddleLeft">
                    <div className="ContactLeftItem">
                        <img src={MapPoint} alt="Map point icon" />
                        <div className="ContactLeftItemText">
                            <p className="ContactLeftItemTextHead">
                                Address
                            </p>
                            <p className="ContactLeftItemTextUnderHead">
                                Cool address Nr.2
                            </p>
                        </div>
                    </div>
                    <div className="ContactLeftItem">
                        <img src={PhoneIcon} alt="Phone icon" />
                        <div className="ContactLeftItemText">
                            <p className="ContactLeftItemTextHead">
                                Phone
                            </p>
                            <p className="ContactLeftItemTextUnderHead">
                                +22 222 22 222 22
                            </p>
                        </div>
                    </div>
                </div>
                <div className="ContactBodyMiddleRight">
                    <div className="ContactBodyRightItem">
                        <p className="ContactBodyRightText">
                            Your name
                        </p>
                        <input type="text"  className='ContactBodyRightButton' placeholder='Miguel'/>
                    </div>
                    <div className="ContactBodyRightItem">
                        <p className="ContactBodyRightText">
                            Email address
                        </p>
                        <input type="email"  className='ContactBodyRightButton' placeholder='example@gmail.com'/>
                    </div>
                    <div className="ContactBodyRightItem">
                        <p className="ContactBodyRightText">
                            Subject
                        </p>
                        <input type="text"  className='ContactBodyRightButton' placeholder='Your subject'/>
                    </div>
                    <div className="ContactBodyRightItem">
                        <p className="ContactBodyRightText">
                            Message
                        </p>
                        <textarea name="Text1" cols="40" rows="5" placeholder='Your Message' className='ContactBodyRightButton'></textarea>
                    </div>
                    <button className="ContactBodyRightButton w100">
                        Submit
                    </button>
                </div>
            </section>
        </main>
    )
}