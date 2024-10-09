import React from 'react'

function ContactCard({name,info,image}) {
  return (
    <>
    <div className="flex flex-wrap justify-center items-center mt-[60px] gap-[30px] ml-[50px]">
        <img src={image} className='h-[60px] w-[60px] rounded-full bg-slate-400' alt="call" />
   <div className="flex items-center flex-col ">
    <h1 className="font-bold text-xl">{name}</h1>
    <p className="text-slate-500 font-semibold">{info}</p>
   </div>
   
    </div>
    
    </>
  )
}

export default ContactCard