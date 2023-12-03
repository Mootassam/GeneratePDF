import React from "react";
import "../App.css";

function NFT() {
  return (
    <div className="background__lineaire">
      <header className="flex items-center bg-[#010101] h-[141px]   pl-[170px] pr-[208px]">
        <div className="max-w-[1541px] m-auto flex">
          <div className="">
            <img src="/logo.png" width={206} height={51} />
          </div>
          <nav className="flex">
            <ul className="flex gap-[32px] pl-[52px]">
              <li className="text-white font-[500] cursor-pointer">Features</li>
              <li className="text-white font-[500] cursor-pointer">
                Community
              </li>
              <li className="text-white font-[500] cursor-pointer">About Us</li>
              <li className="text-white font-[500] cursor-pointer">Faqs</li>
            </ul>
          </nav>

          <div className="flex gap-[28px] items-center pl-[191px]">
            <div className="w-[40px]">
              <img src="/sheepp.png" alt="" />
            </div>
            <div className="w-[40px]">
              <img src="/sheepp.png" alt="" />
            </div>
            <div className="w-[40px]">
              <img src="/sheepp.png" alt="" />
            </div>
            <div className="w-[40px]">
              <img src="/sheepp.png" alt="" />
            </div>
          </div>

          <div className="bg-[#fff] h-[46px] w-[162px] flex items-center justify-center text-[8.7px] font-bold ml-[150px] rounded cursor-pointer">
            <span className="font-[700] tracking-[.004px]">
              JOIN OUR DISCORD
            </span>
          </div>
        </div>
      </header>

      <div className="lineaire">
        <div className="relative  max-w-[1541px] m-auto flex ">
          <img
            src="/background.png"
            className="absolute z-0  left-0 w-full h-full bottom-0 opacity-5"
            alt=""
          />
          <div className="flex relative z-3 items-start pt-[28px] ">
            <div className="w-[644px] pt-[83px] flex flex-col items-start">
              <h1 className="header__text">
                Shop our latest collection of 10000 billionaire apes NFTs
              </h1>
              <span className="text-[16px] text-[#DDE2FF] font-[400] pt-[30px] w-[608px]">
                Earlier this year, a mysterious force coming from another galaxy
                summoned the most influential people on planet Earth to a secret
                party. Acquiring one of them will give you access to an
                ever-growing community of investors and entrepreneurs.
              </span>

              <div className="mt-[70px] flex items-center justify-center rounded bg-[#000] w-[259px] h-[74px] text-[#fff] lineare gap-[8px]">
                <span className="text-[14px] font-[700] cursor-pointer ">
                  VIEW COLLECTION
                </span>

                <img src="/icon.png" alt="" />
              </div>

              <div className="flex items-center pt-[152px] justify-between w-full">
                <div className="flex gap-[5px]">
                  <span className="text-lineaire font-[700]">180+</span>
                  <span className="text-lineaire">hand drawn traits</span>
                </div>
                <div className="w-[4px] h-[4px] rounded-full bg-white "></div>
                <div className="flex gap-[5px]">
                  <span className="text-lineaire font-[700]">5.5k</span>
                  <span className="text-lineaire">hand drawn traits</span>
                </div>
                <div className="w-[4px] h-[4px] rounded-full bg-white "></div>
                <div className="flex gap-[5px]">
                  <span className="text-lineaire font-[700]">10.3k</span>
                  <span className="text-lineaire">hand drawn traits</span>
                </div>
              </div>
            </div>
            <div>
              <img src="/monkey.png" alt="" srcset="" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#010101] w-full">
        <div className="max-w-[1541px] m-auto pb-[92px] pt-[134px] flex gap-[118px]">
          {/* form filter */}
          <div className="bg-[#0A0A0D] pt-[22px] pl-[16px] pr-[26px] pb-[31px]">
            {/* stlying the input search */}

            <div className="relative w-[267px] h-[39px] flex items-center  pl-[26px] bg-white rounded-2xl">
              <input
                type="text"
                className="border-0 bg-transparent text-[12px] text-[#4F4F4F] focus:outline-0"
                placeholder="Search"
                style={{ width: "calc(100% - 25%)" }}
              />
              <div className="bg-[#010101] h-full w-[50px] flex items-center justify-center absolute right-0 rounded-l-[24px] cursor-pointer overflow-hidden">
                <img
                  src="/icon/search.png"
                  className="w-[10px] h-[10px]"
                  alt=""
                  srcset=""
                />
              </div>
              {/* Styling the filters input here */}
            </div>
            <div className="pt-[38px]">
              <span className="text-[18px] font-[700] text-white ">Filter</span>

              <div
                className="pt-[22.06px] text-white text-[14px] font-[500] flex flex-col
            gap-[7px]"
              >
                <span>Price</span>
                <select
                  name=""
                  id=""
                  className="h-[43px]  appearance-none rounded-lg text-[#C4C4C4] text-center text-[13px] bg-transparent border__color focus:outline-0"
                >
                  <option value="USD"> United Sates Dollars</option>
                  <option value="USD"> America</option>
                  <option value="USD"> CANADA</option>
                </select>
              </div>

              {/* min max price  */}
              <div className="flex justify-between items-center mt-[22px]">
                <div className="bg-white border-[#c4c4c4]  w-[78px] h-[43px] rounded-md cursor-pointer   flex items-center justify-center text-[13px]">
                  <span className="text-[#C4C4C4]">Min. Price</span>
                </div>
                <div className="bg-white border-[#c4c4c4]  w-[78px] h-[43px] rounded-md cursor-pointer   flex items-center justify-center text-[13px]">
                  <span className="text-[#C4C4C4]">Max. Price</span>
                </div>
                <span className="apply cursor-pointer">Apply</span>
              </div>

              <div>
                <input type="range" className="w-full" />
              </div>
            </div>
          </div>
          {/* list of images + pagination */}
          <div>
            <div className="flex flex-wrap justify-between items-start gap-y-[115px]">
              {NFTList.map((item) => (
                <SingleNft item={item} />
              ))}
            </div>

            {/* Paginaion */}
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NFT;
