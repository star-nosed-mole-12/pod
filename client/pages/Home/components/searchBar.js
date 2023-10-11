import React from "react";
import {useState} from 'react';
import styled from 'styled-components';

const SearchBar = () => {
    const [searchInput, setSearchInput] = useState("");

        const handleChange = (e) => {
            e.preventDefault();

        }

        return (
            <>
             <Search>
             <Table>
                <tr>
                    <td>
                    <StyledInput type="search" id="search" placeholder="Search"></StyledInput>
                    </td>
                    <td>
                        <a href="#" className="material-icons"></a>
                    </td>

                </tr>
            </Table>
      
        
        </Search>
        
            </>

        )
}

const Search = styled.div`
display: flex;
width: 30rem;
height : 4rem;
margin: auto;
margin-top: 2rem;
border: 4px solid black;
border-radius: 50px;
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
font-size: 2rem;
Border: none;
padding: 0px;
`
export default SearchBar;