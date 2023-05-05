import Navbar from "../Components/navbar";

import "./CartList.css"

function CartList(props){
    let name,email;
    let obj={},arr=[];
    const handleSave =()=>{
        if(name==="" && email===""){
            window.alert("Please, Enter the Name and Email!!")
        }
        else{
            name=document.getElementById("101").value;
            email=document.getElementById("102").value;
            for(var i=0 ; i<props.item.length ; i++){
                let str= props.item[i]
                arr.push(str)    
            }
            obj.name=name
            obj.email=email
            obj.details=arr
                
                    const cartres = async() =>{
                    const datas= await fetch('http://localhost:9000/cart', {
                            method: 'POST',
                            body: JSON.stringify(obj),
                            headers: {
                                'Content-type': 'application/json; charset=UTF-8',
                            },
                            })
                            return datas
                    }
                    try{
                       if( cartres() ){
                            alert("Cart added successfully")
                       }
                    }catch(error){
                            alert("something went wrong")
                    }
                }
    }
    return(
        <>
        <Navbar/>
        <div className="cartlist-heading">
            <h1>Your Cart</h1>
        </div>
        <div className="cart-container">

            <div className="cart-input">
                <h4>Name</h4>
                <input type="Name" placeholder="Name" id="101" ></input>
                <h4>Email</h4>
                <input type="text" placeholder="Abcd@gmail.com" id="102" ></input>
            </div>
            <br></br>
            {props.item.map((element,index) =>{
               return <div key={index} className="cart-list">{element}</div>}
            )}
            <br></br>
            <button onClick={handleSave} className="cart-button">Save</button>
            
        </div>
        </>
    );
}

export default CartList;