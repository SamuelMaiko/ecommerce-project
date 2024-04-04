import React, { useEffect, useState } from "react";
import Cart from "./Cart";
import { useMyGeneralContext } from "../../context/AppContext";
import {
  NavLink,
  Navigate,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { deleteCookie } from "../../Cookies/Cookie";
import UserInformationModal from "./UserInformationModal";

const PageHeader = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isUserInfoOpen, setIsUserInfoOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartNumber } = useMyGeneralContext();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    // alert(pathname)
  }, [cartNumber]);

  const id = pathname.split("/").pop();

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

  const PROF_LINKS = [
    {
      name: "User info",
      link: "#",
    },
    {
      name: "Logout",
      link: "#",
    },
  ];

  const handleLogout = () => {
    deleteCookie("access_token");
    deleteCookie("email");
    setIsProfileOpen(false);
    navigate("/login");
  };

  const handleInfoModal = () => {
    setIsProfileOpen(false);
    setIsUserInfoOpen(true);
  };

  return (
    <div
      className={`relative md:static ${
        pathname == "/chatbot" ||
        pathname == "/chat" ||
        (id && /^\d+$/.test(id))
          ? "md:bg-blue-500"
          : "md:bg-primary"
      }  w-full h-[4rem] md:h-[5.5rem] flex items-center justify-center md:text-pColor `}
    >
      <h1 className="font-extrabold text-center text-primary font-heading md:hidden text-3xl mr-10">
        Logo
      </h1>
      <div
        onClick={() => setMenuOpen(!menuOpen)}
        className="absolute md:hidden right-5 top-1/2 -translate-y-1/2 cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>
      <div
        className={`absolute z-40 ${
          menuOpen ? "" : "translate-x-[430px] md:translate-x-0"
        } transition-transform duration-500 md:static right-0 left-0  mx-auto h-full md:w-[95%] flex flex-col md:flex-row md:justify-between `}
      >
        {/* <div className='flex w-full items-center'> */}
        <div
          onClick={() => setMenuOpen(false)}
          className="absolute top-4 left-4 md:hidden cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </div>

        <div className=" md:p-0 w-full flex gap-4 items-center ">
          <p className="font-extrabold font-heading text-2xl hidden md:block mr-10">
            Logo
          </p>
          <ul
            onClick={() => setMenuOpen(false)}
            className=" flex flex-col items-center pt-8 md:pt-0 text-lg bg-blue-500 text-white md:bg-transparent h-screen md:h-full w-full md:flex-row md:gap-8 "
          >
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
                    <li className="font-normal text-lg w-full hover:text-blue-200 transition-colors duration-300">
                      {link.name}
                    </li>
                  </a>
                );
              }
              return (
                <NavLink key={index} to={`${link.link}`}>
                  <li
                    className={`font-normal text-lg transition-colors duration-400 delay-100 hover:border-white ${
                      pathname == "/chatbot" ||
                      pathname == "/chat" ||
                      (id && /^\d+$/.test(id))
                        ? "border-blue-500"
                        : "border-primary"
                    }  md:border-b-2 py-4 md:py-0 text-center`}
                  >
                    {link.name}
                  </li>
                </NavLink>
              );
            })}
            <button
              onClick={() => setIsCartOpen(true)}
              className={`${
                pathname === "/login" || pathname === "/signup"
                  ? "hidden"
                  : " mr-8"
              } relative md:ml-4 md:hidden py-4 w-fit flex `}
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
              <span className="md:hidden ml-2">Cart</span>
              {/* ______ counter _____  */}
              <span className="absolute bg-red-500 text-white top-2 md:-top-1 left-3 rounded-full w-[1.2rem] h-[1.2rem] text-xs flex items-center justify-center">
                {cartNumber}
              </span>
            </button>
            {PROF_LINKS.map((link, index) => {
              if (link.name == "Logout") {
                return (
                  <a key={index} href={link.link}>
                    <button
                      onClick={handleLogout}
                      className={`${
                        link.name == "Logout"
                          ? "text-red-500"
                          : "text-[#ffffff]"
                      } my-1 bg-[rgba(0,0,0,0.2)] md:hidden hover:bg-[rgba(0,0,0,0.5)] transition-colors duration-300 w-full px-3 py-1 font-button`}
                    >
                      {link.name}
                    </button>
                  </a>
                );
              }

              return (
                <a key={index} href={link.link}>
                  <button
                    onClick={handleInfoModal}
                    className={`${
                      link.name == "Logout" ? "text-red-500" : "text-[#ffffff]"
                    } my-1 bg-[rgba(0,0,0,0.2)] md:hidden hover:bg-[rgba(0,0,0,0.5)] transition-colors duration-300 w-full px-3 py-1 font-button`}
                  >
                    {link.name}
                  </button>
                </a>
              );
            })}
            {/* __________________________________________________________________________________________ list end */}
          </ul>
        </div>
        {/* <div className="flex items-center justify-center">

        <div>chatbot</div>
        </div> */}
        {/* <div className='flex '> */}

        <div className="flex gap-4 w-full items-center flex-col md:flex-row md:flex-1 md:justify-end h-full font-heading">
          <div
            className={`${
              pathname !== "/products" ? "hidden" : ""
            } relative md:w-[18rem]`}
          >
            <input
              className="relative hidden md:block pl-8 outline-none h-[2rem] rounded-lg py-5 shadow-[2px_2px_4px_rgba(0,0,0,0.1)] w-full mx-auto mt-2"
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
              pathname === "/login" || pathname === "/signup"
                ? "hidden"
                : " mr-8"
            } relative md:ml-4 w-fit hidden md:flex`}
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
            <span className="md:hidden ml-2">Cart</span>
            {/* ______ counter _____  */}
            <span className="absolute bg-red-500 text-white -top-1 left-3 rounded-full w-[1.2rem] h-[1.2rem] text-xs flex items-center justify-center">
              {cartNumber}
            </span>
          </button>

          <button
            className={`${
              pathname === "/login" || pathname === "/signup" ? "" : "hidden"
            } ml-8 w-fit font-semibold`}
          >
            <NavLink className="hover:underline" to="/login">
              Login
            </NavLink>{" "}
            /
            <NavLink className="hover:underline" to="/signup">
              Signup
            </NavLink>
          </button>

          <div
            onClick={() => setIsProfileOpen((current) => !current)}
            className={`${
              pathname === "/login" || pathname === "/signup"
                ? "hidden"
                : " mr-8"
            } hidden md:flex items-center`}
          >
            <span className="w-[2.7rem] h-[2.7rem] bg-white text-black md:ml-4 rounded-full flex items-center justify-center cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.8}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
            </span>
            <span className="md:hidden ml-2">Profile</span>
          </div>
          {/* </div> */}
        </div>

        {/* </div> */}
        {/* </div> */}
      </div>

      {/* _____________________ cart modal  _______________________  */}
      <div
        className={`fixed z-50 bg-[rgba(0,0,0,0.3)] ${
          isCartOpen ? "" : "hidden"
        } inset-0`}
      >
        <Cart setIsCartOpen={setIsCartOpen} />
      </div>

      {/* _____________________ profile modal  _______________________  */}
      <div
        className={`fixed z-20 ${
          isProfileOpen ? "" : "hidden"
        } w-[16rem] top-[5.5rem] right-4 rounded-lg px-1 `}
      >
        {PROF_LINKS.map((link, index) => {
          if (link.name == "Logout") {
            return (
              <a key={index} href={link.link}>
                <button
                  onClick={handleLogout}
                  className={`${
                    link.name == "Logout" ? "text-red-500" : "text-[#ffffff]"
                  } my-1 bg-[rgba(0,0,0,0.7)] hover:bg-[rgba(0,0,0,0.5)] transition-colors duration-300 w-full px-3 py-1 font-button`}
                >
                  {link.name}
                </button>
              </a>
            );
          }

          return (
            <a key={index} href={link.link}>
              <button
                onClick={handleInfoModal}
                className={`${
                  link.name == "Logout" ? "text-red-500" : "text-[#ffffff]"
                } my-1 bg-[rgba(0,0,0,0.7)] hover:bg-[rgba(0,0,0,0.5)] transition-colors duration-300 w-full px-3 py-1 font-button`}
              >
                {link.name}
              </button>
            </a>
          );
        })}
      </div>

      {/* _____________________ user Info modal  _______________________  */}
      <div
        className={`fixed z-20 bg-[rgba(0,0,0,0.3)] ${
          isUserInfoOpen ? "" : "hidden"
        } inset-0`}
      >
        <UserInformationModal setIsUserInfoOpen={setIsUserInfoOpen} />
      </div>
    </div>
  );
};

export default PageHeader;
