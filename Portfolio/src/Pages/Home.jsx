import Navbar from "../Components/Navbar"
import About_me from "../Components/About_me"
import Skills from "../Components/skills"
 


function Home_page() {
    return (

        <>
        <header>
            <Navbar />
        </header>
        <div>
            <About_me />
        </div>
        <div>
            <Skills />
        </div>
        </>
    )
    
}

export default Home_page;