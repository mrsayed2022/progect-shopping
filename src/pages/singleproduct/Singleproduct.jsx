// @flow strict

import * as React from 'react';
import { produsts } from '../../data/product';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import "../singleproduct/singlpro.css"
import { icons } from 'react-icons';
import { useDispatch } from 'react-redux';
import { addtocart } from '../../redux/apifolder/prouctapi';
function Singleproduct() {

    const dispatch=useDispatch()
    const [product,setproduct]=useState([])
    async function fetchpro(id){
        try {
            const fetchs= await fetch(`http://localhost:5000/produsts/${id}`);
            const data=await fetchs.json()
            setproduct(data)
        } catch (error) {
            console.log(error);
        }
        
        
    }
    const {id}=useParams()
useEffect(()=>{
fetchpro(id)
window.scrollTo(0,0)
},[])

const [qty,setqty]=useState(1)

const fetchshop=()=>{
dispatch(addtocart(
{    id:product.id,
    quanty:qty,
    price:product.price,
    title:product.title,
    image:product.image
}))
}
    return (
        <div>
<div className="productitem">
    <div className="proimg">

    <img src={product.image} alt="" />
    </div>
    <div className="producttitle">
        <h3 className="title">{product.title}</h3>
        <p>{product.reviews} تقييمات</p>
        <p>{product.rating}</p>
        <h5>{product.price}$</h5>
    <div className="procart">
                <div>الكميه</div>
                <input value={qty} onChange={(e)=>setqty(e.target.value)} type="number" min="1" max="10" />
<button className="add"  onClick={fetchshop}>اضافه الي السله</button>

                </div>    
    </div>
</div>

        </div>
    );
};

export default Singleproduct;