import React from 'react'

function Features({image ,heading}) {
  return (
    <>

    <div className="flex flex-col hover:bg-slate-600 hover:text-white text-black rounded-lg justify-center h-[200px] w-[200px] items-center ">
        <img src={image} className='h-[80px] rounded-lg w-[80px]' alt="" />
        <h1 className='text-xl capitalize font-bold text-center '>{heading}</h1>
    </div>

    </>
  )
}

export default Features