import Banner from "../../components/Banner"
import Skills from "../../components/Skills"
import Works from "../../components/Works"
import Experience from "../../components/Experience"
import Formation from "../../components/Training"




function Home() {
    return (
        <div className="main-home">
            <Banner />
            <Skills />
            <Works />
            <Formation />
            <Experience />
        </div>
    )
}

export default Home