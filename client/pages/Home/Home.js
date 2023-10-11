import React from "react";
import styled from "styled-components";
import Categories from "./components/categories";
import SearchBar from "./components/searchBar";
const Home = () => {

    return(
        <>
       <SearchBar />
        <p></p>
        <hr></hr>
        <Container>
        <Categories />
        </Container>
        <hr></hr>
        </>
    )
}


const Container = styled.div`
display: flex;
  justify-content: space-evenly;
`
export default Home;