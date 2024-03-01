import React, { useEffect, useState } from 'react'
// import { useLocation, useSearchParams } from 'react-router-dom'
import useImageStore from '../api/ImageLink'
import {  FcLike, FcLikePlaceholder} from "react-icons/fc";
import { FaDownload } from "react-icons/fa";
export default function NavPath ({value})   {
  const {image, getImg} = useImageStore()
  useEffect(()=>{
    getImg({searchImage:value?.pathName})  
  },[])
  const img_1 = image.splice(0,10)
  const img_2 = image.splice(0,10)
  const img_3 = image.splice(0,10)
  const [active, setactive]=useState(false)
  console.log(img_1)
  const handleLike2=(id, index)=>{
    getImg({searchImage:value?.pathName})
    if(img_2[index]?.id === id){
      if(active === true){
        setactive(false)
      }else{
        setactive(true)
        console.log(true)
        console.log(false)
      }
    }
  }
  const downloadImage =(item)=> {
    const imageUrl = item.urls.raw
    fetch(imageUrl)
      .then(response => response.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', `${item.slug}.jpg`); 
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      })
      .catch(error => {
        console.error('Error downloading the image: ', error);
      });
  }
  console.log(active)
  return (
    <div className='  '>
      <div className='lg:h-[594px] sm:h-[310px]  h-[210px] relative'>
        <img className='w-full h-full' src={value?.image} alt="" />
    <div className='absolute h-full w-[100%] top-0 flex items-center px-[] '>
    <div className='max-w-[1280px]  bg-center p-[12px] px-[120px] flex flex-col gap-4 '>
        <h1 className='text-white  font-bold text-[48px]'>{value?.title}</h1>
            <p className='text-[18px] text-white w-[600px] hidden sm:block'>
              {value?.disc}
            </p>
           <div> <button className={'bg-white px-[16px] rounded py-2 '}>Submit to <span className='font-bold'>{value?.title}</span></button></div>
        </div>
    </div>
      </div>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
        
      <div className='w-[100%]  flex flex-col gap-4'>
        {
          img_1?.map((item, index)=>(
            <div key={index} className='flex flex-col gap-4 relative'>
            <img src={item?.urls?.full} alt="" className=' bg-cover w-full'  />
            <div className=' absolute top-0 w-full h-full flex flex-col justify-between items-end  p-4 opacity-0 hover:opacity-100'>
              <div><button type='button' className={ active == true ?   'bg-red-500 px-[16px] rounded py-2  ' : 'bg-white px-[16px] rounded py-2 text-red-500'} onClick={()=>handleLike2(item.id, index)}><FcLike className={active === true ? ' hidden' : ' block'}  /><FcLikePlaceholder className={active === false ? ' hidden' : ' block'}  /></button></div>
              <div className='flex w-full justify-between ' >
              <div className='flex gap-3 items-center text-white'><img src={item.user.profile_image.small} className='rounded-[50%] bg-center ' alt="" /> <span>{item?.user?.first_name}</span></div>
              <button className='px-[16px] rounded py-2 bg-white' onClick={()=>downloadImage(item)}>  <FaDownload  className='text-black'/> </button></div>  
            </div>
            </div>
          ))
        }
        </div>
        <div className='w-[100%]  flex flex-col gap-4'>
        {
          img_2?.map((item, index)=>(
            <div key={index} className='flex flex-col gap-4 relative'>
            <img src={item?.urls?.full} alt="" className=' bg-cover w-full'  />
            <div className=' absolute top-0 w-full h-full flex flex-col justify-between items-end  p-4 opacity-0 hover:opacity-100'>
              <div><button type='button' className={ active == true ?   'bg-red-500 px-[16px] rounded py-2  ' : 'bg-white px-[16px] rounded py-2 text-red-500'} onClick={()=>handleLike2(item.id, index)}><FcLike className={active === true ? ' hidden' : ' block'}  /><FcLikePlaceholder className={active === false ? ' hidden' : ' block'}  /></button></div>
              <div className='flex w-full justify-between ' >
              <div className='flex gap-3 items-center text-white '><img src={item.user.profile_image.small} className='rounded-[50%] bg-center ' alt="" /> <span>{item?.user?.first_name}</span></div>
              <button className='px-[16px] rounded py-2 bg-white' onClick={()=>downloadImage(item)}>  <FaDownload  className='text-black'/> </button></div>  
            </div>
            </div>
          ))
        }
        </div>
        <div className='w-[100%]  flex flex-col gap-4'>
        {
          img_3?.map((item, index)=>(
            <div key={index} className='flex flex-col gap-4 relative '>
            <img src={item?.urls?.full} alt="" className=' bg-cover w-full '  />
            <div className=' absolute top-0 w-full h-full flex flex-col justify-between items-end  p-4 opacity-0 hover:opacity-100 '>
              <div><button type='button' className={ active == true ?   'bg-red-500 px-[16px] rounded py-2  ' : 'bg-white px-[16px] rounded py-2 text-red-500'} onClick={()=>handleLike2(item.id, index)}><FcLike className={active === true ? ' hidden' : ' block'}  /><FcLikePlaceholder className={active === false ? ' hidden' : ' block'}  /></button></div>
              <div className='flex w-full justify-between ' >
              <div className='flex gap-3 items-center text-[#fff] opacity-100  '><img src={item.user.profile_image.small} className='rounded-[50%] bg-center ' alt="" /> <span>{item?.user?.first_name}</span></div>
              <button className='px-[16px] rounded py-2 bg-white' onClick={()=>downloadImage(item)}>  <FaDownload  className='text-black'/> </button></div>  
            </div>
            </div>
          ))
        }
        </div>
      
        
      </div>
    </div>
  )
}
