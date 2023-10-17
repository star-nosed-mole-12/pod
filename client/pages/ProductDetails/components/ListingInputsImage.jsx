import React, { useEffect, useState } from "react";

export const ListingInputsImage = (props) => {
    const [inputs, setInputs] = useState({});

  
    const handleChange = (event) => {
      // const name = event.target.name;
      const value = event.target.files;
      setInputs(value)
    }
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      console.log('asdads', inputs);




      const key = props.listingUrl;

      for (let i = 0; i < inputs.length; i++) {
        const res = await fetch(`http://localhost:3000/image/listing${key}`)
        const data = await res.json();
        console.log("data", data)
        fetch(data, {
          // mode: "no-cors",
          method: 'PUT',
          body: inputs[i],
          headers: {
            'Content-Type': 'multipart/form-data',
          },
      }) 
      .catch(error => {
        console.log(inputs)
        
        console.error('Error:', error);
      });
      }
    }

    return (
      <div>
        <form onSubmit={handleSubmit}>
          <label>Upload Image: <input className="input" type="file"  name="listingImage" defaultValue={inputs.listingImage || ""} onChange={handleChange} multiple/></label>
        </form>
      </div>
    )
  }
  
  export default ListingInputsImage;