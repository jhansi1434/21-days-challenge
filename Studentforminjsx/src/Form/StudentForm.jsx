import React from 'react'
import {FormProvider, useFieldArray, useForm } from "react-hook-form"
import { useEffect } from 'react'
// import { SubmitHandler } from 'react-hook-form';
import *as yup from 'yup'
import {yupResolver} from "@hookform/resolvers/yup"
  //  import { useState,useEffect } from 'react';
  //  import {useNavigate, useParams} from 'react-router-dom'
  //  import axios from "axios";
  import {Link, useAsyncError, useParams} from 'react-router-dom'
  import '../StdentDetails/studentDetails.scss'
  import { useNavigate } from 'react-router-dom'
import { SubmitHandler } from 'react-hook-form'
import axios from 'axios';


const schema=yup.object().shape({
    Name:yup.string(),
    RollNumber:yup.number(),
    English:yup.number(),
  Telugu:yup.number(),
  science:yup.number(),
  social:yup.number(),
  Hindi:yup.number(),
  total:yup.number(),
})

const StudentForm = () => {
    const StudentFormMethods =useForm({
        resolver: async(data, context, options)=>{
          //console.log(data,context,options)
          return yupResolver(schema)(data,context,options)
          
        }
      
    });
    // const [data,submitdata]=React.useState();
    const submit=useNavigate();
   
    const id=useParams();
    // const {update}=useFieldArray({name:'value'})
    // update(0,{})
   
    const [submitData,setSubmitData]=React.useState();
    const StudentFormSubmit= async (data

    )=>{
       setSubmitData(data);
       if(id.id){
        editForm(data);
       }else{
       createForm(data);}
      //  StudentForm.reset({});
       submit('/StudentDetails')
     
    };



const [data,setData]=React.useState();
const createForm= async(data)=>{
  const generateid=Math.random();
  const newData={...data,'id':generateid}
  try{
    const result=await axios.post(`http://localhost:5000/data`,newData);
    setData(result.data);

  }
  catch(error){
    console.log(error)
  }
}
  const editForm= async(data)=>{
    try{
      const result=await axios.put(`http://localhost:5000/data/${id.id}`,data)
      setData(result.data)
    }
    catch(err){
      console.log(err)
    }
  }  

  const getStudentData=async()=>{
    try {
      const result= await axios.get(`http://localhost:5000/data/${id.id}`);
      setData(result.data);
    }
    catch(err){
      console.log(err)
    }
  }
    
  useEffect(()=>{
     getStudentData();
  },[id]);


  useEffect(()=>{
    data&&

    // Object.entries(data.foreach(([name,value])=>{
    //   StudentForm.setValue('name','value');
    // }
    // ))

    Object.entries(data).forEach(([key,val])=>{
      StudentFormMethods.setValue(key,val,{shouldValidate:true})
    })

   console.log(data)
  },[data]);
    
    console.log(StudentFormMethods.formState.errors);
  return (
    <div className='main'>
      <h1>Create profile</h1><hr></hr>
     <FormProvider {...StudentForm}>
    <form  className='main__form'onSubmit={StudentFormMethods.handleSubmit(StudentFormSubmit)}>
      Name:
      <input  placeholder='Enter Name' {...StudentFormMethods.register("Name")} />
      <p>{StudentFormMethods.formState.errors.Name?.message}</p>
      Roll number:
      <input placeholder=' Enter Roll number'{...StudentFormMethods.register("RollNumber")}/>
      <p>{StudentFormMethods.formState.errors.RollNumber?.message}</p>
     <h3> Subjects:-</h3>
     English:
     <input placeholder='Enter marks'{...StudentFormMethods.register("English")}/>
     <p>{StudentFormMethods.formState.errors.English?.message}</p>
     Telugu:
     <input placeholder='Enter marks'{...StudentFormMethods.register("Telugu")}/>
     <p>{StudentFormMethods.formState.errors.Telugu?.message}</p>
     Hindi:
     <input placeholder='Enter marks'{...StudentFormMethods.register("Hindi")}/>
     <p>{StudentFormMethods.formState.errors.Hindi?.message}</p>
     Science:
     <input placeholder='Enter marks'{...StudentFormMethods.register("Science")}/>
     <p>{StudentFormMethods.formState.errors.science?.message}</p>
     Social:
     <input  placeholder='Enter marks'{...StudentFormMethods.register("Social")}/>
     <p>{StudentFormMethods.formState.errors.Social?.message}</p>
     Activites:
     <input {...StudentFormMethods.register("activites")}/>
     <p>{StudentFormMethods.formState.errors.English?.message}</p>
     Total marks:
     <input {...StudentFormMethods.register("total")} />
     <p>{StudentFormMethods.formState.errors.total?.message}</p>
     <input className='main__submit' type="submit"  />
     {/* const update=getprops(item); */}
     

    </form>
    </FormProvider>
   
    </div>
    
  )
}

export default StudentForm