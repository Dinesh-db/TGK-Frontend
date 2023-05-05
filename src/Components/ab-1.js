import "./ab-1.css"
import {Link}from "react-router-dom";
//import image from "../assests/About1.jpg"
function About1(){
    return(
        <div className="Container-1">
           
            <div className="About-2">
                <h1>About</h1>
                <p >TGK Enterprises provides you a better work and requirements.
                    This webpage show you a what are the services provided by TGK Enterprises. 
                    TGK Enterprises & Associates is a construction based in Salem. This firm offers consultancy services for multi sectoral projects in large scale across salem.
                    </p>
                <div className="btncli"> <Link to="/about">To more</Link>
                </div>
            </div>
            <div className="About-1">
                
                <div className="Image1">
                    
                </div>
            </div>
        </div>
    )
}

export default About1;