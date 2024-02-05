import React from 'react'
import styles from "./Modal.module.css";
import Audi from "../../Assets/AUDI.png"
import BMW from "../../Assets/BMW.png"
import Fiat from "../../Assets/Fiat.png"
import Honda from "../../Assets/Honda.png"
import Mercedes from "../../Assets/Mercedes.png"
import Toyota from "../../Assets/toyota.png"
import Volvo from "../../Assets/volvo.png"
import VW from "../../Assets/vw.png";
import {useState, useEffect} from "react";

function Modal({carState, carType}) {
    console.log(carType)
    console.log(carState)


    let imgUrl;
    switch (carType) {
      case "Audi":
        imgUrl = Audi;
        break;
      case "Volvo":
        imgUrl = Volvo;
        break;
      case "VW":
        imgUrl = VW;
        break;
      case "Mercedes":
        imgUrl = Mercedes;
        break;
      case "BMW":
        imgUrl = BMW;
        break;
      case "Fiat":
        imgUrl = Fiat;
        break;
      case "Toyota":
        imgUrl = Toyota;
        break;
      case "Honda":
        imgUrl = Honda;
        break;
      default:
        imgUrl = "";
    }

const[firstName, setFirstName] = useState("");
const[lastName, setLastName] = useState("");
const[phoneNumber, setPhoneNumber] = useState("");
const[email, setEmail] = useState("");
const[address, setAddress] = useState("");
const[city, setCity] = useState("");
const[zipcode, setZipcode] = useState("");
console.log("HERE HERE",firstName,lastName, phoneNumber,email,address,city,zipcode)
const handleFirstName = (e) => {
  setFirstName(e.target.value)
}

const handleLastName = (e) => {
  setLastName(e.target.value)
}

const handlePhoneNumber = (e) => {
  setPhoneNumber(e.target.value)
}

const handleEmail = (e) => {
  setEmail(e.target.value)
}

const handleAddress = (e) => {
  setAddress(e.target.value)
}

const handleCity = (e) => {
  setCity(e.target.value)
}
const handleZipcode = (e) => {
  setZipcode(e.target.value)
}
    
  return (

    <>
    <div className={styles.wrapper}>
        <div className={styles.header} >
            <h1>Complete Reservation</h1>
        </div>
        <div className={styles.disclaimer}>
            <h3> Upon completing this reservation enquiry, you will receive:</h3>
            <p>Please show this screen to our employee on time of pick up</p>
        </div>
        <div className={styles.body}>
            {/* <div className={styles.bodyHeader}> */}
                <section className={styles.modalLeftSide}>
                <h1> Location & Date</h1> 
            
            <br></br>
                    <div className={styles.pickUpDate}>
                        <h3>pick-up Date & Time</h3>
                        <h4>{carState.pickUpDate}</h4>
                    </div>
                    <div className={styles.dropOfDate}>
                        <h3>Drop-Off Date & Time</h3>
                        <h4>{carState.dropOfDate}</h4>
                    </div>
                    <div className={styles.pickUpLocation}>
                        <h3>Pick-Up Location</h3>
                        <h4>{carState.pickUpLocation}</h4>
                    </div>
                    <div className={styles.dropOfLocation}>
                    <h3>Drop-Off Location</h3>
                        <h4>{carState.dropOfLocation}</h4>
                    </div>
                </section>
                <section className={styles.modalRightSide}>
                     <h1> {carState.carType}</h1>
                     <img src={imgUrl} />
                </section>

            {/* </div> */}

        </div>  
        < div className={styles.infoPart}>
            <span className={styles.first}>First,</span> <h3 className={styles.intro} >We need to collect some information</h3>
        </div>

        <form className={styles.modalForm}>
            <div className={styles.firstRow}>
                <label>First Name
                  <input
                 value={firstName} 
                 onChange={handleFirstName}
                 >
                  </input></label>
                  
                <label>Last Name
                  <input 
                  value={lastName} 
                  onChange={handleLastName}
                  >
                    </input></label>
            </div>
            
            <div className={styles.secondRow}>
                <label>Phone Number
                  <input value={phoneNumber} 
                  onChange={handlePhoneNumber}
                  >
                    </input></label>
            </div>

            <div className={styles.thirdRow}>
                <label>Email
                  <input 
                  value={email} 
                  onChange={handleEmail}
                  ></input></label>
            </div>

            <div className={styles.secondRow}>
                <label>Address
                  <input
                 value={address} 
                  onChange={handleAddress}
                  ></input></label>
                  
            </div>

            <div className={styles.secondRow}>
                <label>City
                  <input
                 value={city}
                  onChange={handleCity}
                  ></input></label>
                    
                <label>Zip Code
                  <input 
                  value={zipcode}
                   onChange={handleZipcode}>
                    </input></label>
            </div>

            <div>
            <button className={styles.modalButton}> Reserve Now</button>

            </div>
        </form>
    </div>  
    </>
  )
}

export default Modal;