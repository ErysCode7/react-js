import travelApi from "./api/travel-api";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

const App = () => {
    return (
        <>
            <Header />
            <section className="main">
                {travelApi.map(data => (
                    <Main data={data} key={data.id} />
                ))}

            </section>

        </>
    )
}

export default App;