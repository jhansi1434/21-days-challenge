import React from 'react'
import './home.css'
import {AiOutlineSearch} from 'react-icons/ai'
const Search = () => {
  return (
    <>
     
    <input  className=" search" type="search" placeholder='search...'/>
    <AiOutlineSearch className='posi'/>
    
    </>
  )
}

export default Search