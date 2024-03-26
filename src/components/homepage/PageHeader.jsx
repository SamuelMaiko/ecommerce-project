import React, { useEffect, useState } from "react";
import Cart from "./Cart";
import { useMyGeneralContext } from "../../context/AppContext";
import { NavLink, Navigate, useLocation, useNavigate, useParams } from "react-router-dom";
import { deleteCookie } from "../../Cookies/Cookie";
import UserInformationModal from "./UserInformationModal";

const PageHeader = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isUserInfoOpen, setIsUserInfoOpen] = useState(false);
  const { cartNumber } = useMyGeneralContext();
  const { pathname } = useLocation();
  const navigate=useNavigate()
  useEffect(() => {
    // alert(pathname)
  }, [cartNumber]);

  const id = pathname.split('/').pop();

  const NAV_LINKS = [
    {
      name: "Home",
      link: "/",
    },
    // {
    //   name:"Products",
    //   link:""
    // },

    {
      name: "Products",
      link: "/products",
    },
    {
      name: "Suppliers",
      link: "/suppliers",
    },
    {
      name: "Subscriptions",
      link: "/subscriptions",
    },
    // {
    //   name: "About Us",
    //   link: "#about",
    // },
    // {
    //   name: "Testimonials",
    //   link: "#testimonials",
    // },
  ];

  const PROF_LINKS=[
    {
      name: "User info",
      link: "#",
    },
    {
      name: "Logout",
      link: "#",
    },
  ]

  const handleLogout=()=>{
    deleteCookie("access_token")
    deleteCookie("email")
    setIsProfileOpen(false)
    navigate("/login")
  }

  const handleInfoModal=()=>{
    setIsProfileOpen(false)
    setIsUserInfoOpen(true)
  }

  return (
    <div className={`${pathname=='/chatbot' || pathname=='/chat' ||id && /^\d+$/.test(id) ?"bg-blue-500":"bg-primary"}  w-full h-[5.5rem] text-pColor`}>
      <div className="mx-auto h-full w-[95%] flex justify-between">
        {/* <div className='flex w-full items-center'> */}

        <div className="flex gap-4 items-center">
          <p className="font-extrabold font-heading text-2xl mr-10">Logo</p>
          <ul className="flex gap-8">
            {NAV_LINKS.map((link, index) => {
              if (link.name === "About Us" || link.name === "Testimonials") {
                return (
                  <a
                    key={index}
                    className={`${
                      pathname === "/login" || pathname === "/signup"
                        ? "hidden"
                        : ""
                    }`}
                    href={`${link.link}`}
                  >
                    <li className="font-normal text-lg hover:text-blue-200 transition-colors duration-300">{link.name}</li>
                  </a>
                );
              }
              return (
                <NavLink key={index} to={`${link.link}`}>
                  <li className={`font-normal text-lg transition-colors duration-400 delay-100 hover:border-white ${pathname=='/chatbot' || pathname=='/chat' ||id && /^\d+$/.test(id)?"border-blue-500":"border-primary"}  border-b-2`}>{link.name}</li>
                </NavLink>
              );
            })}
          </ul>
        </div>
        {/* <div className="flex items-center justify-center">

        <div>chatbot</div>
        </div> */}
        {/* <div className='flex '> */}

        <div className=" flex items-center flex-1 justify-end h-full font-heading">
          <div
            className={`${
              pathname !== "/products" ? "hidden" : ""
            } relative w-[18rem]`}
          >
            <input
              className="relative pl-8 outline-none h-[2rem] rounded-lg py-5 shadow-[2px_2px_4px_rgba(0,0,0,0.1)] w-full mx-auto mt-2"
              type="text"
              placeholder="Search products"
            ></input>
            {/* __________ search icon _________ */}
            <span className="absolute top-1/2 -translate-y-1/2 left-2 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </span>
          </div>
          {/* <div className='relative flex items-center h-full w-full '> */}

          <button
            onClick={() => setIsCartOpen(true)}
            className={`${
              pathname === "/login" || pathname === "/signup" ? "hidden" : " mr-8"
            } relative ml-4`}
          >
            {/* __________ cart button __________ */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
            {/* ______ counter _____  */}
            <span className="absolute bg-red-500 text-white -top-1 -right-2 rounded-full w-[1.2rem] h-[1.2rem] text-xs flex items-center justify-center">
              {cartNumber}
            </span>
          </button>

          <button className={`${pathname==='/login' || pathname==='/signup'? "":"hidden"} ml-8 font-semibold`}>
            <NavLink className="hover:underline" to="/login">
              Login
            </NavLink>{" "}
            /
            <NavLink className="hover:underline" to="/signup">
              Signup
            </NavLink>
          </button>
            
          <div 
          onClick={()=>setIsProfileOpen(current=>!current)} 
          className="w-[2.7rem] h-[2.7rem] bg-white text-black ml-4 rounded-full flex items-center justify-center cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>
          </div>
          {/* </div> */}
        </div>

        {/* </div> */}
        {/* </div> */}
      </div>

      {/* _____________________ cart modal  _______________________  */}
      <div
        className={`fixed z-10 bg-[rgba(0,0,0,0.3)] ${
          isCartOpen ? "" : "hidden"
        } inset-0`}
      >
        <Cart setIsCartOpen={setIsCartOpen} />
      </div>

      {/* _____________________ profile modal  _______________________  */}
      <div
      
        className={`fixed z-20 ${
          isProfileOpen ? "" : "hidden"
        } w-[16rem] right-4 rounded-lg px-1 `}
      >
        {
          PROF_LINKS.map((link, index)=>{

            if (link.name=='Logout'){
              
              return  <a key={index} href={link.link} ><button  onClick={handleLogout} className={`${link.name=='Logout'?'text-red-500':'text-[#ffffff]'} my-1 bg-[rgba(0,0,0,0.7)] hover:bg-[rgba(0,0,0,0.5)] transition-colors duration-300 w-full px-3 py-1 font-button`}>{link.name}</button></a>
            }
            
            return <a key={index} href={link.link} ><button  onClick={handleInfoModal} className={`${link.name=='Logout'?'text-red-500':'text-[#ffffff]'} my-1 bg-[rgba(0,0,0,0.7)] hover:bg-[rgba(0,0,0,0.5)] transition-colors duration-300 w-full px-3 py-1 font-button`}>{link.name}</button></a>
          })
        }

      </div>

      {/* _____________________ user Info modal  _______________________  */}
      <div
        className={`fixed z-20 bg-[rgba(0,0,0,0.3)] ${
          isUserInfoOpen ? "" : "hidden"
        } inset-0`}
      >
        <UserInformationModal setIsUserInfoOpen={setIsUserInfoOpen}/>
      </div>
    </div>
  );
};

export default PageHeader;
