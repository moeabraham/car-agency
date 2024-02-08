import React from 'react'
import styles from "./FAQ.module.css";
import { FaArrowDown } from "react-icons/fa";
import lux from "../../Assets/lux.png";


function FAQ() {
  return (
    <div className={styles.faqContainer}>

        <div className={styles.faqHeaders} >
            <h1>Frequently Asked Questions</h1>
            <p>Frequently Asked Questions About the Car Rental Booking Process on Our Website: Answers to Common Concerns and Inquiries.</p>
        </div>

        <div className={styles.main}>
            <div className={styles.sideImg}>
                {/* <img src={CARINSIDE} /> */}
            </div>
            <div className={styles.faqTable}>

                <div className={`${styles.firstQ} ${styles.row} ` }>
                    <p>What is datadasj fadduad fad;lira,jwq dsa</p>
                    <FaArrowDown />
                </div>

                <div className={styles.firstQ}>
                    <p>What is datadasj fadduad fad;lira,jwq dsa</p>
                    <FaArrowDown />
                </div>

                <div className={styles.firstQ}>
                    <p>What is datadasj fadduad fad;lira,jwq dsa</p>
                    <FaArrowDown />
                </div>

            </div>
          
        </div>
        
    </div>
  )
}

export default FAQ