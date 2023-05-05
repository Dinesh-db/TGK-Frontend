import Total from "./Total";

import "./Admin.css"
import List from "./List";
import {useEffect,useState} from "react"

function Admin(){
    useEffect(()=>{
        // fetch('http://localhost:9000/login')
        //   .then(res => {
        //     console.log('testtttttt ')
        //     return res.json(),console.log(res.json())})
        //   .then((res)=>{setList([...res])})
        },[])

        
  
      const [list,setList]=useState([]);
    return (
        <>
        <div className="Admin-container">
            <div className="Admin-header">
                <h1>TGK DashBoard</h1>
            </div>
            <div className="Admin-body">
                <Total/>
                <List/>
            </div>
        </div>
        </>
    );
}

export default Admin;