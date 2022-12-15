import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import SingelCategory from './SingelCategory';

const LeftSidenav = () => {
const [categorys,setCategory] =useState([])

useEffect(()=>{
    fetch("http://localhost:5000/category")
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        setCategory(data)
    })
},[])


    return (
        
        <div className='w-100 '>
            {
            categorys.map(category=><SingelCategory
                 key={category.id} data={category}></SingelCategory>)
                
                
                }
        </div>
        


    );
};

export default LeftSidenav;