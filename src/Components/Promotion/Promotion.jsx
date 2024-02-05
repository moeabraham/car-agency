import React from 'react'
import styles from "./Promotion.module.css";
import Classic from "../../Assets/ClassicR.png"
import ContactUs from "../../Assets/ContactUs.png"
import Highway from "../../Assets/Highway.png"
import Road from "../../Assets/Road.png"

function Promotion() {
  return (
    <div className={styles.container}>
        <div className={styles.headers} >

            <h3 className={styles.pageHeader}> Plan Your Trip Now</h3>
            <h1>The Fastest and Easiest way to reach Your Destination</h1>

        </div>

        <div className={styles.steps}>

            <div className={styles.step}>
                <div className={styles.imageCont} >
                    <img className={styles.image} src={Classic} alt="Loading Car Image" />
                </div>
                <div className={styles.text}>
                        <h4>Select A Car</h4>
                        <p>We offers a big range of cars for all your driving needs</p>
                </div>
            </div>

            <div className={styles.step}>
            <div className={styles.imageCont} >

                 <img className={`${styles.image} ${styles.midImage}`}  src={ContactUs}/>
                 </div>

                <div className={styles.text}>
                    <h4>Contact Us</h4>
                    <p>We offers a big range of cars for all your driving needs</p>

                </div>

            </div>

            <div className={styles.step}>
                <div className={styles.imageCont} >
                    <img className={`${styles.image} ${styles.rightImage}`} src={Road}/>
                </div>
                <div className={styles.text}>
                    <h4>Let's Drive</h4>
                    <p>We offers a big range of cars for all your driving needs</p>
                </div>

            </div>
        </div>

    </div>
  )
}

export default Promotion