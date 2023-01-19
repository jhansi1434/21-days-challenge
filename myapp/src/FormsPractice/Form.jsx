import React from 'react';
import {useForm} from "react-hook-form"
import *as yup from 'yup'
 import {yupResolver} from "@hookform/resolvers/yup"


const schema=yup.object().shape({
  firstName:yup.string().required(),
  lastname:yup.string().required(),
  age:yup.string().required(),
  category:yup.string().required(),
  phoneNumber:yup.number().required(),
  email:yup.string().required(),
   password:yup.string().min(8).max(10).required(),
}).required();
const Details = () => {
  const {register,handleSubmit,formState:{errors}}=useForm({
// defaultValues:{
//   firstName:''
// },

   resolver:yupResolver(schema),


});
console.log(errors);
  return (
   <form onSubmit={handleSubmit(d=>console.log(d))}>
     firstName:
    <input placeholder="firstName" {...register("firstName",{pattern:/\d+/})} /><br></br>
    <p>{errors.firstName?.message}</p><br></br>
    {/* {errors.firstName && <span>This field is required</span>}<br></br> */}
    lastname:
    <input {...register("lastname",{ minLength: 2 })} placeholder="Last name" /><br></br>
   <p> {errors.lastname?.message}</p><br></br>
    {/* {errors.firstName && <span>This field is required</span>}
    {errors.lastname && <span>This field </span>}<br></br> */}
    selection:
    <select {...register("category",{required:true})}>
      <option vlaue=""></option>
      <option value="A">selection a</option>
      <option value="B">selection b</option>
    </select><br></br>
   <p> {errors.category?.message}</p><br></br>
    {/* {errors.category &&(<span>select one</span>)}<br></br>  */}
     {/* <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />  */}
     age:
    <input type="number" {...register("age", {required:true, min: 1, max: 4 })} placeholder='age' /><br></br>
    <p>{errors.age?.message}</p><br></br>
    {/* {errors.age &&<span>age is required</span>}<br></br> */}
    phoneNumber:
    <input type="Number" name="phoneNumber"{...register("phoneNumber",{required:true,minLength:10})}/><br></br>
    <p>{errors.phoneNumber?.message}</p><br></br>
    {/* {errors.phoneNumber && errors.phoneNumber.type==="required" &&(<span> this
      is required</span>)}
      {errors.phoneNumber && errors.phoneNumber.type==="minLength" &&(<span> 10 digits
      is required</span>)}<br></br> */}
      password:
      <input  name='password' type="password" {...register("password")}/><br></br>
      <p> {errors.password?.message}</p><br></br>
      email:
      <input type="email"{...register("email")}required/><br></br>
      <p>{errors.email?.message}</p><br></br>
     
      {/* {errors.password && <span>strong password</span>}<br></br> */}
    <input type='submit'></input>
   </form>
  )
}

export default Details