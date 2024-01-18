import React, { useState } from 'react'

function Cards() {

  const [fullname , setfullname] =useState('');
  const [password ,setpassword] =useState('');


  return (
    <div className='cards'> 
      
      <input type='text' placeholder='fullname' onClick={(e)=>{localStorage.setItem('name',fullname)}} onChange={(e)=>{setfullname(e.target.value)}}/>
      
      <input type='text' placeholder='password' onClick={(e)=>{localStorage.setItem('password',password) }} onChange={(e)=>{setpassword(e.target.value)}}/>
      value={password}  
    </div>
  )
}



export default Cards