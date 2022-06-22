import HeaderLogo from "../../assets/images/header-react-logo.svg";
import "./Header.css";

const Header = () => {
    return (
        <header className="header">
            <div className="header__container">
                <div className="header__logo">
                    <img className="header-img" src={HeaderLogo} alt="React Logo" />
                    <h2 className="header-title">ReactFacts</h2>
                </div>
                <div className="header__project--title">
                    <h3>React Course - Project 1</h3>
                </div>
            </div>
        </header>
    )
}

export default Header