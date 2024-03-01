"use client";
import { Link, useSearchParams } from "react-router-dom";
import React, { useState } from "react";
import useImageStore from "../api/ImageLink";
import { FcLeft, FcRight } from "react-icons/fc";

export default function NavFooter({value, path}) {
  const {image, getImg} = useImageStore()

  // const [link, setLink] = useState([
  //   {
  //     id:1,
  //     title: "Cool Tones",
  //     pathName: "cool-tones",
  //     disc: "Explore the magic of the season with cool tones. Where icy blues, purples, greens and grays paint a serene canvas. Embrace the beauty of cool colors to infuse a sense of tranquility into your images. From frost-kissed landscapes to subtle macro details, let the colour palette of the season be the focus of your compositions. ",
  //     image:'https://images.unsplash.com/photo-1708974474178-ad6d33b40709?auto=format&auto=compress&dpr=1&h=594&q=45&w=1999&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHx8fA%3D%3D 1x, https://images.unsplash.com/photo-1708974474178-ad6d33b40709?auto=format&auto=compress&dpr=2&h=594&q=45&w=1999&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHx8fA%3D%3D 2x',
  //   },
  //   {
  //     id:2,
  //     title: "Wallpapers",
  //     pathName: "wallpapers",
  //     disc: "From epic drone shots to inspiring moments in nature — submit your best desktop and mobile backgrounds.",
  //     image:'https://images.unsplash.com/photo-1600517244515-c043b4c18415?auto=format&auto=compress&dpr=1&h=594&q=45&w=1999&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHx8fA%3D%3D',
  //   },
  //   {
  //     id:3,
  //     title: "Nature",
  //     pathName:"nature",
  //     disc: "Nature's wonders take center stage in this category, where photographers capture the breathtaking landscapes, diverse flora and fauna, and mesmerizing natural phenomena that adorn our planet. From grand vistas to macro shots, these images transport viewers into the heart of the great outdoors.",
  //     image:'https://images.unsplash.com/photo-1708935838044-632cada56bbe?auto=format&auto=compress&dpr=1&h=594&q=45&w=1799&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHx8fA%3D%3D',
  //   },
  //   {
  //     id:4,
  //     title: "3D Renders",
  //     pathName:"3d-renders",
  //     disc:'Blending technology and artistry, the 3D Renders category showcases digitally rendered creations that blur the lines between reality and imagination. From architectural visualizations to fantastical worlds, this category exhibits the limitless possibilities of digital craftsmanship.',
  //     image:"https://images.unsplash.com/photo-1699256239890-e9eeaae66c68?auto=format&auto=compress&dpr=1&h=594&q=45&w=1999&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHx8fA%3D%3D"
  //   },
  //   {
  //     id:5,
  //     title: "Travel",
  //     pathName:"travel",
  //     disc:'Embark on a visual journey around the globe with this category, as photographers capture the essence of exploration and wanderlust. Through vibrant street scenes and immersive cultural experiences, the Travel category showcases the beauty and diversity of destinations near and far. ',
  //     image:"https://images.unsplash.com/photo-1708772412685-318cbad063e7?auto=format&auto=compress&dpr=1&h=594&q=45&w=1999&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHx8fA%3D%3D"
  //   },
  //   {
  //     id:6,
  //     title: "Architecture & Interiors",
  //     pathName:"architecture-interiors",
  //     disc:'Celebrating the artistry of spaces, this category recognizes exceptional photography that captures the essence of architectural marvels and interior designs. From sweeping cityscapes to intimate details, entrants showcase the beauty and functionality of built environments.',
  //     image:'https://images.unsplash.com/photo-1708479763975-dedd3f7a0db2?auto=format&auto=compress&dpr=1&h=594&q=45&w=1999&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHx8fA%3D%3D '
  //   },
  //   {
  //     id:7,
  //     title: "Street Photography",
  //     pathName:"street-photography",
  //     disc:"When the streets around you become your canvas, what can you discover? From quiet passages in charming towns to the hustle and bustle of larger cities — this category examines street photography in every form.",
  //     image:"https://images.unsplash.com/photo-1708920965340-ef77ddba0163?auto=format&auto=compress&dpr=1&h=594&q=45&w=1999&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHx8fA%3D%3D"
  //   },
  //   {
  //     id:8,
  //     title: "Fim",
  //     pathName:"film",
  //     disc:"Embracing the nostalgia and artistry of analog photography, this category pays tribute to the timeless beauty of film. Photographers capture moments with the rich textures, unique color palettes, and inherent imperfections that make film photography a cherished medium. From dreamy landscapes to intimate portraits, this category celebrates the enduring allure of capturing light on emulsion.",
  //     image:"https://images.unsplash.com/photo-1708802844519-6d46be069851?auto=format&auto=compress&dpr=1&h=594&q=45&w=1999&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHx8fA%3D%3D"
  //   },
  //   {
  //     id:9,
  //     title: "Archival",
  //     pathName:"archival",
  //     disc:"The Archival Topic explores captivating art and photography from renowned galleries, museums, and cultural institutions around the world who use Unsplash to showcase their archives.  Journey through the pages of history, catching glimpses of our ancestors' stories, struggles, triumphs, and the timeless beauty of creative expression.",
  //     image:"https://images.unsplash.com/photo-1585228395344-9d66fd1acfdb?auto=format&auto=compress&dpr=1&h=594&q=45&w=1999&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHx8fA%3D%3D"
  //   },
  //   {
  //     id:10,
  //     title: "Experimental",
  //     pathName:"experimental",
  //     disc:"The Experimental category invites photographers to push the boundaries of conventional photography. With innovative techniques, unique perspectives, and unconventional subjects, this category is a playground for artistic exploration and boundary-defying creativity.",
  //     image:"https://images.unsplash.com/photo-1640191233947-eb3dd51ae299?auto=format&auto=compress&dpr=1&h=594&q=45&w=1999&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHx8fA%3D%3D"
  //   },
  //   {
  //     id:11,
  //     title: "Animals",
  //     pathName:"animals",
  //     disc:"This category pays homage to the fascinating world of animals. Photographers capture the diversity, behavior, and beauty of creatures from across the globe, bringing the animal kingdom closer to the viewer's heart and lens.",
  //     image:"https://images.unsplash.com/photo-1595344253433-6baa8e8798f9?auto=format&auto=compress&dpr=1&h=594&q=45&w=1999&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHx8fA%3D%3D"
  //   },
  //   {
  //     id:12,
  //     title: "Fashion & Beauty",
  //     pathName:"fashion-beauty",
  //     disc:"In this category, photography becomes a canvas for artistic expressions of fashion and beauty. Through expertly composed images, photographers capture trends, styles, and personal statements, transforming models into walking works of art.",
  //     image:"https://images.unsplash.com/photo-1643865759959-fec225df0852?auto=format&auto=compress&dpr=1&h=594&q=45&w=1999&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHx8fA%3D%3D"
  //   },
  //   {
  //     id:13,
  //     title: "People",
  //     pathName:"people",
  //     disc:"People are the focal point of this category, where photographers skillfully depict the human experience. From candid moments to formal portraits, this category showcases the myriad emotions, cultures, and stories that define us.",
  //     image:"https://images.unsplash.com/photo-1708743952250-eca1e89620e8?auto=format&auto=compress&dpr=1&h=594&q=45&w=1999&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHx8fA%3D%3D"
  //   },
  //   {
  //     id:14,
  //     title: "Spirituality",
  //     pathName:"spirituality",
  //     disc:"Photography has the ability to examine life's big questions, by exploring themes of love, loss, healing and human connection.",
  //     image:"https://images.unsplash.com/photo-1707073784945-f9e6cf20e5d3?auto=format&auto=compress&dpr=1&h=594&q=45&w=1999&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHx8fA%3D%3D"
  //   },
  //   {
  //     id:15,
  //     title: "Business & Work",
  //     pathName:"business-work",
  //     disc:"Reflecting the realities of the modern workplace in their many forms — from images of remote working and start-ups to shots of engineers and artists at work.",
  //     image:"https://images.unsplash.com/photo-1582807129843-8a00296ccb37?auto=format&auto=compress&dpr=1&h=594&q=45&w=1999&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHx8fA%3D%3D"
  //   },
  //   {
  //     id:16,
  //     title: "Food & Drink",
  //     pathName:"food-drink",
  //     disc:"From simple home-cooked dinners at home, to tasting new dishes while traveling — food connects us all. This category examines the world of food photography, with shots of everything from summer picnics in the park to decadent deserts.  ",
  //     image:"https://images.unsplash.com/photo-1553292218-4892c2e7e1ae?auto=format&auto=compress&dpr=1&h=594&q=45&w=1999&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHx8fA%3D%3D"
  //   },
  //   {
  //     id:17,
  //     title: "Health & Wellness",
  //     pathName:"health-wellness",
  //     disc:"From simple home-cooked dinners at home, to tasting new dishes while traveling — food connects us all. This category examines the world of food photography, with shots of everything from summer picnics in the park to decadent deserts.  ",
  //     image:"https://images.unsplash.com/photo-1646948403104-a48e3b2addf7?auto=format&auto=compress&dpr=1&h=594&q=45&w=2199&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHx8fA%3D%3D"
  //   },
  //   {
  //     id:18,
  //     title: "Sport",
  //     pathName:"sport",
  //     disc:"From adrenaline-fueled moments of victory to the camaraderie among athletes, this category celebrates the captivating world of sports photography. Showcasing both intensity and emotion, photographers freeze-frame the essence of competition, highlighting the dedication and spirit that define sports worldwide.",
  //     image:"https://images.unsplash.com/photo-1707862689972-35e60c75cca4?auto=format&auto=compress&dpr=1&h=594&q=45&w=1999&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHx8fA%3D%3D"
  //   },
  
  // ]);
  const handlePage=( item)=>{
    // const page =  searchParams.append('query')
    path(item)
    getImg({searchImage:item?.pathName})
    sessionStorage.setItem('local',item?.pathName)
    
  }
  let leng = value.length
  console.log(leng)
  const [count, setCount]=useState(0)
 const prev = ()=>{
  setCount((count)=>(count === 0 ? value.length - 1 : count - 1))
 }
 const next = ()=>{
  setCount((count)=>(count ===  value.length - 1 ? 0 : count + 1))
 }
  return (
      <div  className=" text-[#767676]  text-[14px] flex gap-4 overflow-x-scroll items-center  lg:overflow-hidden transition-transform ease-out duration-500 px-[40px] bg-[#fff] w-[100vw] box-border h-[56px]">
       <div className="flex  items-center">
       <Link to='/'  className="cursor-pointer hover:text-black">Editorial</Link>
        <p className="cursor-pointer hover:text-black mx-4">Following</p>
        <p className="cursor-pointer hover:text-black">Unsplash+</p>
       </div>
        <div className="w-[1px] h-[32px] bg-[#767676] md:block hidden  "></div>
        <div  className="md:overflow-x-scroll w-[100%] items-center flex  gap-[55px]  scrollbar-hide ">
        {
          value.map((item, index)=>(
              <Link to='/page' key={item.id} className="hover:text-black w-[100px] whitespace-nowrap cursor-pointer " onClick={(e)=>handlePage(item)} >
                {item.title}
              </Link>
              
            ))
           }
         <div>
          <FcLeft/>
          <FcRight/>
         </div>
        </div>
      </div>
  );
}

