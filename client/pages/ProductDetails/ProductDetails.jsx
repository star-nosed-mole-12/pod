import React, { useEffect, useState } from "react";
import ListingInputsImage from "./components/ListingInputsImage.jsx";

export const ProductDetails = (props) => {
    const [inputs, setInputs] = useState({
        name: null,
        price: null,
        qty: null,
        category: null,
        sellerId: null,
        listingUrl: null,
    });

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }
    
    const randomNumber = getRandomInt(10000)
  
    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;

      if (name === 'price' || name === 'qty' || name === 'sellerId') {
        setInputs({
            ...inputs,
            [name]: parseInt(value),
          });
      }
      else {
        setInputs({
            ...inputs,
            [name]: value,
            listingUrl: randomNumber,
          });
      }
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log('asdads', inputs);
  
      fetch('http://localhost:3000/listing/', {
      method: 'POST',
      body: JSON.stringify(inputs),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        console.log('Response from backend:', inputs);
      })
      .catch(error => {
        console.log(inputs)
        console.error('Error:', error);
      });
    }



    return (
      <div>
        <form onSubmit={handleSubmit}>
          <label>Name: <input className="input" type="text" name="name" defaultValue={inputs.name || ""} onChange={handleChange} /></label>
          <label>Price: <input className="input" type="number" name="price" defaultValue={inputs.price || ""} onChange={handleChange} /></label>
          <label>Quantity: <input className="input" type="number" name="qty" defaultValue={inputs.qty || ""} onChange={handleChange} /></label>
          <label>Category: <input className="input" type="text" name="category" defaultValue={inputs.category || ""} onChange={handleChange} /></label>
          <label>Seller: <input className="input" type="text" name="sellerId" defaultValue={inputs.sellerId || ""} onChange={handleChange} /></label>
          <div><ListingInputsImage listingUrl={randomNumber} /></div>
          <input className="listingsInputs" type="submit" value="Submit" />
        </form>
        
      </div>
    )
  }
  
//   export default ProductDetails;