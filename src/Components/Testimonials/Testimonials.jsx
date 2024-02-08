import React from 'react'
import styles from "./Testimonials.module.css";
import CONWAY from "../../Assets/conway.png"
import TOMMY from "../../Assets/Tommy.png";
import { FcCheckmark } from "react-icons/fc";
import { FcOk } from "react-icons/fc";
import { PiQuotesFill } from "react-icons/pi";

function Testimonials() {
  return (
    <div className={styles.testContainer}>
        <div className={styles.textHeaders} >
            <h3>Reviewed By People</h3>
            <h1> Client's Testimonials  </h1>
            <p>Discover the positive impact we've made on the our clients by reading
                through their testimonials. Our clients have experienced our service
              and results,
             and they're eager to share their positive experiences with you.
             </p>
        </div>

        <div className={styles.cardContainer}>

            <div className={styles.leftCard}>
                <div className={styles.textPart}>
                    <p>"Shit was Tight, Will definetly come back "</p>
                </div>
                <div className={styles.cardInfo}>
                 <div className={styles.cardImg} >
                         <img src ={CONWAY} alt="img"/>
                         <span className={styles.charName}> Conway</span>
                       </div>
                       {/* <div className={styles.zikas}> <PiQuotesFill />     </div> */}

                  

                </div>
            </div>
            <div className={styles.rightCard}>
            <div className={styles.textPart}>
                    <p>"Shit was Tight, Will definetly come back "</p>
                </div>
                      <div className={styles.cardInfo}>
                       <div className={styles.cardImg} >
                          <img src ={TOMMY} alt="img"/>
                          <span className={styles.charName}>Tommy</span>
                       </div>
                       {/* <div className={styles.zikas}> <PiQuotesFill />     </div> */}

                       {/* <div className={styles.svgIcon}></div> */}
                </div>

            </div>
        </div>
    </div>
  )
}

export default Testimonials