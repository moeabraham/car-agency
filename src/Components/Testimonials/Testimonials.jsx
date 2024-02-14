import React from 'react'
import styles from "./Testimonials.module.css";
import CONWAY from "../../Assets/conway.png"
import TOMMY from "../../Assets/Tommy.png";
import { FcCheckmark } from "react-icons/fc";
import { FcOk } from "react-icons/fc";
import { PiQuotesFill } from "react-icons/pi";
import STAR from "../../Assets/STAR1.png";
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
                         <img src ={CONWAY}  alt="img"/>
                         <span className={styles.charName}> Conway</span>
                       </div>
                       <div className={styles.svgRating}>
                  {/* <svg xmlns="http://www.w3.org/2000/svg"  id="star"><g fill="#f8b84e"><path d="m3.99 14.508-.749.979-1.24.354.777.96L2.76 18l1.23-.386L5.22 18 5.202 16.8l.779-.96-1.241-.354zM9.997 14.516l-.746.976-1.237.353.775.956-.018 1.195 1.226-.385 1.226.385-.018-1.195.775-.956-1.237-.353zM16.008 14.508l-.749.979-1.24.354.777.96L14.778 18l1.23-.386 1.23.386-.018-1.199.779-.96-1.241-.354zM22.016 14.516l-.746.976-1.237.353.775.956-.018 1.195 1.226-.385 1.226.385-.018-1.195.775-.956-1.237-.353zM28.001 14.516l-.746.976-1.237.353.775.956-.018 1.195 1.226-.385 1.226.385-.018-1.195.775-.956-1.237-.353z"></path></g></svg>   */}
                    <img src={STAR} alt="rating" />
                  </div>
                  

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
                  <div className={styles.svgRating}>
                  {/* <svg xmlns="http://www.w3.org/2000/svg"  id="star"><g fill="#f8b84e"><path d="m3.99 14.508-.749.979-1.24.354.777.96L2.76 18l1.23-.386L5.22 18 5.202 16.8l.779-.96-1.241-.354zM9.997 14.516l-.746.976-1.237.353.775.956-.018 1.195 1.226-.385 1.226.385-.018-1.195.775-.956-1.237-.353zM16.008 14.508l-.749.979-1.24.354.777.96L14.778 18l1.23-.386 1.23.386-.018-1.199.779-.96-1.241-.354zM22.016 14.516l-.746.976-1.237.353.775.956-.018 1.195 1.226-.385 1.226.385-.018-1.195.775-.956-1.237-.353zM28.001 14.516l-.746.976-1.237.353.775.956-.018 1.195 1.226-.385 1.226.385-.018-1.195.775-.956-1.237-.353z"></path></g></svg>   */}
                    <img src={STAR} alt="rating" />
                  </div>
                  {/* <div className={styles.svgIcon}></div> */}
                 </div>

            </div>
        </div>
    </div>
  )
}

export default Testimonials