import React from 'react'
import styles from "./Info.module.css";
import cartoonCar from "../../Assets/cartoonCar.svg"
import HAPPY from "../../Assets/HAPPY.svg"
import ONLINEPAYMENT from "../../Assets/ONLINEPAYMENT.svg"
function Info() {
  return (
    <div className={styles.container}>

        <div className={styles.pageData}>

            <div className={styles.left}>
                <h3>
                     Why Choose us ? 
                 </h3>
                 <h1 className={styles.smallerText}>
                 Best valued deals you will ever find

                 </h1>
                 <p className={styles.paragraph}> 
                 Discover the best deals you'll ever find with our unbeatable offers.
                  We're dedicated to providing you with the best value for your money, 
                  so you can enjoy top-quality services and products without breaking the bank.
                  Our deals are designed to give you the ultimate renting experience, 
                  so don't miss out on your chance to save big.
                 </p>
                 <button className={styles.dataButton}>Find Details</button>
            </div>
            
            <div className={styles.right}>

                <div className={styles.one}>
                    <div className={styles.tinyImg}>
                        <img src={cartoonCar} alt="" />
                    </div>
                    <div className={styles.tinyText} >
                        <h1>Unlimited Miles</h1>
                        <h3>Take your driving experience to the next level with our top-notch vehicles for your cross-country adventures.</h3>
                    </div>
                </div>

                <div className={styles.one}>
                    <div className={styles.tinyImg}>
                        <img src={ONLINEPAYMENT} alt="" />
                    </div>
                    <div className={styles.tinyText} >
                        <h1>NO HASSLE, NO HIDDEN FEES</h1>
                        <h3>Take your driving experience to the next level with our top-notch vehicles for your cross-country adventures.</h3>
                    </div>
                </div>

                <div className={styles.one}>
                    <div className={styles.tinyImg}>
                        <img src={HAPPY} alt="" />
                    </div>
                    <div className={styles.tinyText} >
                        <h1>Unlimited Miles</h1>
                        <h3>Take your driving experience to the next level with our top-notch vehicles for your cross-country adventures.</h3>
                    </div>
                </div>
            </div>

           
        </div>
       
        
        
    </div>
  )
}

export default Info