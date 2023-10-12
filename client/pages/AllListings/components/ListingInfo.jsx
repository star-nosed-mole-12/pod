import React from "react";

const ListingInfo = (props) => {

    const listingData = props.item;

return (

    <div>
        {/* <img src={listingData.image}></img> */}
        <div>{listingData.listing}</div>
        <div>${listingData.price}</div>
        <div>{listingData.quantity}</div>
        <div>{listingData.category}</div>
        <div>{listingData.seller}</div>
    </div>
)
}

export default ListingInfo;