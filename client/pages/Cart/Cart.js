import React from "react";
import styled from "styled-components";
import { BiCart } from "react-icons/bi"; 
// import { useSelector } from "react-redux";


const Item = ({item}) => {

    return (
        <Container>
            <p className="text"> <strong>Item:</strong>{item}
            <br></br>
            <strong>Quantity:</strong>1</p>
            <div className="Buttons">
            <button>+</button>
            <button>-</button>
            </div>
           
          
            
        </Container>
    );
};


const Cart = () => {

    // const products = useSelector((state) => state.cart.checkout)
    // const total = useSelector((state) => state.cart.total);
    // console.log(products);
   
    let output;
    output = ["test", "test1", "test2", "test3"];
    const display = (output) => {
        
        // if(Array.isArray(output)) {
            return (
                <div>
                    {output.map((item, i)=> (
                        <Display>
                     <Item key={i} item={item} />
                        </Display>
                    ))}
                </div>
            )
        // }

        // return output;
    }

    return(

        <CartContainer>
            
            <div>
            <h2>My Cart <a>{<BiCart/>}</a></h2>
           
            <hr></hr>
            {display(output)}
            </div>

            <Checkout>
                <h2>Checkout</h2>

                <strong>Shipping cost :</strong>
                <p></p>
                <strong>Discount : </strong>
                <p></p>
                <hr></hr>
                <span><strong>Total : </strong></span>  
                <p></p>
                
                <button>checkout</button>
            </Checkout>
        
        </CartContainer>
    )
}


const Display = styled.div`
gap: 1rem;
margin-top: 0.5rem;
`
const Container = styled.div`
color: white;
width : 90%;
height : 7rem;
display : grid;
margin: auto;
background-color : grey;
grid-template-columns :  2fr 1fr;

.Buttons {
    display: flex;
    flex-direction: column;
    
    button {
        height: 50%;
    }
}
`;
const CartContainer = styled.div`
margin-top: 1.5rem;
display: grid;
grid-template-columns : 2fr 1fr;
text-align: center;
width: 100%;

 
`

const Checkout = styled.div`
margin-top: 2.5rem;
background-color : white;
display: flex;
flex-direction: column;
align-items: center;

button {
    color: white;
   font-size: 1rem;
   text-align: center;
    width : 80%;
    height: 2rem;
    background-color: #2E97A7;
}

`
export default Cart;