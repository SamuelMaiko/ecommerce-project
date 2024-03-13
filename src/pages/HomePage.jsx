import React from 'react'
import PageHeader from '../components/homepage/PageHeader'
import Banner from '../components/homepage/Banner'
import FeaturedProducts from '../components/homepage/FeaturedProducts'
import ExploreByCategory from '../components/homepage/ExploreByCategory'
import AboutUs from '../components/homepage/AboutUs'
import Testimonials from '../components/homepage/Testimonials'
import GetInTouch from '../components/homepage/GetInTouch'
import Footer from '../components/homepage/Footer'

const HomePage = () => {
  return (
    <>
    <PageHeader/>
    <Banner/>
    <FeaturedProducts/>
    <ExploreByCategory/>
    <AboutUs/>
    <Testimonials/>
    <GetInTouch/>
    <Footer />
    </>
    )
}

export default HomePage