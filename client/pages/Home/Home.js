import React from "react";
import styled from "styled-components";
import Categories from "./components/categories";
// import {createSlice} from "@reduxjs/toolkit";
import {BiSearch} from "react-icons/bi"
// const initialState = {
//     cartItems: [],
//     cartTotalQuantity : 0,
//     cartTotalAmount : 0,
// };

// const cartSlice = createSlice({
//     name : "cart",
//     initialState,
//     reducers : {
//         addToCart(state, action) {
//             state.cartItems.push(action.payload);
//         }
//     }
// })

const Home = () => {
    return (
        <>
        <Text>
        <h1>
            Welcome to the <strong>Best</strong> Online Retailing platform
        </h1>
        </Text>
        
        <Search>
        <span>All Categories</span>
            <hr />
           <input type="text" placeholder="search"></input>
           <button>
            <BiSearch />
           </button>
        </Search>
        
        <p></p>
        <hr></hr>
        <Container>
        <Categories />
        </Container>
        <hr></hr>
        </>
    )
}

const Text = styled.div`
display: flex;
justify-content: center;
font-family: 'Montserrat', sans-serif;
`

const Search = styled.div`
display: flex;
justify-content: center;
margin: auto;
margin-top: 1rem;
border : solid 0.5px;

width : 25rem;
span {
    display: flex;
    margin-top: 0.5rem;
    justify-content: center;
}
hr {
  @include default;
  background: rgba(#000000, 0.2);
  height: $lg;
  width: 0.1rem;
  margin: 5px;
}
input {
  width: 50%;
  padding: 10px;
  font-size: $md;
  border : none;
}

button {
    border : none;
    background-color : white;
    &:hover {
        
        box-shadow: 0.5rem 0.75rem 1.5rem #bbbbbb;
    }
}
.heIcon {
  font-size: $xl-2;
}
}
`

const Table = styled.table`
justify-content: center;
display: flex;
margin-top: 1.0rem;
width : 100%;
height : 100%;
vertical-align: middle;

`

const StyledInput = styled.input`
font-size: 1rem;
Border: none;
padding: 0px;
`
const Container = styled.div`
display: flex;
  justify-content: space-evenly;
`
export default Home;