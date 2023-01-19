import React from 'react';
//import Header from './Components/Header';
// import Home from '././pages/Mypage/Home'
import Header from './Components/Header';
//import { BrowserRouter } from 'react-router-dom';
 import Home from './pages/Mypage/Home.js';
import MyNetwork from './pages/Mypage/MyNetwork'
import Details from './FormsPractice/Form';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Data from './pages/Mypage/Data'
function App() {
  return (
    <>
    
   {/* <Home/> */}
  
   <BrowserRouter>
   <Header/>
   
   <Routes>
   {/* <Route path='/' element={<Home/>}/>  */}
        <Route path='/Home' element={<Home/>}/> 
     <Route path='/MyNetwork' element={<MyNetwork/>}/>
     <Route path='/Data' element={<Data/>}/>
     
        </Routes>
        <Details/>
        </BrowserRouter>
   {/* <BrowserRouter>  */}
    {/* <Link to='/Home'>home</Link> 
    <Link to='/Header'>header</Link>  */}
   {/* <Routes>  */}
   {/* <Route path='/' element={<Home/>}/>  */}
    {/* <Route path='/Home' element={<Home/>}/> 
     <Route path='/MyNetwork' element={<MyNetwork/>}/>  */}
    
   {/* </Routes>  */}
   {/* </BrowserRouter> */}
   </>
  )
}

export default App;
