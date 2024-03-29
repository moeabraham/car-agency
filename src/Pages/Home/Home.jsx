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
import FAQ from "../../Components/FAQ/FAQ";
import Download from '../../Components/Download/Download';
import Footer from "../../Components/Footer/Footer"
import AnotherLanding from '../../Components/AnotherLanding/AnotherLanding';
function Home() {
  return (
    <>
        {/* <Nav /> */}
        <AnotherLanding />

        {/* <LandingPage /> */}
      
         <Promotion />
         <Booking />
         <CarModels />
         <Banner />
         <Info />
         <Testimonials />
         <FAQ />
         <Download />
        <Footer /> 

        
    </>
  )
}

export default Home