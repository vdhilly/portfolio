import Banner from "../../components/Banner"
import Skills from "../../components/Skills"
import Works from "../../components/Works"

function Home() {
    return (
        <div className="main-home">
            <Banner />
            <Skills />
            <Works />
        </div>
    )
}

export default Home