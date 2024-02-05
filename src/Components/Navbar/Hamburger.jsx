import React from 'react'
import styles from "./Hamburger.module.css";

function Hamburger({hamburgerOpen}) {

//   console.log(hamburgerOpen)

  return (
    <>
        <div className={styles.hamburger}>
          {/* <div className="burger burger1" /> */}
          <div className={`${styles.burger} ${styles.burger1}`}>       </div>

          <div className={`${styles.burger} ${styles.burger2}`} >       </div>

          <div className={`${styles.burger} ${styles.burger3}`}  >      </div>

          {/* // <div className="burger burger2" />
          // <div className="burger burger3" />
 */}
        </div>


{/* 
        <style jsx>{`
                .hamburger{
                    width: 2rem;
                    height: 2rem;
                    display: flex;
                    justify-content: space-around;
                    flex-flow: column nowrap;
                    z-index: 10;
                }

                .burger{
                    width: 2rem;
                    height: 0.25rem;
                    border-radius: 10px;
                    background-color: black;
                    transform-origin: 1px;
                    transition: all 0.3s linear;
                }


                
            `}</style> */}
    </>
    )
}

export default Hamburger