import React, { useState } from 'react'
import Contactform from './Contactform'

function Contact() {
    const [showMypopup,setshowmypopup]= useState(false)
    const handelonclose = ()=> setshowmypopup(false)
  return (

    
    <div className='flex justify-center items-center pt-4 pb-4  h-80 bg-slate-800 gap-3'>
       <button onClick={()=> setshowmypopup(true)} className='bg-black text-white w-36 h-14 rounded-lg font-semibold hover:text-green-600'>Contact Me</button> 
       <Contactform onclose={handelonclose} Visible={showMypopup} />
        </div>
        
      
  )
}

export default Contact