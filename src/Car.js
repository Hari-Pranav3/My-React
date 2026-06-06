import React, { useState } from 'react'

function Car() {
    const[name, setName]=useState('')
    const[description,setDescription]=useState('')
    const[price,setPrice]=useState('')
    const[category,setCategory]=useState('')
    const handleSubmit = async(e)=>{
         e.preventDefault();
         const data ={
            name: name,
            description: description,
            price: price,
            category: category
         };

         const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
         };

         try{
            const response = await fetch('https://dummyjson.com/products/add', requestOptions)
            if(!response.ok){
                throw new Error('Failed to add product');
            }
            console.log('Product added succesfully');
         } catch(error){
            console.error('error adding product', error.message);
         }
  };
  return (
    <div>
        <h2> Add Product</h2>
        <form  onSubmit={handleSubmit}>
            <input type='text' placeholder='Name' value={name} onChange={(e)=> setName(e.target.value)}/> <br/>
            <textarea placeholder='Description' value={description} onChange={(e)=> setDescription(e.target.value)}/> <br/>
            <input type='text' placeholder='Price' value={price} onChange={(e)=> setPrice(e.target.value)}/> <br/>
            <input type="text" placeholder='Category' value={category} onChange={(e)=> setCategory(e.target.value)}/> <br/>
            <button type='submit'> Add product </button>
        </form>
    </div>
  )
}

export default Car