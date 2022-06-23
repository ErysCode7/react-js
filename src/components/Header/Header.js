import AirBnbLogo from "../../assets/images/airbnb-logo.svg";
import "./Header.css";

const Header = () => {
    return (
        <header className="header">
            <div className="header__container">
                <img className="airbnb-logo" src={AirBnbLogo} alt="AirBnb Logo" />
            </div>
        </header>
    )
}

export default Header