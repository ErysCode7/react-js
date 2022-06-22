import { ImLocation } from "react-icons/im";
import "./Main.css";

const Main = (props) => {
    return (
        <>
            <div className="main-content">
                <div className="main-image">
                    <img src={props.data.imageUrl} alt={props.data.imageUrl} className="main-img" />
                </div>
                <article className="main-article">
                    <div className="main-location">
                        <ImLocation className="location-logo" />
                        <p className="article-location">{props.data.location}</p>
                        <a href={props.data.googleMaps} className="article-googleMaps">View on Google Maps</a>
                    </div>
                    <h2 className="main-title">{props.data.title}</h2>
                    <p className="main-date">{props.data.startDate} - {props.data.endDate}</p>
                    <p className="main-description">{props.data.description}</p>
                </article>
            </div>
            <div className="main-line"></div>
        </>
    )
}

export default Main