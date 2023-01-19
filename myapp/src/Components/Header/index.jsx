import React from 'react'
import './home.css'
import './my.css'
//import Home from '../../pages/Mypage/Home'
import Search from './search'
//import { BrowserRouter,Link } from 'react-router-dom'
import { FaHome } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaBusinessTime } from 'react-icons/fa'
import { IoMdContacts } from "react-icons/io";
import {Link} from 'react-router-dom';
// import MyNetwork from './../../pages/Mypage/MyNetwork'
// import Home from './../../pages/Mypage/Home';
const Header = () => {
  return (

    <>
      <div className="navbar">
        <FaLinkedin className="home" />
        <Search />
      <div className="main-div">
      
        <div className="icons">        
        <Link to='/Home'>
          <FaHome size={25}/>  <br></br>    
          Home
          </Link>         
          {/* <span>Home</span> */}                
        </div>     
        <div className='icons'>
          <IoMdContacts  size={25}/>
          <Link to='/MyNetwork'>MyNetwork</Link>         
        </div>
        {/* <Routes>
        <Route path='/Home' element={<Home/>}/> 
     <Route path='/MyNetwork' element={<MyNetwork/>}/>
        </Routes> */}
        
        <div className='icons'>
        <FaBusinessTime size={25}/>
       <Link to='/Data'> Jobs</Link>
      </div>
    </div>
    </div>
     
      </>
  
  )
}

export default Header