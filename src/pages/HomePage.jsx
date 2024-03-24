import React from "react";
// import PageHeader from '../components/homepage/PageHeader'
import Banner from "../components/homepage/Banner";
import FeaturedProducts from "../components/homepage/FeaturedProducts";
import ExploreByCategory from "../components/homepage/ExploreByCategory";
import AboutUs from "../components/homepage/AboutUs";
import Testimonials from "../components/homepage/Testimonials";
import GetInTouch from "../components/homepage/GetInTouch";
import PopularSuppliers from "../components/suppliers/PopularSuppliers";

const HomePage = () => {
  return (
    <>
      {/* <PageHeader/>  */}
      <Banner />
      <PopularSuppliers/>
      <FeaturedProducts />
      <ExploreByCategory />
      <AboutUs />
      {/* <Testimonials /> */}
      <GetInTouch />
    </>
  );
};

export default HomePage;
