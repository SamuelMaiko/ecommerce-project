// import React from 'react'
import { styled } from "styled-components";
// import LowerImg from '../assets/images/home-picture3.jpg'
// import NavBar from '../components/common/NavBar'
// import { useMyCustomHook } from '../context/MyContext'
import * as React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import excavator2 from "../assets/excavator2.jpg";
// import axios from 'axios'
import { toast } from "react-toastify";
import instance from "../axios/instance";
import { createNewCookie } from "../Cookies/Cookie";
// import { useMyBaseAPIContext } from '../context/BaseAPIContext'
// import instance from '../axios/instance'
// import { createNewCookie } from '../Cookies/Cookie'
// const LOWER_IMAGE=LowerImg

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const navigate = useNavigate();

  // const takeUserToSignUpPage = (e) => {
  //   e.preventDefault();
  //   navigate("/signup");
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const LOGIN_DATA = {
      email,
      password,
    };
    // const LOGIN_DATA = {
    //   phone_number: "0724282967",
    //   password: "12345",
    // };

    try {
      console.log;
      const response = await instance.post("/api/accounts/login/", LOGIN_DATA);
      if (response.status === 200) {
        toast.success("Welcome back! You have successfully logged in");
        // console.log(response.data.token);
        createNewCookie("access_token", response.data.token);
        createNewCookie("email", response.data.user.email);
        navigate("/");
      } else if (response.status === 401) {
        toast.error("Invalid email or password");
      } else if (response.status === 500) {
        toast.error(`Internal server error (${response.status})`);
      }
    } catch (error) {
      toast.error("Invalid email or password");
    }
  };

  return (
    <div className="h-screen w-full font-poppins">
      <div className="flex justify-between">
        <Section className="w-[61%] h-screen hidden lg:flex text-white pl-16">
          <div className="  w-[35rem] ">
            <h1 className=" text-4xl mt-20 mb-20 opacity-0">
              <span className="font-extrabold">FIFA</span> ID
            </h1>
            <h1 className="font-medium text-[4rem]">
              Welcome Back, Sign In Now.
            </h1>
            <p className="text-2xl font-medium">
              Login to access your account and explore our platform.
            </p>
          </div>
        </Section>
        <section className="flex-1 flex justify-center">
          <form className=" w-[73%] mt-20" onSubmit={handleSubmit}>
            <h1 className="font-medium text-4xl mt-5">Login</h1>
            <div className="mt-10">
              <label className="font-medium text-[1.1rem]">Email</label>
              <input
                className="bg-[#e8f0fe] h-[3rem] w-full border-b-[1px] border-gray-400 pl-3 outline-none"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} // Update email state
                required
              />
            </div>
            <div className="mt-10">
              <label className="font-medium text-[1.1rem]">Password</label>
              <input
                className="bg-[#e8f0fe] h-[3rem] w-full border-b-[1px] border-gray-400 pl-3 outline-none"
                placeholder="Enter password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} // Update password state
                required
              />
            </div>
            <button
              type="submit"
              className="mt-5 mb-5 bg-[#28A745] hover:bg-[#339966] py-3 px-7 rounded-3xl text-white text-sm uppercase"
            >
              Sign In
            </button>
            <p className="mb-8 text-blue-600 hover:text-blue-900 text-md text-left cursor-pointer">
              Forgotten your password?
            </p>

            <p className="mb-2 text-left">Don&apos;t have an account?</p>
            <NavLink to="/signup">
              <button
                type="button"
                className="border-[1px] border-black rounded-3xl py-3 px-7 uppercase text-sm"
              >
                Sign Up
              </button>
            </NavLink>
          </form>
        </section>
      </div>
    </div>
  );
};

const Section = styled.section`
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.2)),
    url(${excavator2});
  background-size: 100% 100%;
  // background-color:red;
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: scroll;
`;
// const LowerImage=styled.div`
// // background-color:blue;
// background:url(${LOWER_IMAGE});
// background-attachment:scroll;
// background-repeat:no-repeat;
// background-size:cover;
// background-position:center center;
// box-shadow:inset 0px 0px 10px #f5f5dc;
// `;

export default Login;
