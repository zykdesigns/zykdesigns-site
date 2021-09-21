import logo from '../images/LogoBlack.svg'
import signature from '../images/Signature.png'

const Landing = () => {
    return (
        <div className="centered-page">
            <img className="signature" src={signature} alt="" />
            <div className="landing">
                <div className="welcome-area">
                    <img className="logo" src={logo} alt=""/>
                    <p className="welcome-msg">
                    Premium digital graphic designs for posters, business cards, and more.
                    <br /><br />
                    by Bradley Rupczyk
                    </p>
                </div>
                <div className="button-area">
                    <button className="button-1">See Examples</button>
                    <button className="button-1">Order a Design</button>
                </div>
            </div>
        </div>
    )
}

export default Landing
