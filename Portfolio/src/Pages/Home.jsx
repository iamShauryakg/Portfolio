import Header_part from "../Components/Header_part" 
import About_me from "../Components/About_me"
import Skills from "../Components/Skills/Skills"
 


function Home_page() {
    return (

        <>
            <header id="home" className=" ">
                <Header_part />
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