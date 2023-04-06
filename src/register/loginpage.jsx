// @flow strict

import * as React from 'react';
import "./regist.css"
import { useState } from 'react';
import { json } from 'react-router-dom';
function Loginpage() {

    const [email ,setemail]=useState("")
    const [pass ,setpass]=useState("")
    const [passs ,setpasss]=useState([])

const handell=()=>{
    if (email==="") {
        return(
            alert("no data")
        )
        
    }
    if (pass==="") {
        return(
            alert("no data")
        )
        
    }
    setpasss({email,pass})
    console.log({email,pass});
    localStorage.setItem("cartitems",JSON.stringify(passs))
}





    return (
       <div className="form-wraber">
        <form action="" onSubmit={(e)=>e.preventDefault()} className="form">
            <input value={email} onChange={(e)=>setemail(e.target.value)} type="email" name="" id="" />
            <input  value={pass} onChange={(e)=>setpass(e.target.value)} type="password" name="" id="" />
            <button className="button" onClick={()=>handell()}>Login</button>
        </form>
       </div>
    );
};

export default Loginpage;