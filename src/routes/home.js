
import Navbar from "../Components/navbar";
import Hero from "../Components/hero";
import image1 from "../assests/Home2.jpeg"
import Footer from "../Components/footer/footer";
import Photos from "../Components/Photos.js";
import About1 from "../Components/ab-1"
import Service1 from "../Service/Service"
// import Projects from "../Components/projects"

function Home (){
    return(
        <>
        <Navbar/>
        <Hero 
        cName="hero"
        heroImg={image1}
        text1="hero-text"
        title="TGK ENTERPRISES"
        text="Built your own constructions"
        buttonText="Expolre more"
        url="/about"
        btnClass="show"
        />
        <About1/>
        <Service1/>
        <Photos/>
        <Footer/>
        </>
    )
}
export default Home;