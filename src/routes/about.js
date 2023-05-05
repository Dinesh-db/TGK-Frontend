import Navbar from "../Components/navbar";
import image2 from "../assests/Background.jpg";
import Hero from "../Components/hero"
import Footer from "../Components/footer/footer";
import About1 from "../About/about"

function About (){
    return(
        <>
        <Navbar/>
        <Hero 
        cName="hero-mid"
        heroImg={image2}
        text1="hero-about"
        title="About"
        url="/about"
        btnClass="hide"
        />
        <About1/>
        <Footer/>
        </>
    )
}
export default About;