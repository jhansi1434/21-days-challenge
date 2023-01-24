import React,{useEffect,useState} from 'react'
import {Link } from 'react-router-dom'
import  './studentDetails.scss';
import axios from 'axios';

const StudentDetails = () => {
   const[data,setData]=useState();

   const getData=async()=>{
    try{
      const url=' http://localhost:5000/data'
      const result=await axios.get(url);
      setData(result.data)
    }
    catch(err){console.log(err);}
    
   }
   
   useEffect(()=>{
    getData();
   },[])
   
  return (
    <>
    
   <Link to='/StudentForm'><button>add</button></Link>
   
   {data &&
   
   <table>
    <thead>
    <th>Name</th>
    
    <th>Roll Number</th>
    <th>English</th>
    <th>Telugu</th>
    <th>Hindi</th>
    <th>science</th>
    <th>Social</th>
    <th>activites</th>
    <th>total marks</th>
    <th></th>
    </thead>
    <tbody>
      {data.map((a)=>{
        return(
          <tr >
            <td>{a.Name}</td>
            <td>{a.RollNumber}</td>
            <td>{a.English}</td>
            <td>{a.Telugu}</td>
            <td>{a.Hindi}</td>
            <td>{a.Science}</td>
            <td>{a.Social}</td>
            <td>{a.activites}</td>
            <td>{a.total}</td>
            <td><Link to={`/StudentForm/${a.id}`}><button 
           
            >edit</button></Link></td>

          </tr>
        )
      })}
    </tbody>
    
    </table> }
   {/* <Link to='/StudentForms'> create</Link> */}
   
   </>
    
   
    
  )
}

export default StudentDetails