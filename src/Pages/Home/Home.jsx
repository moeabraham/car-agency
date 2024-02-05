import React from 'react'
import LandingPage from '../../Components/LandingPage/LandingPage';
import Nav from "../../Components/Navbar/Nav";
import Booking from '../../Components/Booking/Booking';
import Promotion from '../../Components/Promotion/Promotion';
import CarModels from '../../Components/CarModels/CarModels';
// import Car from '../../Components/Car/Car';
// import Modal from '../../Components/Modal/Modal';
import Banner from '../../Components/Banner/Banner';
import Info from "../../Components/Info/Info";
// import FullStack from '../../Components/FullStack/FullStack';
import Testimonials from '../../Components/Testimonials/Testimonials';
function Home() {
  return (
    <>
        <Nav />
        <LandingPage />
         <Booking />
         <Promotion />
         <CarModels />
         <Banner />
         <Info />
         <Testimonials />
         {/* <FullStack /> */}
    </>
  )
}

export default Home