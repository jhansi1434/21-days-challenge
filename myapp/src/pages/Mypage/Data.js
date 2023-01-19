import React, { useEffect,useState } from 'react'
import axios from 'axios'
function Data  ()  {
  const[mydata,setmydata]=useState();
  const main=async()=>{
  const mydata1=await axios.get("https://jsonplaceholder.typicode.com/posts")
  const result=mydata1.data;
  console.log(result)
  setmydata(result)
  }
  useEffect(()=>{
    main()
  },[])
  return (
  <div>
    {mydata?.map((x)=>(<ul><li>{x.title}</li></ul>))} 
    </div>
    
  )
}

export default Data