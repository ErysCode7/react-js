import BlogApi from "./api/blog-api";
import "./App.css";
import Blog from "./components/Blog/Blog";
import "./components/Blog/Blog.css";
import Experience from "./components/Experience/Experience";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";

const App = () => {


    return (
        <>
            <Header />
            <Hero />
            <Experience />
            <section className="blogs">
                {BlogApi.map(blogs => (
                    <Blog blogs={blogs} key={blogs.id} />
                ))}
            </section>

        </>
    )
}

export default App