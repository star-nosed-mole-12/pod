import React from "react";
import { FaShoppingCart, FaRegBookmark, FaStar, FaFireAlt } from 'react-icons/fa';
import styled from "styled-components";



const Category = ({ct}) => {

    return (
        <Box>
            <div className="category">
                <div className="categoryCard">
                    <img></img>
                    {/* <FaRegBookmark />
                    <FaFireAlt /> */}

                </div>
            </div>
            <p></p>
            <p></p>
            
            <Button>See All</Button>
        </Box>
    )
}

const Box = styled.div`
height : 10rem;
display: flex;
flex-direction: column;
justify-content: center;
width : 14rem;
padding-right: 5px;
background-color : #F7F7F7;
transition: 0.2s;
position: relative;

flex: 1 0 25rem;
transition: 0.2s;

@media(max-width: 1020px) {
  
}

&:hover {
    transform: translateY(-0.5rem);
    box-shadow: 0.5rem 0.75rem 1.5rem #bbbbbb;
}
`
const Button = styled.button`
height: 1.5rem;
margin-bottom: 1rem;
border: none;
color: blue;
background-color: #F7F7F7;
`
export default Category;