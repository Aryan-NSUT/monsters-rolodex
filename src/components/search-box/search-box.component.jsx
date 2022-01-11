import React from "react";
import './search-box.styles.css';

export const SearchBox = ({placeholder,searchChange})=>(
    <input 
    type='search'
    placeholder={placeholder}
    onChange={searchChange}/>
)