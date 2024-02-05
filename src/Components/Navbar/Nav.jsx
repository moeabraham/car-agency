import React from 'react'
import styles from "./Nav.module.css";
// import carLogo from "../../Assets/carLogo.svg"
import carLogo1 from "../../Assets/carLogo1.png";
import {useState} from "react";
import Hamburger from './Hamburger';
import { FcUpLeft } from "react-icons/fc";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";



function Nav() {

  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const toggleHamburger = () =>{
    setHamburgerOpen(!hamburgerOpen)
  }
// console.log(hamburgerOpen)
  return (
    <> 
    <div className={styles.navBar}>
{/* LOGO */}
        <div className={styles.logo}>
          <Link to="/">
              <img className={styles.logoSVG} src={carLogo1}></img>
          </Link>
        </div>
{/* LINKS */}
      <div className={styles.links} > 
          <ul className={hamburgerOpen ? styles.sideNav : styles.linksList}>
          <FcUpLeft className={hamburgerOpen ? styles.iconOn : styles.iconOff}  onClick={toggleHamburger}/>

            <li className={styles.eachLinksList}> <Link className={styles.text} to="/">Home</Link></li>
            <li className={styles.eachLinksList}><Link className={styles.text} to="/about">About</Link></li>
            <li className={styles.eachLinksList}><Link className={styles.text} to="/vehicles">Vehicle Models</Link></li>
            <li className={styles.eachLinksList}><Link className={styles.text} to="/testimonials">Testimonials</Link></li>
            <li className={styles.eachLinksList}><Link className={styles.text} to="/ourteam">Our Team</Link></li>
            <li className={styles.eachLinksList}><Link className={styles.text} to="/contact">Contact</Link></li>

          </ul>
      </div>
      <div className={styles.buttons}> 
        <button className={styles.logButton}>Log In</button>
        <button className={styles.regButton}>Register</button>
      </div>

       <div className={hamburgerOpen ? styles.iconOff : styles.hamburger}  onClick={toggleHamburger} >
            <Hamburger  hamburgerOpen={hamburgerOpen} setHamburgerOpen={hamburgerOpen}  />
         </div> 
    </div>

   

    
    </>

  )
}

export default Nav