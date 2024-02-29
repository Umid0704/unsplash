'use client'
import React, { useState } from 'react'
import { IoMdClose } from "react-icons/io";
export default function NotificationsMenu({open}:Readonly<{open:boolean}>) {
    const [active, setActive]=useState<boolean>(false)
    const [text, setText]=useState<string>('Activity associated with your account will appear here.')
    const handleActive=():void=>{
        setActive(true)
        setText('Activity associated with your account will appear here.')
    }
    const handleNoActive=():void=>{
        setActive(false)
        setText('Important news, product updates, and milestones associated with your account will appear here.')

    }
    const closeBtn=()=>{
      open(false)
    }
  return (
    <div className='w-[100vw] h-[100vh] md:h-full md:w-[360px] bg-[#fff] md:rounded-xl '>
        <div className=' flex justify-between p-[16px] lg:hidden'>
            <p>Notifications</p>
            <span  onClick={closeBtn} ><IoMdClose className='w-[24px] h-[24px]'/></span>
        </div>
    <div>
    <div className='w-[100%] p-0'>
        <button onClick={handleActive} className={active === true ? 'w-[50%] p-[14px] text-black border-b-[3px] border-black' : "w-[50%] p-[14px] hover:text-black border-b-[2px] "} >Active</button>
        <button onClick={handleNoActive} className={active === false ? 'w-[50%] p-[14px] text-black border-b-[3px] border-black' : "w-[50%] p-[14px] hover:text-black border-b-[2px] "} >Highlights</button>
      </div>
      <div className='flex px-[68px] py-[100px]'>
       <p className='w-[226px] text-center'>{text}</p>
      </div>
    </div>
    
    </div>
  )
}
