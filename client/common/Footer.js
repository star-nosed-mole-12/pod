import React from "react";

import styled from "styled-components";
const Footer = () => {
    return (
        <Foot>
            <p>Copyright, POD execs 2023</p>
        </Foot>
    )
}

const Foot = styled.div`
display: flex;
justify-content: center;
background-color: #B5C99A;

`
export default Footer;