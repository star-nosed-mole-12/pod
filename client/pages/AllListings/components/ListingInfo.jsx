import React, { useEffect, useState } from "react";


const ListingInfo = (props) => {

    // const [image, setImage] = useState(null);

    const listingData = props.item;

    const getImage = async () => {
        const res = await fetch(`http://localhost:3000/image/listing${props.item.img_url}`)
        const data = await res.json();
        console.log('data', data)
        return data;
    }

    const image = getImage();

    useEffect(() => {
        getImage();
        console.log(listingData)
    }, [])

return (
    <div>
        {<img src={image}/>}
        {/* <div>{listingData}</div> */}
        <div>{listingData.listing}</div>
        <div>${listingData.price}</div>
        <div>{listingData.quantity}</div>
        <div>{listingData.category}</div>
        <div>{listingData.seller}</div>
    </div>
)
}

export default ListingInfo;