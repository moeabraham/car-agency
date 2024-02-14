import React from 'react'
import styles from "./AnotherLanding.module.css";
import BBMMWW from "../../Assets/bbmmww.png";
import BBMMWW1 from "../../Assets/bbmmww1.png";
import Navbar from "../Navbar/Nav"
import AnotherImages from './AnotherSlider';
import { useState,useEffect } from 'react';
import Nav from '../Navbar/Nav';

function AnotherLanding() {
    // console.log(images,"imgimgimgimgigm")
    // const[index, setIndex] = useState(0);

    // useEffect(()=> {
    //     const intervalId = setInterval(()=>{
    //         setIndex((prev) => (prev + 1)  % images.length )
    //     },5000)

    //     return () => clearInterval(intervalId);

    // },[images])

    // console.log(images,"imggg")


    const navbarStyles = {
        position: 'relative',
        zIndex: 999, // Adjust the z-index value as needed
      };
  return (
<>

     
     {/* <div className={styles.anotherContainer} style={{ backgroundImage: `url(${images[index]})`}}> */}
        {/* <Navbar  /> */}
        <div className={styles.anotherContainer} >
        <Nav style={navbarStyles} />

            {/* <AnotherSlider /> */}
             <div className={styles.overlay}>
                {/* <div className={styles.anotherImg}> */}
                    {/* <img src={BBMMWW} /> */}
                {/* </div> */}
                <div className={styles.anotherContent}>




                 <section className={styles.anotherText}>
                    <h5 className={styles.anotherMiniText}>
                        NEW IN STOCK
                    </h5>
                    <h1 className={styles.anotherHeader}>
                        Discover a New <br/>
                        Level of Comfort
                    </h1>

                    <div className={styles.anotherButtons}>
                    <button  className={styles.gradientButton} >Discover More</button>
                    <button className={styles.gradientButton}>Meet Proxima 4x</button>
                    </div>

                 </section>

                 <section className={styles.anotherFormDiv}>
                    
                    <form className={styles.anotherForm}>
                    <div className={styles.anotherFormHeader}>
                        <h1>Find Your Ride</h1>

                    </div>
                        <label for="dropdown1">Brand :</label>

                       <select className={styles.firstSelect} id="dropdown1" name="dropdown1">
                            <option value="option1">Brand</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </select> 

                        <label for="dropdown2">Model :</label>
                       <select className={styles.secondSelect} id="dropdown2" name="dropdown2">
                            <option value="option1">Model</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </select> 

                        <label for="dropdown3"> Type:</label>
                       <select className={styles.thirdSelect} id="dropdown3" name="dropdown3">
                            <option value="option1">Type</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </select> 

                    
                    </form>

                    

                 </section>

                 </div>

            </div>
        </div>
     
     
     
     
     
     
     
     
    
   
        </>

  )
}

export default AnotherLanding