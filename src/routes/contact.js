import Navbar from "../Components/navbar";
import image2 from "../assests/2.jpg";
import Hero from "../Components/hero"
import Form from "../contacts/form"
import Footer from "../Components/footer/footer";
import Map from "../contacts/map";

function Service(){
        return(
            <>
            <Navbar/>
            <Hero 
            cName="hero-mid"
            heroImg={image2}
            text1="hero-about"
            title="Contact"
            
            url="/"
            btnClass="hide"
            />
            <Form/>
            <Map/>
            <Footer/>
            </>
        )
}
export default Service;