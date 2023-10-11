import React from "react";

const ListingInfo = (props) => {

    const listingData = props.item;

return (

    <div>
        <img src={listingData.image}></img>
        <div>{listingData.name}</div>
        <div>${listingData.price}</div>
    </div>
)
}

export default ListingInfo;