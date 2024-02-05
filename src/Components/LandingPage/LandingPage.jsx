import React from 'react';
import styles from "./LandingPage.module.css";
import carBG from "../../Assets/carBG.png";
import car from "../../Assets/car.png";
import pexels from "../../Assets/pexels.png";
import muffler from "../../Assets/muffler.png";
function LandingPage() {
  return (
    <>
    
        <div className={styles.container}>
          <div className={styles.leftSide}>
            <div className={styles.promos}>
                <h2>Let's Book Your Ride! </h2>
                <h1>Save <span className={styles.span}>Big</span> With  </h1>
                <h1>Our Car Rental</h1>
                <p className={styles.paragraph}>Rent the Car of your Deams. Unbeatable prices, unlimited miles,<br></br> flexible pick-up options and much more.</p>
                <div className={styles.buttons}>
                    <button className={styles.bookButton}>Book a Ride</button>
                    <button className={styles.learnButton}>Learn More</button>
              </div>
              
            </div>
            
          </div>
          <div className={styles.rightSide}>
              {/* <img className={styles.backGround} src={carBG} /> */}

            <div className={styles.imgs}>
              <img className={styles.foreGround} src={car} />

              <img className={styles.backGround} src={carBG} />

            </div>
          </div>

        </div>



        </>

  )
}

export default LandingPage