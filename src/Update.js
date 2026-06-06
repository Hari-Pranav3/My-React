import React, { useState } from 'react';

function Dashboard() {
  const [getid,setGetid]=useState('')
  
  const updateProduct = async (productId, updatedProductData) => {
  try {
      const response = await fetch(`https://dummyjson.com/products/${productId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedProductData),
      });

     


      if (!response.ok) {
        throw new Error('Failed to update product');
      }

      const result = await response.json();

    }
     catch (error) {
      console.error('Error updating product:', error.message);
    }
  };

  
  
  const handleSubmit = async (e) => {
   
    e.preventDefault();

    
    const formData = new FormData(e.target);
    const updatedProductData = {
      title: formData.get('title'),
      price: parseFloat(formData.get('price')),
      stock: parseInt(formData.get('stock')),
      rating: parseFloat(formData.get('rating')),
      description: formData.get('description'),
      brand: formData.get('brand'),
      category: formData.get('category'),
    };

    
    await updateProduct(getid, updatedProductData); 
  };

  return (
    <div>
      <h2>Update Product</h2>
      <form onSubmit={handleSubmit}>
        <input type='text'  placeholder='Id' value={getid} onChange={(e)=>setGetid(e.target.value)}/>
        <input type="text" name="title" placeholder="Title"  />
        <input type="number" name="price" placeholder="Price" />
        <input type="number" name="stock" placeholder="Stock" />
        <input type="number" name="rating" placeholder="Rating"/>
        <textarea name="description" placeholder="Description"/>
        <input type="text" name="brand" placeholder="Brand"/>
        <input type="text" name="category" placeholder="Category" />
        <button type="submit">Update Product</button>
      </form>
    </div>
  );
}

export default Dashboard;