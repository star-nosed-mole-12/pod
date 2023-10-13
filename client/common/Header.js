import React from "react";
import cart from "../assets/cart.png";
import styled from "styled-components";
import { NavLink, Navlist } from "react-router-dom";

const links = [
    {name: "Signup", path:"/signup"},
    {name:"Login", path: "/login"},
    {name:"Cart", path: "/Cart"}

]

const Navigation = () => {

    return (
        <NavContainer>
            {
                links.map((link, index) => (
                    <li key={index}>
                        <StyledNavLink to={link.path} exact="true">
                            {link.name}
                        </StyledNavLink>
                    </li>
                ))
            }
        </NavContainer>
    )
}


const Header = () => {
    return (
        <>
            <header>
                <Container>
                    <nav>
                        <div className ="toggle">
                       {/* <button>menu</button>    */}
                        </div>

                        <Logo>
                           <h2> <P>P</P><O>O</O><D>D</D><Image src={cart}></Image></h2>  
                        </Logo>
                    </nav>
                <Navigation />
                
                </Container>
            <hr />
            </header>
        </>
    )
}


const Logo = styled.div`
margin-left: 1.5rem;
font-family: 'Lilita One', cursive;
font-family: 'Lobster', cursive;
font-size: 1.5rem;
background-color : blue;
`
const P = styled.a`
color: #088395 ;
`
const O = styled.a`
color: #451952;
`
const D = styled.a`
color: #AE445A;
`
const Image = styled.img`
height : 20px;
width : 20px;
color: white;
`

const NavContainer = styled.nav`
display : flex;
list-style: none;
align-self: center;
margin-right : 5rem;
gap: 10px;
`
const StyledNavLink = styled(NavLink)`
color : #053B50;
`

const Container = styled.div`
display : flex;
justify-content : space-between;
background-color : ##F1EFEF;

`
export default Header;