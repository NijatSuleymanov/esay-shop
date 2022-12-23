import axios from 'axios'
import React, { useEffect, useState } from 'react'
import SingleCard from '../components/SingleCard'

const Products = () => {
    const [data,setData]=useState([]);
    useEffect(()=>{
        axios
        .get('https://fakestoreapi.com/products')
        .then(res=>setData(res.data))
    },[])
  return (
    <>
    <h1 className='text-center my-5'>Products</h1>
       <div className="row g-5">
       {data.map((fd,i)=>(
            <SingleCard productdata={fd} id={fd.id} key={i} photo={fd.image} title={fd.title} desc={fd.description}/>
        ))}
        </div> 
    </>
  )
}

export default Products