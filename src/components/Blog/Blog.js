import "./Blog.css";

const Blog = (props) => {
    return (

        <div className="blogs__container">
            <div className="blog__image">
                <img className="blog-img" src={props.blogs.image} alt={props.blogs.imageAlt} />
            </div>
        </div>

    )
}

export default Blog