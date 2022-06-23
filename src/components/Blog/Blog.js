import StarRatingSvg from "../../assets/images/star.svg";
import "./Blog.css";

const Blog = (props) => {
    return (

        <div className="blogs__container">
            <div className="blog__image">
                <img className="blog-img" src={props.blogs.image} alt={props.blogs.imageAlt} />
            </div>
            <div className="blog__contents">
                <div className="blog--ratings">
                    <img className="star-svg" src={StarRatingSvg} alt="Star Ratings" />
                    <p className="blog-ratings">{props.blogs.rating}</p>
                    <p className="blog-stocks">({props.blogs.stocks})</p>
                    <p className="blog-location">{props.blogs.location}</p>
                </div>
                <h4 className="blog-title">{props.blogs.title}</h4>
                <p className="blog-price"><b>From ${props.blogs.price}</b> / person</p>
            </div>
        </div>

    )
}

export default Blog;