
import Navbar from "../Components/navbar";
import image2 from "../assests/1.jpg";
import Hero from "../Components/hero"
import "./service.css"

import Cart from "../Service/Cart"
import photos2 from "../assests/Services/Products/7.jpg"
import photos3 from "../assests/Services/Products/2.jpg"
import photos4 from "../assests/Services/Products/3.jpg"
import photos5 from "../assests/Services/Products/4.jpg"
import photos6 from "../assests/Services/Products/5.jpg"
import photos7 from "../assests/Services/Products/6.webp"
import Projects from "../Components/projects"

import { useState } from "react";
function Service(props){
    const [item1]=useState(["Steel","Paints","Cement","Plumbing","Plans","Products"]);
    const [Image1]=useState([photos2,photos3,photos4,photos5,photos6,photos7])
    
        return(
            <>
            <Navbar/>
            <Hero 
            cName="hero-mid"
            heroImg={image2}
            text1="hero-about"
            title="Service"
            
            url="/"
            btnClass="hide"
            />
            <Cart len={props.len}/>
            <div className="grid-container">
            {item1.map((x,index) =>{
                // return <Products handleItem={props.handleItem} element={element}/>
                return <div
                        key={index}
                        className="product-container"
                        >
                        {console.log(Image1[index])}
                        <img className="convert-image" src={Image1[index]} alt={"hjk"}></img>
                        <br></br>
                        <div id="product-page-data-container">
                            <div id="product-container-product-name">{x}</div>
                            {/* <div id="product-container-price-container">MRP₹-{x}</div> */}
                        </div>
                        <button onClick={() => {props.handleItem(x)}}>
                            Add to Cart
                        </button>
                        </div>
                })}    
            </div>      
            <Projects/>    
            </>
        )
}
export default Service;