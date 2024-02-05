import React from 'react'
import styles from "./Banner.module.css";
import THREECARS from "../../Assets/THREECARS.png";

function Banner() {
  return (
    <div className={styles.container}>
        <div className={styles.bannerText}>
            <h1>
                Big Savings Waiting For You
            </h1>    
            <h1>
                24/7 Customer Service 
            </h1>
        </div>   
        <img src={THREECARS} /> 
        {/* <div className={styles.widePic}>
         
        </div>
        */}
        {/* <h3> Let's bookm your ride</h3> */}
    </div>
  )
}

export default Banner