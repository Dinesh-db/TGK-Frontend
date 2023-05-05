import { Component } from "react";

import "./navbar.css"
import { Menudata } from "./Menudata";
import { Link } from "react-router-dom";

class Navbar extends Component {
    state ={clicked:false};
    handleClick =()=>{
        this.setState({clicked:!this.state.clicked})
    }
  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="logo">
          TGK <i className="fab"></i>
        </h1>
        <div className="menu-icons" onClick={this.handleClick}>
            <i className={this.state.clicked ? "fas fa-times": "fas fa-bars"}></i>
        </div>
        <ul className={this.state.clicked ?"nav-menu active":"nav-menu"}>
            {Menudata.map((item,index)=>{
                return(
                    <li key={index}>
                        <Link to={item.url}
                        className={item.CName}>
                <i className={item.icon}></i>{item.title}
            </Link>
            </li>
            
                )
            }) }
      
            {/* <li><Link to={Login}>Login</Link></li> */}
        </ul>
      </nav>
    );
  }
}

export default Navbar;
