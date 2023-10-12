import React from "react";
import { useState } from "react";
import Category from "./category";

import styled from "styled-components";

const Categories = () => {
const [category, setCategory] = useState([1,2,3,4,5,6,7,8]);

return (
    <Container>
        
    {
        category.map((ct, i) => {
          return  <Category ct={ct} key={i} />
        })
    }
    </Container>
)

}

const Container = styled.div`
display: grid;
justify-content: center;
  grid-template-columns: repeat(4, minmax(50px, 1fr));
  grid-gap: 5rem;
  width: fit-content;
align-items: space-between;
  @media(max-width: 1020px) {
    display : grid;
    grid-template-columns: repeat(2, minmax(50px, 1fr));
}
`

export default Categories;