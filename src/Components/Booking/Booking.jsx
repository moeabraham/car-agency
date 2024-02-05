import React from 'react'
import styles from "./Booking.module.css";
import {useState, useEffect} from "react";
import Modal from '../Modal/Modal';

import Audi from "../../Assets/AUDI.png"
import BMW from "../../Assets/BMW.png"
import Fiat from "../../Assets/Fiat.png"
import Honda from "../../Assets/Honda.png"
import Mercedes from "../../Assets/Mercedes.png"
import Toyota from "../../Assets/toyota.png"
import Volvo from "../../Assets/volvo.png"
import VW from "../../Assets/vw.png"
function Booking() {

    const [carType, setCarType] = useState("");
    const [pickUpLocation, setPickUpLocation] = useState("");
    const [dropOfLocation, setDropOfLocation] = useState("");
    // const [pickUpDate, setPickUpDate] = useState("");
    // const [pickUpDate, setPickUpDate] = useState("");
    const [pickUpDate, setPickUpDate] = useState("");
    const [dropOfDate, setDropOfDate] = useState("");
    const [carImg, setCarImg] = useState("");
    const [modalOn, setModalOn] = useState(false);

    const[carState, setCarState] = useState({
        carType: carType,
        carImg,
        pickUpLocation,
        dropOfLocation,
        pickUpDate,
        dropOfDate
    })
// console.log(carType)

    const handlePickUpDate = (e)=>{
        setPickUpDate(e.target.value)
        setCarState({...carState, pickUpDate: e.target.value})    }

    const handleDropOfDate = (e)=>{
        setDropOfDate(e.target.value)
        setCarState({...carState, dropOfDate: e.target.value})
    }

    const handleCarType = (e)=>{
        setCarType(e.target.value)
        setCarImg(e.target.value)
        setCarState({...carState, carType: e.target.value, carImg})
    }

    const handlePickUpLocation = (e)=>{
        setPickUpLocation(e.target.value);
        setCarState({...carState, pickUpLocation: e.target.value})
    }
    const handleDropOfLocation = (e)=>{
        setDropOfLocation(e.target.value);
        setCarState({...carState, dropOfLocation: e.target.value})
    }
    const handleModal = (e)=>{
        e.preventDefault()
        setModalOn(!modalOn)
    }
    console.log(modalOn)

  return (
    <>   

     <div className={styles.container}>
     {
        modalOn &&     <Modal carState={carState} carType={carType}/>

    }
        <div className={modalOn ? styles.modalOn : styles.table}>
            <form className={styles.form}>

                <div  className={styles.firstRow}>

                    <div className={styles.labels}>
                        <label> Your Car Type
                        <select 
                            name="cars"
                            id="cars" 
                            value={carType} 
                            className={styles.input}
                            onChange={handleCarType}
                            >
                                <option value="Volvo">Volvo</option>
                                <option value="VW">VW</option>
                                <option value="Mercedes">Mercedes</option>
                                <option value="Audi">Audi</option>
                                <option value="BMW">BMW</option>
                                <option value="Toyota">Toyota</option>
                                <option value="Honda">Honda</option>
                                <option value="Fiat">Fiat</option>
                        </select>
                        </label>
                    </div>

                    <div className={styles.labels}>
                        <label>Pick Up Location
                        <select 
                            name="cities"
                            id="cities"
                            value={pickUpLocation}
                            className={styles.input}
                            onChange={handlePickUpLocation}
                            >
                                <option value="Oklahoma City">Oklahoma City</option>
                                <option value="Edmond">Edmond</option>
                                <option value="Norman">Norman</option>
                                <option value="Del City">Del City</option>
                        </select>
                        </label>
                    </div>

                    <div className={styles.labels}>
                        <label>Drop Off Location
                        <select 
                            name="cities"
                            id="cities" 
                            value={dropOfLocation}
                            className={styles.input} 
                            onChange={handleDropOfLocation}
                               >
                                <option value="Oklahoma City">Oklahoma City</option>
                                <option value="Edmond">Edmond</option>
                                <option value="Norman">Norman</option>
                                <option value="Del City">Del City</option>
                        </select>
                        </label>
                    </div>
                </div>

                <div className={styles.secRow}>
                
                    <div className={styles.labels}>
                        <label>Pick Up Date
                            <input
                                type="date"
                                value={pickUpDate}
                                onChange={handlePickUpDate}
                                className={styles.input}
                            /> 
                        </label>
                    </div>

                    <div className={styles.labels}>
                        <label> Drop Off Date
                            <input 
                                 type="date"
                                 value={dropOfDate}
                                 onChange={handleDropOfDate}
                                 className={styles.input}
                            />
                        </label>
                    </div>  

                    <div className={styles.labels}>
                            <button 
                            onClick={handleModal}
                                className={styles.formButton}
                                value="Search"
                                type="submit"
                                >Search
                            </button>
                    </div>
                </div>
            </form>

        </div>
    </div>
    {/* {
        modalOn &&     <Modal carState={carState} carType={carType}/>

    } */}
    {/* <Modal carState={carState} carType={carType}/> */}
    </>

  )
}

export default Booking