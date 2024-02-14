import React from 'react'
import styles from "./Download.module.css";
import bgbg2 from "../../Assets/bgbg2.png";
import bgbg from "../../Assets/bgbg.png";
import IOSstore from "../../Assets/IOSstore.svg";
import playStore from "../../Assets/playStore.svg";

function Download() {
  return (
    <div className={styles.downloadContainer}>

        <div className={styles.downloadLeftSide}>
            <div className={styles.downloadHeaders}>
                <h1>Download our app to get many,many perks!!</h1>
                <p>lots and lots of rewards and promotions dedicated 
                    to customers using our user friendly mobile app</p>
            </div>
          
            <div className={styles.stores}>
                <img  src={IOSstore}/>
                <img  src={playStore}/>
            </div>
       
        </div>

        <div className={styles.downloadRightSide}>
            <img src={bgbg} />
        </div>
    </div>
  )
}

export default Download