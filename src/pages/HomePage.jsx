import React, { useEffect } from "react";
// import PageHeader from '../components/homepage/PageHeader'
import Banner from "../components/homepage/Banner";
import FeaturedProducts from "../components/homepage/FeaturedProducts";
import ExploreByCategory from "../components/homepage/ExploreByCategory";
import AboutUs from "../components/homepage/AboutUs";
import Testimonials from "../components/homepage/Testimonials";
import GetInTouch from "../components/homepage/GetInTouch";
import PopularSuppliers from "../components/suppliers/PopularSuppliers";
import { getCookie } from "../Cookies/Cookie";
import { useLocation, useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate=useNavigate()
  const {pathname} = useLocation()

  useEffect(()=>{
    const accessToken=getCookie("access_token")
    if (pathname!=='/login' || pathname!=='/signup'){
      
      if (!accessToken){
        navigate("/login")
      }
    }
  },[])
  return (
    <>
      {/* <PageHeader/>  */}
      <Banner />
      <FeaturedProducts />
      <PopularSuppliers/>
      <ExploreByCategory />
      <AboutUs />
      {/* <Testimonials /> */}
      <GetInTouch />
    </>
  );
};

export default HomePage;
