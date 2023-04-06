// @flow strict

import * as React from 'react';
import { useState } from 'react';

function Signin() {
    const [email ,setemail]=useState("")
    const [pass ,setpass]=useState("")
    const [name ,setname]=useState("")

const handells=()=>{
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
    if (name==="") {
        return(
            alert("no data")
        )
        
    }
    console.log("fffffffffff");
}


    return (
        <div className="form-wraber">
        <form action="" onSubmit={(e)=>e.preventDefault()} className="form">
        <input value={name} onChange={(e)=>setname(e.target.value)} type="text" placeholder='enter name' name="" id="" />
            <input value={email} onChange={(e)=>setemail(e.target.value)} type="email" name="" placeholder='email' id="" />
            <input  value={pass} onChange={(e)=>setpass(e.target.value)} type="password" name="" placeholder='passwoard' id="" />
            <button className="button" onClick={()=>handells()}>Login</button>
        </form>
       </div>
    );
};

export default Signin;