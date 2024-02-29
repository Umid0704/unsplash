'use client'
import React, { useState } from 'react'
import { FaUnsplash, FaSearch, FaBell,FaBars} from "react-icons/fa"
import BarsMenu from './madal/BarsMenu'
import NotificationsMenu from './madal/NotificationsMenu'
import UserModal from './madal/UserModal'
import { Link, useNavigate } from 'react-router-dom'
import useImageStore from '../api/ImageLink'
export default function Navbar() {
  const navigate = useNavigate()
  const {image, getImg} = useImageStore()
 const [openNotifications, setOpenNotifications]=useState(false)
 const [openBarsMenu, setOpenBarsMenu]=useState(false)
 const [openUserMenu, setOpenUserMenu]=useState(false)
 const OpenNotification=()=>{
  console.log('click')
      if(openUserMenu === false){
        setOpenNotifications(true)
      }else if(openUserMenu === true){
        setOpenNotifications(false)
      }
 }
 const openBars=()=>{
      if(openBarsMenu === false){
        setOpenBarsMenu(true)
      }else{
        setOpenBarsMenu(false)

      }
 }
 const openuserModel=()=>{
      if(openUserMenu === false){
        setOpenUserMenu(true)
      }else{
        setOpenUserMenu(false)

      }
 }
 const handleSearch=(e)=>{
  
e.preventDefault()

getImg({searchImage:e.target[0].value})
navigate('/')
 }
 console.log(image)
  return (
    <nav className='px-[20px] py-[11px] flex items-center justify-between text-[#767676] bg-[#fff]'>
      <Link to='/'>
      <FaUnsplash className='w-[32px] h-[32px] flex text-black '/>
      </Link>
       <div className='bg-[#eee] flex  rounded-[20px] items-center px-[12px] w-[100%]  md:w-[60%] justify-between mx-[16px] '>
        <form className='flex items-center w-[100%] '  onSubmit={handleSearch}>
        <label htmlFor="search" className='w-[32px] h-[40px] flex items-center  justify-center '><FaSearch className='hover:text-black w-[20px] h-[20px]'/></label>
        <input className='bg-transparent placeholder:text-[#767676] px-2 pl-2 w-[90%] outline-none  border-black' type="search" name="search" id="search" placeholder='Search' />
       <button  type='submit'></button>
        </form>
       </div>
       <div className='flex items-center gap-[16px] '>
       <div className=' hidden lg:flex px-[6px] gap-[16px] items-center                                  '>
        <span className='hover:text-black  hover:cursor-pointer'>Advertise</span>
        <span className='hover:text-black  hover:cursor-pointer'>Blog</span>
        <span className=' hover:delay-150   text-transparent bg-clip-text hover:bg-gradient-to-r hover:from-blue-500 hover:cursor-pointer hover:to-pink-500 bg-gradient-to-r from-purple-800 to-blue-500 '>Unsplash+</span>

       </div>
      <div>
   <div className=' relative'>
   <div className='hidden md:flex gap-[16px] items-center '>
       <span  className='text-center px-4 py-2 bg-[#eee] w-[150px] rounded-md hover:cursor-not-allowed ' >Submit a photo</span>
        <FaBell onClick={OpenNotification}  className='hover:text-black w-[24px] h-[100%]' />
       </div>
        <div className={openNotifications === true ? '   top-[0px] left-0 h-[100vh] md:h-auto w-[100vw]  md:w-[360px]   fixed md:absolute md:top-[60px] md:border md:left-[-165px]  md:rounded-lg md:shadow-md' : 'hidden'} >
          <div className=' relative '>
            <div className='absolute  bg-white w-[12px] h-[12px] right-[12px] top-[-6px] border-l border-t rotate-45 '></div>
            </div>
        <NotificationsMenu open={setOpenNotifications}/>
        </div>
   </div>
      </div>
        <span onClick={openuserModel} className='  hover:text-black rounded-[50%] w-[32px] h-[32px] bg-cover '>
          <img src=" ../../../public/favicon.ico" alt="" />
        </span>
       <div className=' relative'>
       <div className={openUserMenu === true ? '  top-[55px]  right-[40px] h-auto    w-[220px]  absolute  border rounded-lg shadow-md' : 'hidden'} >
          <div className=' relative'>
            <div className='absolute  bg-white w-[12px] h-[12px] right-[12px] top-[-6px] border-l border-t rotate-45 '></div>
            </div>
        <UserModal />
        </div>
         <button onClick={openBars}><FaBars className='hover:text-black w-[24px] h-[24px]' /></button>
        <div className={openBarsMenu === true ? '  top-[55px]  right-0 h-auto   md:w-[664px] w-[220px]  absolute  border rounded-lg shadow-md' : 'hidden'} >
          <div className=' relative'>
            <div className='absolute  bg-white w-[12px] h-[12px] right-[12px] top-[-6px] border-l border-t rotate-45 '></div>
            </div>
        <BarsMenu />
        </div>

       </div>
       <div className=' relative'>
       

       </div>

       </div>
    </nav>
  )
}
