import React from 'react'

export default function UserModal() {
  return (
   <div className='  md:w-[210px] p-[16px] bg-[#fff] rounded-xl '>
    <ul className='flex flex-col  gap-[8px]'>
      <li className='md:hidden'>Notifications</li>
      <li>View profile</li>
      <li>Stats</li>
      <li>Account settings</li>
      <buttom type="button" className='text-center px-4 py-2 bg-[#eee] w-[150px] rounded-md  hover:cursor-not-allowed' >Submit a photo</buttom>
      <hr />
      <li>user@gmail.com</li>
    </ul>
   </div>
  )
}
