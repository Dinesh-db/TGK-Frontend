
import Slideshow from "./Slideshow";

import image1 from "../assests/Photos/1.png";
import image2 from "../assests/Photos/2.png";
import image3 from "../assests/Photos/3.png";


import "./Photos.css"
const slides = [
    { url: image1, title: "beach" },
    { url: image2, title: "boat" },
    { url: image3, title: "forest" },
  ];
  

function Photos(){
    return (
        <>
        <div className="Photo-container">
            <div className="containerStyles">
                <h1>Photos</h1>
                <Slideshow slides={slides} />
            </div>
            </div>
        </>
    )
}


export default Photos;