"use client";
import React, { useState } from "react";
import { BsTwitter } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import { FaXTwitter, FaPeopleGroup } from "react-icons/fa6";
import { FaChevronLeft, FaFacebookF, FaInstagram } from "react-icons/fa";
import { MdOutlineMapsHomeWork, MdOutlineFilterNone } from "react-icons/md";
import { IoDocumentTextOutline } from "react-icons/io5";
export default function BarsMenu() {
  const [active, setActive] = useState<boolean>(false);
  const [company, setCompany] = useState<boolean>(false);
  const [product, setProduct] = useState<boolean>(false);
  const [community, setCommunity] = useState<boolean>(false);
  const [legal, setLegal] = useState<boolean>(false);
  const [text, setText] = useState<string>(
    "Activity associated with your account will appear here."
  );
  const openLegal = (): void => {
    if (legal === false) {
      setLegal(true);
    } else {
      setLegal(false);
    }
  };
  const openCompany = (): void => {
    if (company === false) {
      setCompany(true);
    } else {
      setCompany(false);
    }
  };
  const openProduct = (): void => {
    if (product === false) {
      setProduct(true);
    } else {
      setProduct(false);
    }
  };
  const openCommunity = (): void => {
    if (community === false) {
      setCommunity(true);
    } else {
      setCommunity(false);
    }
  };

  return (
    <div className="bg-[#fff] flex gap-[8px] flex-wrap lg:overscroll-none  overflow-y-auto max-h-[400px]  px-[24px] py-[16px] lg:w-[644px]">
      <div  className="w-[100%] lg:w-[32%]">
        <p onClick={openCompany}  className="text-black font-semibold flex gap-[5px] items-center justify-between cursor-pointer lg:cursor-text ">
          <span className="flex items-center gap-[5px]">
            <MdOutlineMapsHomeWork className="w-[24px] h-[24px]  " />
            Company
          </span>
          <FaChevronLeft
            className={company === true ? "rotate-90 text-[#767676] lg:hidden" : "-rotate-90 text-[#767676] lg:hidden " }/>
        </p>
        <ul
          className={
            company === true ? "flex flex-col w-[100%] pl-0 lg:pl-[28px]  gap-[8px]" :  "pl-0 lg:pl-[28px] hidden lg:flex flex-col w-[100%]  gap-[8px] "
          }
        >
          <li className=" cursor-pointer hover:text-black">About</li>
          <li className=" cursor-pointer hover:text-black">Advertise</li>
          <li className=" cursor-pointer hover:text-black">History</li>
          <li className=" cursor-pointer hover:text-black">Join the team</li>
          <li className=" cursor-pointer hover:text-black">Press</li>
          <li className=" cursor-pointer hover:text-black">Contact us</li>
          <li className=" cursor-pointer hover:text-black">Help Center</li>
          <li className=" flex gap-2">
            <FaXTwitter  className=" hover:text-black cursor-pointer w-[24px] h-[24px]" />
            <FaFacebookF className=" hover:text-black cursor-pointer w-[24px] h-[24px]" />
            <FaInstagram className=" hover:text-black cursor-pointer w-[24px] h-[24px]" />
          </li>
        </ul>
      </div>
      <div className="w-[100%] lg:w-[32%]">
        <p
          onClick={openProduct}
          className="text-black font-semibold flex items-center justify-between cursor-pointer lg:cursor-text"
        >
          <span className="flex items-center gap-[5px]">
            <MdOutlineFilterNone className="w-[24px] h-[24px]" />
            Product
          </span>
          <FaChevronLeft
            className={company === true ? "rotate-90 text-[#767676]  lg:hidden " : "-rotate-90 text-[#767676] lg:hidden "}/>
        </p>
        <ul
          className={product === true ? "flex flex-col w-[100%] gap-[8px] pl-0 lg:pl-[28px]" : "pl-0 lg:pl-[28px] hidden lg:flex flex-col w-[100%]  gap-[8px] "}>
          <li className=" text-transparent bg-clip-text hover:bg-gradient-to-r hover:from-blue-500 hover:cursor-pointer hover:to-pink-500 bg-gradient-to-r from-purple-800 to-blue-500 lg:hidden">
            Unsplash+
          </li>
          <li className=' cursor-pointer hover:text-black'>Developers/API</li>
          <li className=' cursor-pointer hover:text-black'>Unsplash-Datenset</li>
          <li className=' cursor-pointer hover:text-black'>Unsplash for iOS</li>
          <li className=' cursor-pointer hover:text-black'>Apps & Plugins</li>
        </ul>
      </div>
      <div className="w-[100%] lg:w-[33%]">
        <p onClick={openCommunity} className="text-black font-semibold flex items-center justify-between cursor-pointer lg:cursor-text" >
          <span className="flex gap-[5px]">
            <FaPeopleGroup className="w-[24px] h-[24px]" />
            Community
          </span>
          <FaChevronLeft
            className={company === true ? "rotate-90 text-[#767676] lg:hidden " : "-rotate-90 text-[#767676]  lg:hidden" }/>
        </p>
        <ul className={community === true ? "pl-0 lg:pl-[28px] flex flex-col  gap-[8px]" : "pl-0 lg:pl-[28px] hidden lg:flex flex-col w-[100%]  gap-[8px] "} >
          <li>Become a Contributor</li>
          <li>Topics</li>
          <li>Collections</li>
          <li>Trends</li>
          <li>Unsplash Awards</li>
          <li>State</li>
        </ul>
      </div>
      <div className="bg-gray-700 rounded-[5px] w-[100%] h-[2px] hidden lg:block"></div>
      <div className="w-[100%]">
        <p onClick={openLegal} className="text-black font-semibold flex items-center justify-between cursor-pointer lg:cursor-text lg:hidden">
          <span className="flex items-center gap-[5px]">
            <IoDocumentTextOutline />
            Legal
          </span>
          <FaChevronLeft className={company === true ? "rotate-90 text-[#767676] lg:hidden " : "-rotate-90 text-[#767676] lg:hidden "}
          />
        </p>
        <ul className={ legal === true ? " w-[100%]  lg:flex   gap-[8px]" : " hidden lg:flex  lg:w-[100%]  gap-[8px] "}>
          <li className='my-[8px]'>License</li>
          <li className='my-[8px]'>Privacy Police</li>
          <li className='my-[8px]'>Terms</li>
          <li className='my-[8px]'>Security</li>
        </ul>
      </div>
      <div className="bg-gray-700 rounded-[5px] w-[100%] h-[2px]  lg:hidden"></div>
       <span className='text-center px-4 py-2 bg-[#eee] w-[150px] rounded-md  lg:hidden hover:cursor-not-allowed' >Submit a photo</span>

    </div>
  );
}
