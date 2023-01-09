import {
  Heart,
  Notification,
  SearchNormal1,
  Setting2,
  Setting4,
} from "iconsax-react";
import React from "react";
import img from "../assets/img";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center flex-wrap pt-8 px-6 md:flex-nowrap lg:py-10">
      <section className="flex justify-between items-center">
        <h1 className="text-[#3563E9] text-2xl lg:text-[32px]">MORENT</h1>

        <form className="lg:w-96 md:w-80 h-12 lg:ml-16 md:ml-8 md:block hidden">
          <div className="relative flex justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <SearchNormal1 color="#596780" />
            </div>
            <input
              type="search"
              className="block w-full p-4 pl-10 text-sm text-[#596780] border border-[#C3D4E966] rounded-[70px]  focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search something here"
            />
            <div className="absolute inset-y-0 right-0 flex items-center mr-3 pointer-events-none">
              <Setting4 color="#596780" />
            </div>
          </div>
        </form>
      </section>


      <div className="md:flex items-center hidden">
        <Heart color="#596780" variant="Bold" className="md:mr-5" />
        <Notification color="#596780" variant="Bold" className="md:mr-5" />
        <Setting2 color="#596780" variant="Bold" className="md:mr-5" />

        <img
          className="md:w-11 md:h-11"
          src={img.Imageprofile}
          alt="Imageprofile"
        />
      </div>

      {/* ----------------mobile------------------------- */}
      <img
        className="w-7 h-7 md:hidden"
        src={img.Imageprofile}
        alt="Imageprofile"
      />

      {/* <> */}
      <form className="mt-8 h-12 md:hidden">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <SearchNormal1 color="#596780" className="" />
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 pl-10 text-sm text-[#596780] border border-[#C3D4E966] rounded-[10px]  focus:ring-blue-500 focus:border-blue-500"
            placeholder="Search something here"
            required
          />
        </div>
      </form>

      <div className="md:hidden w-12 h-12 mt-8 border border-[#C3D4E966] rounded-[10px] flex justify-center items-center">
        <Setting4 color="#596780" />
      </div>
      {/* </> */}
    </div>
  );
};

export default Navbar;
