import { Link } from "react-router-dom"


export default function MyAccountRegister(){
    return(
        <main className="MyAccountRegisterContainer">
            <section className="MyAccountRegisterLogIn">
                <h2 className="LogInTitle">
                    Log In
                </h2>
                <div className="LogInEmailContainer">
                    <input type="email" name="emailLog" id="emailLog" placeholder=" " className="LogInEmail"/>
                    <label htmlFor="emailLog" className="EmailLabel">Email Address</label>
                </div>
                <div className="LogInEmailContainer">
                    <input type="password" name="password" id="password" placeholder=" " className="LogInEmail"/>
                    <label htmlFor="password" className="EmailLabel">Password</label>
                </div>
                <div className="RememberMeButton">
                    <input type="checkbox" className="CheckBoxLogIn" /> Remember me
                </div>
                <div className="LogInButtonContainer">
                    <button className="LogInButton">Log In</button>
                    <Link to="/ResetPass" className="LostPassword">Lost your password?</Link>

                </div>
            </section>
            <section className="MyAccountRegisterLogIn">
                <h2>
                    Register
                </h2>
                <div className="LogInEmailContainer">
                    <input type="email" name="email" id="email" placeholder=" " className="LogInEmail"/>
                    <label htmlFor="emailLog" className="EmailLabel">Email Address</label>
                </div>
                <div className="LogInTextContainer">
                    <p className="LogInText">A link to set a new password will be sent to your email <br />
                    address.</p>
                    <p className="LogInText">Your personal data will be used to support your <br />
                    experience throughout this website, to manage access <br />
                    to your account, and for other purposes described in our <br />
                    <b>privacy policy.</b></p>
                </div>
                <div className="LogInButtonContainer">
                    <button className="LogInButton">Register</button>
                </div>
            </section>
        </main>
    )
}