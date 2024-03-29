import React, { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { ProductsContext } from "../context/ProductsProvider";

import {
  Heart,
  HambergerMenu,
  Notification,
  SearchNormal1,
  Setting2,
  Setting4,
  CloseCircle,
} from "iconsax-react";

const NavbarIcon = () => {
  const [state, dispatch] = useContext(ProductsContext);
  const [searchTerm, setSearchTerm] = useState("");

  const isOpentHandler = () => {
    dispatch({ type: "IS_OPEN" });
    !state.isOpen == state.isOpen;
  };

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    const searchString = new URLSearchParams({ q: searchTerm }).toString();
    navigate(`/search?${searchString}`);
    dispatch({ type: "SEARCH", payload: searchTerm });
  };

  return (
    <>
      <div className="flex justify-between items-center flex-wrap md:py-8 px-6 md:flex-nowrap lg:py-10 md:bg-white border-b border-[#C3D4E966]">
        <section className="flex justify-between items-center">
          <NavLink to="/">
            <h1 className="text-[#3563E9] text-2xl lg:text-[32px] hidden md:block">
              MORENT
            </h1>
          </NavLink>

          <form
            className="lg:w-96 md:w-80 h-12 lg:ml-16 md:ml-8 md:block hidden"
            onSubmit={submitHandler}
          >
            <div className="relative flex justify-between">
              <button
                type="submit"
                className="absolute inset-y-0 left-0 flex items-center pl-3 cursor-pointer"
              >
                <SearchNormal1 color="#3e7deb" />
              </button>

              <input
                onChange={(e) => setSearchTerm(e.target.value)}
                value={searchTerm}
                type="search"
                className="block w-full p-4 pl-10 text-sm text-[#596780] border border-[#C3D4E966] rounded-[70px]  focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Search something here"
              />

              <div className="absolute inset-y-0 right-0 flex items-center mr-3 ">
                <NavLink to="/category">
                  <Setting4 color="#596780" />
                </NavLink>
              </div>
            </div>
          </form>
        </section>

        <div className="md:flex items-center hidden">
          <div className="flex">
            <span className=" inline-block relative">
              <Link to="favorite-list">
                <Heart
                  color="#596780"
                  variant="Bold"
                  className="md:mr-5 cursor-pointer "
                />
              </Link>
              {state.favList && state.favList.length > 0 && (
                <span className="absolute w-[11px] h-[11px] bg-[#FF4423] rounded-xl -top-3 left-5"></span>
              )}

              {/* {state.favList && state.favList.length > 0 && (
                <span className="absolute w-[11px] h-[11px] bg-[#FF4423] rounded-xl -top-3 left-5"></span>
              )} */}

              
                
            </span>
          </div>

          <div className="relative">
            <span className="absolute w-[11px] h-[11px] bg-[#FF4423] rounded-xl bottom-6 left-5"></span>
            <Notification color="#596780" variant="Bold" className="md:mr-5 " />
          </div>

          <NavLink to="/panel">
            <Setting2 color="#596780" variant="Bold" className="md:mr-5" />
          </NavLink>

          <img
            className="md:w-11 md:h-11"
            src="https://i.postimg.cc/Y2VT4G1c/Imageprofile.png"
            alt="Imageprofile"
          />
        </div>
      </div>

      {/* ----------------mobile------------------------- */}
      <div className="flex justify-between items-center flex-wrap py-8 px-6 bg-white md:hidden lg:hidden border-b border-[#C3D4E966]">
        <section className="md:hidden w-full flex justify-between mb-8">
          <HambergerMenu size="24" color="#596780" className="cursor-pointer" />
          <img
            className="w-7 h-7"
            src="https://i.postimg.cc/Y2VT4G1c/Imageprofile.png"
            alt="Imageprofile"
          />
        </section>

        <NavLink to="/">
          <h1 className="w-full text-[#3563E9] text-2xl lg:text-[32px] md:hidden">
            MORENT
          </h1>
        </NavLink>

        <form className="mt-8 h-12 md:hidden" onSubmit={submitHandler}>
          <div className="relative">
            <button
              type="submit"
              className="absolute inset-y-0 left-0 flex items-center pl-3 cursor-pointer"
            >
              <SearchNormal1 color="#3e7deb" />
            </button>

            <input
              onChange={(e) => setSearchTerm(e.target.value)}
              value={searchTerm}
              type="search"
              className="block w-full p-4 pl-10 text-sm text-[#596780] border border-[#C3D4E966] rounded-[10px]  focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search something here"
            />
          </div>
        </form>

        <NavLink to="/category" className="md:hidden">
          <div className="w-12 h-12 mt-8 border border-[#C3D4E966] rounded-[10px] flex justify-center items-center">
            <Setting4 color="#596780" onClick={() => isOpentHandler()} />
          </div>
        </NavLink>
      </div>
    </>
  );
};

export default NavbarIcon;
