import React from 'react'

function PricingCard({name, service,tool1,tool2,valid,price}) {
  return (
    <>
    <div className="text-center p-[40px] mt-[30px] rounded-lg shadow-xl hover:bg-slate-600 hover:text-white  flex flex-col gap-[30px]">
        <h1 className="font-bold text-2xl">{name}</h1>
        <p className="font-semibold">{service}</p>
        <p className="font-semibold">{tool1}</p>
        <p className="font-semibold">{tool2}</p>
        <p className="font-semibold">{valid}</p>
        <h2 className="font-bold text-2xl">{price}</h2> 
        <button className='border-2 px-[40px] py-[5px] font-bold text-lg  hover:text-black  rounded-lg'>Buy now</button>
    </div>
    
    </>
  )
}

export default PricingCard