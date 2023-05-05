import React from 'react';
import {Route,Routes} from "react-router-dom"
import Home from "./routes/home"
import About from "./routes/about"
import Service from "./routes/service"
import Contact from "./routes/contact"
import CartList from './Service/CartList';
import { useState } from 'react';
import Admin from './Admin/Admin';
import Mail from './Admin/mail';

export default function App(){
  const [Items,setItems]=useState([]);
  let [Len,setLen]=useState(0);
    
  const handleItem=(newItem)=>{
      Items.push(newItem)
      setItems([...Items])
      setLen(Items.length)
    }

  return(
    <div>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/service" element={<Service handleItem={handleItem} len={Len}/>}/>
      <Route path="/about" element={<About/>}/>
      
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/service/cartlist"element={<CartList item={Items}/>}/>
      <Route path="/admin" element={<Admin/>}/>
      <Route path='/mail' element={<Mail/>}/>
    </Routes>
    
      
      </div>
  );
}