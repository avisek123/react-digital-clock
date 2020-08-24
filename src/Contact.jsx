import React, { useState } from 'react';
const Contact=()=>{
  const[data,setData]=useState({
    fullname:'',
    phone:'',
    email:'',
    msg:''

  });
  const formsubmit=(e)=>{
    e.preventDefault();
    alert(`My name is ${data.fullname}. My phone no. is ${data.phone}. My email is ${data.email} . Here I want to say
    :- ${data.msg} `)

  }
  const handleChange=(e)=>{
    const {name,value}=e.target;
    setData(()=>{
      return{
        ...data,
        [name]:value,
      } 
    })

  }
  return(
      <>
      <div className='my-5'>
      <h1 className='text-center'>Contact Us</h1>

      </div>
      <div className='container contact_div'>
        <div className='row'>
          <div className='col-md-6 col-10 mx-auto'>
          <form onSubmit={formsubmit}>
  <div class="form-group">
    <label for="exampleFormControlInput1">Full Name</label>
    <input type="text" class="form-control" id="exampleFormControlInput1"
    name='fullname' 
    value={data.fullname}
    onChange={handleChange}
     placeholder="Enter your fullname" />

  </div>
  <div class="form-group">
    <label for="exampleFormControlInput1">Phone</label>
    <input type="number" class="form-control" id="exampleFormControlInput1"
    name='phone' 
    value={data.phone}
    onChange={handleChange}
  
     placeholder="Enter your mobile no." />

  </div>
  <div class="form-group">
    <label for="exampleFormControlInput1">Email address</label>
    <input type="email" class="form-control" id="exampleFormControlInput1"
    name='email' 
    value={data.email}
    onChange={handleChange}
  
     placeholder="name@example.com" />

  </div>
  
  <div class="form-group">
    <label for="exampleFormControlTextarea1">Message</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" value={data.msg} name='msg'
    onChange={handleChange}
     rows="3"></textarea>
  </div>
  <button class="btn btn-outline-primary" type="submit">Submit form</button>
</form>

          </div>
        </div>

      </div>
      </>
  );
}
export default Contact;