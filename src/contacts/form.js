import "./form.css"
//import {Link}from "react-router-dom";
function Form(){
    return(
        <div className="container">
            <div className="Cover">
               <h1>Name</h1>
               <input text="text" placeholder="username"></input>
               <h1>Email</h1>
               <input text="text" placeholder="abcd@gmail.com"></input>  
               <h1>Ph.No</h1>
               <input text="number" placeholder="12345678"></input> 
               <h1>Feedback</h1>
               <textarea rows="8" column="20"></textarea>
               <br/>
               <button type="submit" value="Submit" className="btncli-1">Summit</button>
            </div>
        </div>
    )
}

export default Form;