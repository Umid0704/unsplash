import React, { useEffect, useState } from "react";
// import { useLocation, useSearchParams } from 'react-router-dom'
import useImageStore from "../api/ImageLink";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { FaDownload, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoTrendingDown, IoTrendingUp } from "react-icons/io5";
export default function Image() {
  const { image, getImg } = useImageStore();
  useEffect(() => {
    getImg({ searchImage: "new" });
  }, []);
  const img_1 = image.splice(0, 10);
  const img_2 = image.splice(0, 10);
  const img_3 = image.splice(0, 10);
  const [active, setactive] = useState(false);

  const downloadImage = (item) => {
    const imageUrl = item.urls.raw;
    fetch(imageUrl)
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", `${item.slug}.jpg`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      })
      .catch((error) => {
        console.error("Error downloading the image: ", error);
      });
  };
  console.log(active);
  const handleSearch = (e) => {
    e.preventDefault();

    getImg({ searchImage: e.target[0].value });
    navigate("/");
  };
  return (
    <div className=" px-[20px] ">
      <div className="flex">
        <div>
          <div className="h-[280px] pt-[56px] flex items-end justify-between">
            <div className=" max-w-[480px] px-4 ">
              <h1 className=" font-bold text-[40px]">Unsplash</h1>
              <p className="text-[18px]">The internet's source for visuals.</p>
              <p className="text-[18px]">Powered by creators everywhere.</p>
            </div>
            <Link to="https://e-10457.adzerk.net/r?e=eyJ2IjoiMS4xMSIsImF2Ijo4MTA3NTIsImF0Ijo1LCJidCI6MCwiY20iOjE1Nzk5OTMsImNoIjo0NTE2MywiY2siOnt9LCJjciI6MzE2NTEyNTgwLCJkaSI6ImVlYjEwYzRmOTMzNTQ1ZGFhZGZmNWRmNDY5OGM3NjY1IiwiZGoiOjAsImlpIjoiOTVhZTdmODZlZjNiNDE2MDhmODJlMzM3OTk3Zjg1ODYiLCJkbSI6MywiZmMiOjQ5MjY5MzQwNCwiZmwiOjQ3NDExOTUzMSwiaXAiOiIzNy4xMTAuMjEwLjg4IiwibnciOjEwNDU3LCJwYyI6Mywib3AiOjMsImVjIjowLCJnbSI6MCwiZXAiOm51bGwsInByIjoyMjM2NjAsInJ0IjoyLCJycyI6NTAwLCJzYSI6IjU1Iiwic2IiOiJpLTAyY2FhMThkYjc1YTU5YmU2Iiwic3AiOjEzNzA5MzksInN0IjoxMTIxOTU0LCJ0ciI6dHJ1ZSwidWsiOiI1MTAyN2VjMC1jYjM0LTExZWUtODM3Yy1kZDI4NzFlOTdmMjEiLCJ6biI6MzA3MTcyLCJ0cyI6MTcwOTIxMDc2NTcyMSwicG4iOiJob21lcGFnZS1oZWFkZXIiLCJnciI6dHJ1ZSwiZ2MiOnRydWUsImdDIjp0cnVlLCJncyI6Im5vbmUiLCJ0eiI6IkFtZXJpY2EvTmV3X1lvcmsiLCJ1ciI6Imh0dHBzOi8vYWQuZG91YmxlY2xpY2submV0L2RkbS90cmFja2Nsay9ONzE4Njc5LjMyODY4OTNVTlNQTEFTSC9CMjkwOTAwMDkuMzg4MDk2MTgyO2RjX3Rya19haWQ9NTc5MjQ1MDc0O2RjX3Rya19jaWQ9MjA2NTY0Mzg2O2RjX2xhdD07ZGNfcmRpZD07dGFnX2Zvcl9jaGlsZF9kaXJlY3RlZF90cmVhdG1lbnQ9O3RmdWE9O2x0ZD07ZGNfdGR2PTEifQ&s=757qoLfT2KCVlFwsqWfT9CJe41g">
              Supported by Squarespace
            </Link>
          </div>
          <div className="max-w-[620px]">
            <div className="bg-[#eee] flex  rounded-[5px] items-center px-[12px] w-[100%]  md:w-[100%] justify-between mx-[16px] ">
              <form
                className="flex items-center w-[100%] "
                onSubmit={handleSearch}
              >
                <label
                  htmlFor="search"
                  className="w-[32px] h-[40px] flex items-center  justify-center "
                >
                  <FaSearch className="hover:text-black w-[20px] h-[20px]" />
                </label>
                <input
                  className="bg-transparent placeholder:text-[#767676] px-2 pl-2 w-[100%] outline-none  border-black"
                  type="search"
                  name="search"
                  id="search"
                  placeholder="Search"
                />
                <button type="submit"></button>
              </form>
            </div>
          </div>
        </div>
        <div className="h-[280px] w-[280px]  border p-[20px] flex flex-col justify-between">
          <div className="flex flex-wrap gap-2">
            <Link className="border hover:border-black text-[#767676] hover:text-black px-[8px] py-[4px] rounded  " to='https://unsplash.com/s/photos/marvel'>Mavrel</Link>
            <Link className="border hover:border-black text-[#767676] hover:text-black px-[8px] py-[4px] rounded  " to='https://unsplash.com/s/photos/apple-pay'>Apple Pay</Link>
            <Link className="border hover:border-black text-[#767676] hover:text-black px-[8px] py-[4px] rounded  " to='https://unsplash.com/s/photos/japan'>Japan</Link>
            <Link className="border hover:border-black text-[#767676] hover:text-black px-[8px] py-[4px] rounded  " to='https://unsplash.com/s/photos/christchurch'>Christchurch</Link>
            <Link className="border hover:border-black text-[#767676] hover:text-black px-[8px] py-[4px] rounded  " to='https://unsplash.com/s/photos/cityscape'>Cityscape</Link>
            <Link className="border hover:border-black text-[#767676] hover:text-black px-[8px] py-[4px] rounded  " to='https://unsplash.com/s/photos/christmass'>Christmass</Link>
          </div>
          <div className="flex items-center gap-3"><IoTrendingUp/><Link to='https://unsplash.com/trends'>See trending searches</Link></div>
        </div>
        <div className="h-[280px] w-[280px]"></div>
      </div>
      <div className="flex justify-center gap-4">
        <div className="w-[32%]  flex flex-col gap-4">
          {img_1?.map((item, index) => (
            <div key={index} className="flex flex-col gap-4 relative">
              <img src={item?.urls?.full} alt="" className=" bg-cover w-full" />
              <div className=" absolute top-0 w-full h-full flex flex-col justify-between items-end  p-4 opacity-0 hover:opacity-100">
                <div>
                  <button
                    type="button"
                    className={
                      active == true
                        ? "bg-red-500 px-[16px] rounded py-2  "
                        : "bg-white px-[16px] rounded py-2 text-red-500"
                    }
                  >
                    <FcLike
                      className={active === true ? " hidden" : " block"}
                    />
                    <FcLikePlaceholder
                      className={active === false ? " hidden" : " block"}
                    />
                  </button>
                </div>
                <div className="flex w-full justify-between ">
                  <div className="flex gap-3 items-center text-white">
                    <img
                      src={item.user.profile_image.small}
                      className="rounded-[50%] bg-center "
                      alt=""
                    />{" "}
                    <span>{item?.user?.first_name}</span>
                  </div>
                  <button
                    className="px-[16px] rounded py-2 bg-white"
                    onClick={() => downloadImage(item)}
                  >
                    {" "}
                    <FaDownload className="text-black" />{" "}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="w-[32%]  flex flex-col gap-4">
          {img_2?.map((item, index) => (
            <div key={index} className="flex flex-col gap-4 relative">
              <img src={item?.urls?.full} alt="" className=" bg-cover w-full" />
              <div className=" absolute top-0 w-full h-full flex flex-col justify-between items-end  p-4 opacity-0 hover:opacity-100">
                <div>
                  <button
                    type="button"
                    className={
                      active == true
                        ? "bg-red-500 px-[16px] rounded py-2  "
                        : "bg-white px-[16px] rounded py-2 text-red-500"
                    }
                  >
                    <FcLike
                      className={active === true ? " hidden" : " block"}
                    />
                    <FcLikePlaceholder
                      className={active === false ? " hidden" : " block"}
                    />
                  </button>
                </div>
                <div className="flex w-full justify-between ">
                  <div className="flex gap-3 items-center text-white ">
                    <img
                      src={item.user.profile_image.small}
                      className="rounded-[50%] bg-center "
                      alt=""
                    />{" "}
                    <span>{item?.user?.first_name}</span>
                  </div>
                  <button
                    className="px-[16px] rounded py-2 bg-white"
                    onClick={() => downloadImage(item)}
                  >
                    {" "}
                    <FaDownload className="text-black" />{" "}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="w-[32%]  flex flex-col gap-4">
          {img_3?.map((item, index) => (
            <div key={index} className="flex flex-col gap-4 relative ">
              <img
                src={item?.urls?.full}
                alt=""
                className=" bg-cover w-full "
              />
              <div className=" absolute top-0 w-full h-full flex flex-col justify-between items-end  p-4 opacity-0 hover:opacity-100 ">
                <div>
                  <button
                    type="button"
                    className={
                      active == true
                        ? "bg-red-500 px-[16px] rounded py-2  "
                        : "bg-white px-[16px] rounded py-2 text-red-500"
                    }
                  >
                    <FcLike
                      className={active === true ? " hidden" : " block"}
                    />
                    <FcLikePlaceholder
                      className={active === false ? " hidden" : " block"}
                    />
                  </button>
                </div>
                <div className="flex w-full justify-between ">
                  <div className="flex gap-3 items-center text-[#fff] opacity-100  ">
                    <img
                      src={item.user.profile_image.small}
                      className="rounded-[50%] bg-center "
                      alt=""
                    />{" "}
                    <span>{item?.user?.first_name}</span>
                  </div>
                  <button
                    className="px-[16px] rounded py-2 bg-white"
                    onClick={() => downloadImage(item)}
                  >
                    {" "}
                    <FaDownload className="text-black" />{" "}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
