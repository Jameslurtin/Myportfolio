import React from 'react'

function About() {
  return (
    <div>
    <div className='flex justify-center bg-gray-800 text-white font-bold text-xl'> About me</div>
    <div className='font-semibold bg-purple-700 text-white flex  flex-col justify-center items-center gap-1 pb-3 pt-3'>
   
      <div className='bg-slate-500 text-slate-950'>Education details</div>
      <div className='bg-black text-white flex flex-col justify-center items-center p-3 py-2'>Masters in computer science Engineering 
      <div>
        Epita School of computer science and Engineering </div>
        <div>Paris (France)</div>
       

      </div>
      <div className='bg-black text-white flex flex-col justify-center items-center p-3 py-2 '>Bacholar in Computer science Engineering
        <div> Easwari Engineering College </div>
          <div> chennai(India, Tamilnadu)</div>
       
      </div>
      <div className='bg-black text-white flex flex-col justify-center items-center p-3 py-2'> Diploma in Computer science Engineering
        <div> CIT sandwich polytechnic College
        </div>
        <div> coimbatore(India, Tamilnadu)</div>
      </div>
      <div className='bg-slate-500 text-slate-950'>Experience</div>
      <div className='bg-black text-white flex flex-col justify-center items-center p-3 py-2'>  
        <div> I have 6 months of experience at Altos Technologies.
        </div>
        <div> as a Reactjs developer </div>
      </div>
    </div>
    </div>
  )
}

export default About