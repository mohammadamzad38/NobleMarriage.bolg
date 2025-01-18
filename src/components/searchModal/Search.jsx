import React from "react";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";


const Search = ({onClose}) => {
  return (
    <div className="fixed inset-0 bg-[#923f8f] bg-opacity-30 ">
      <div className="absolute top-[30%] lg:left-[10%] xl:left-[20%] 2xl:left-[30%] w-[800px] gap-10 bg-white rounded-2xl h-[410px] flex flex-col justify-center items-center">
      <button onClick={onClose} className="relative">
      <RxCross2 className="absolute -top-[75px] bg-[#BA0060] text-white rounded-md left-[360px]" />
      </button>

      <Image
        src={"/images/logo.svg"}
        height={146}
        width={72}
        alt="NobleMarriage-Logo"
      ></Image>
      <div className="relative w-[70%]">
        <FaSearch className="absolute top-[15px] left-5 text-gray-500" />
        <input
          className="border bg-img w-full py-2 pl-16 rounded-2xl"
          type="text"
          placeholder="Search"
        ></input>
      </div>
      <p className="text-[#BA0060] font-bold font-sm">Popular Searches</p>
    </div>
    </div>
  );
};

export default Search;
