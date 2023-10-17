import React from "react";
import cart from "../assets/cart.png";
import styled from "styled-components";
import { NavLink, Navlist } from "react-router-dom";
import { BiCart } from "react-icons/bi";
const links = [
    {name: "Signup", path:"/signup"},
    {name:"Login", path: "/login"},
    {name: "listing", path: "/listing"},
    {name:"Cart", path: "/cart"}

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
               
                <Bi> <div className="cart"> 
                <div className="count"><span>3</span></div>
                 { < BiCart  className="bicart"/>}
                </div> 
                </Bi> 
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
margin : auto;
gap: 10px;
`
const StyledNavLink = styled(NavLink)`
color : #053B50;
`

const Container = styled.div`
display : grid;
grid-template-columns : 2fr 1fr 2fr;
justify-content : space-between;
background-color : ##F1EFEF;

`

const Bi = styled.div`
margin: auto;

.cart {
    position: relative;
    display: block;
    width: fit-content;
    height: auto;
    overflow: hidden;
    .bicart {
      position: relative;
      top: 4px;
      z-index: 1;
      font-size: 24px;
        height: 3rem;
        width: 2rem;
    }
    .count {
        position: absolute;
        top: 0;
        justify-content: center;
        text-align: center;
        right: 0;
        z-index: 2;
        font-size: 1rem;
        border-radius: 50%;
        background: #d60b28;
        width: 1.5rem;
        height: auto;
        line-height:16px;
        display: block;
        text-align: center;
        color: white;
        font-family: sans-serif;
        font-weight: bold; 
    }

    }
`
export default Header;