import React from 'react'
import styles from "./Testimonials.module.css"
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
            <div className={styles.leftCard}></div>
            <div className={styles.rightCard}></div>
        </div>
    </div>
  )
}

export default Testimonials