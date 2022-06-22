import { GiWorld } from "react-icons/gi";
import "./Header.css";

const Header = () => {
    return (
        <header className="header">
            <div className="header-container">
                <GiWorld className="header-logo" />
                <h3 className="header-title">my travel journal.</h3>
            </div>
        </header>
    )
}

export default Header