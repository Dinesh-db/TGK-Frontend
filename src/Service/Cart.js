//import { useState } from "react";
import { Link } from "react-router-dom";
import image1 from "../assests/Services/Products/cart.webp"
import "./Cart.css"

function Cart(props){
    return(
        <>
        <div className="container">
        <header>
            <h2 className="cart-heading">Industry Products</h2>
            <div className="shopping">
                <Link to="/service/cartlist"><img src={image1} alt="ycvcw"></img></Link>
                <span className="quantity">{props.len}</span>
            </div>
        </header>

        <div className="list">
          
        </div>
    </div>
    <div className="card">
        <h1>Card</h1>
        <ul className="listCard">
        </ul>
        <div className="checkOut">
            <div className="total">0</div>
            <div className="closeShopping">Close</div>
        </div>
    </div>

        </>
    );
}

export default Cart;