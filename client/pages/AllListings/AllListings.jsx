import React, { useEffect, useState } from "react";
import ListingInfo from "./components/ListingInfo.jsx";

export const AllListings = () => {

    const [items, setItems] = useState([]);

    const getAllItems = async () => {
        try {
            const res = await fetch('http://localhost:3000/listing/');
            const data = await res.json();
            setItems(data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    // const getItemsByCategory = async (categoryId) => {
    //     try {
    //         const res = await fetch(`http://localhost:3000/listing/${listingId}`);
    //         const data = await res.json();
    //         setItems(data);
    //     } catch (error) {
    //         console.error("Error fetching data:", error);
    //     }
    // }

    const populateItems = () => {
        // if (categoryId) {
        //     getItemsByCategory(categoryId);
        // }
        // else {
            getAllItems();
        // }
    }

    useEffect(() => {
        populateItems();
    }, [])

    return (
        <div>
            {items.map(item => <ListingInfo key={item.id} item={item}/>)}
        </div>
    );
}
