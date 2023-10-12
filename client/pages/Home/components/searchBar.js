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
             <span>All Categories</span>
            <hr />
           <input type="text" placeholder="search"></input>
           <button>
            <BiSearch />
           </button>
        </Search>
        
            </>

        )
}

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

export default SearchBar;