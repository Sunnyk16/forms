import React, { useState } from 'react'

function Cards() {

  const [fullname , setfullname] =useState('');
  const [password ,setpassword] =useState('');

  const addname=(e)=>{
    setfullname(e.target.value)}

    const adddetails=()=>{

      const existingdata=JSON.parse(localStorage.getItem('details')|| []);
      const newdata =[...existingdata ,{'name':fullname , 'password':password}]
      localStorage.setItem('details' ,JSON.stringify(newdata));
      setfullname('');
      setpassword('');
    }


  return (
    <div className='container '>
      <h1 className='text-center text-capitalize'>Sign in</h1>
      <div className='card rounded border-1 p-3 shadow-lg'> 
      
      <input type='text' className='form-control m-1' placeholder='fullname' onChange={addname} />
      
      <input type='text' className='form-control m-1' placeholder='password'  onChange={(e)=>{setpassword(e.target.value)}}/>
      <button className='btn btn-danger m-1 w-25 mx-auto' onClick={adddetails}> sign in</button>
    </div>
    </div>
  )
}



export default Cards