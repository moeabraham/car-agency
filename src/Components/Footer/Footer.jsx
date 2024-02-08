import React from 'react'
import styles from "./Footer.module.css";
import { FcPhone } from "react-icons/fc";
import { PiEnvelopeSimpleThin } from "react-icons/pi";
import { FaPhoneFlip } from "react-icons/fa6";



function Footer() {
  return (
    <div className={styles.footerContainer}>
        <div className={styles.theCols}>

            <div className={styles.firstCol}>
                <h1>CAR Agency</h1>
                <p>blah blah bdfsknafsjbfdafdn<br/>sdsadsanjdasdsa
                blah blah bdfsknafsjbfdafdn<br/></p>
                <div className={styles.phoneInfo}>
                    {/* <img /> */}
                    <FaPhoneFlip />

                    <span>405-405-4054</span>    
                </div>
                <div className={styles.emailInfo}>
                    {/* <img /> */}
                    <PiEnvelopeSimpleThin />

                    <span>405-405-4054</span>    
                </div>
                <h5>Inspired by XpeedStudio</h5>

            </div>

            <div className={styles.secondCol}>
                <h1>Company</h1>
                <h3>New York</h3>
                <h3>Careers</h3>
                <h3>Blog</h3>
                <h3>How we work</h3>
            </div>

            <div className={styles.thirdCol}>
            <h1>Working Hours</h1>
            <h3>Mon - Fri: 9:00AM-9:00PM</h3>
                <h3>Sat: 9:00AM - 8PM</h3>
                <h3>Sun: Closed</h3>

            </div>

            <div className={styles.fourthCol}>
                <h1>Subscription</h1>
                <p>Subscribe Your Email address for latest news & updates</p>

                <div className={styles.footerButtons}>

                    <button className={styles.footerBookButton}>Contact US</button>
                    {/* <button className={styles.footerLearnButton}>Learn More</button> */}
               
                </div>
            </div>

        </div>
    </div>
  )
}

export default Footer