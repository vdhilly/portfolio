import Banner from "../../components/Banner"
import Skills from "../../components/Skills"
import Works from "../../components/Works"
import Experience from "../../components/Experience"
import Formation from "../../components/Training"
import Contact from "../../components/Contact"
import Presentation from "../../components/Presentation"




function Home() {
    return (
        <div className="main-home">
            <Banner />
            <Presentation />
            <Skills />
            <Works />
            <Formation />
            <Experience />
            <Contact/>
        </div>
    )
}

export default Home