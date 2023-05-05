import { useEffect, useState } from 'react';
import './List.css'
import axios from 'axios';
// import { Link, Route } from 'react-router-dom';
// import Mail from './mail';
import { Link } from 'react-router-dom';

const List =()=>{
    const [cartdet,SetCartdet]=useState([])

    useEffect(()=>{
        const func = async()=>{
        const response = await fetch("http://localhost:9000/cart")
        const data = await response.json()
        console.log("data",data)
        SetCartdet([...data])
        }
        func()
        console.log("cartdet",cartdet);
    },[])
    // const deleteItem=(item)=>{
    //     console.log(item.target.value)
    //     fetch(`http://localhost:9000/cart/${item.target.value}`,{
    //       method:"DELETE",
    //           headers: {
    //             'Accept':"application,plain/text", 
    //             'Content-Type': 'application/json' },
    //           body:JSON.stringify(item)
    //     }).then(res=>res.json())
    //     .then((res)=>{const filterList=cartdet.filter((item,_)=> item._id!==res._id)
    //       SetCartdet([...filterList])}
    //     );
    //     window.alert("fvybhj");
    //   };

    const deleteItem =(item)=>{
        axios.delete(`http://localhost:9000/cart/${item.target.value}`).then((data)=>{
            // console.log(data)
            const func = async()=>{
                const response = await fetch("http://localhost:9000/cart")
                const data = await response.json()
                console.log("data",data)
                SetCartdet([...data])
                }
                func()
        }).catch((err)=>console.log(err));
        //axios.get("http://localhost:9000/cart").then((data)=>{
            // console.log("delete",data)
            // SetCartdet([...data.data]);
        //})
        // .catch((err)=>console.log(err));
    }
    

    const handleSend=()=>{
        console.log("fghjkl");
    }
    console.log("cartdet",cartdet);
    return (
        <>
        <div className='List-container'>
            <h1>Orders</h1>
            <div className='List-Headings'>
                <div className='table-headings'>
                    <div className='tab-h1'>Name</div>
                    <div className='tab-h1'>Email</div>
                    <div className='tab-h1'>List</div>
                    <div className='tab-h1'>Decline</div>
                </div>
                <div className='List-details'>
                {cartdet.map((e,index)=>
                   <div key={index} className='table-datas'>
                        <div className="t-data">{e.name}</div>
                        <div className='t-data'>{e.email}</div>
                        <div className='t-data t-list'>
                        {e.details.map((l,i)=><div key={i}  className='t-list-data'>|{l}|</div>)}
                        </div>
                        <div className='t-data'>
                            <button value={e._id} onClick={deleteItem}>Delete</button>
                            <Link to="/mail"><button onClick={handleSend}>Send</button></Link>
                        </div>
                    </div>
                   
                    
                    )}
                </div>
            </div>
        </div>
        </>
    );
}

export default List;