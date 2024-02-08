import React from 'react'
import styles from "./CarModels.module.css";
import {useState} from "react";
import {ALL_CARS} from "./allCars";
import Car from "../Car/Car.jsx";


function CarModels() {
// console.log(ALL_CARS[0][0].img)

const [clicked, setClicked] = useState("second car");
console.log(clicked, "IMP")

  return (
    <div className={styles.container}>
        <div className={styles.headers} >
            <h3>Vehicle Models</h3>
            <h1>Browse Our Collection</h1>
            <p>Choose from a variety of our amazing vehicles  </p><span className={styles.here}>Here</span>
            {/* <p>Next Adventure or Business Trip</p> */}
        </div>

        {/* flex here */}
        <div className={styles.main} >
{/* <img src={ALL_CARS[0][0].img} /> */}
            <div className={styles.layout}>
                <div className={styles.leftSideTable} >
                     
                <button 
                    onClick={() => {
                        setClicked("first car")
                
                    }}
                    //  id="" 
                >
                    Jetta
                </button>

                <button 
                    onClick={() => {
                        setClicked("second car")
                    }}
                    id=""
                >
                    Camry
                </button>

                <button 
                    onClick={() => {
                        setClicked("third car")
                    }}
                    id=""
                >
                    Audi
                </button>

                <button 
                    onClick={() => {
                        setClicked("fourth car")
                    }}
                    id=""
                >
                    Mercedes
                </button>

                <button 
                    onClick={() => {
                        setClicked("fifth car")

                    }}
                    id=""      
                >
                    BMW
                 </button>

                <button 
                    onClick={() => {
                        setClicked("sixth car")

                    }}
                    id=""
                >
                    Nissan
              </button>

              {/* {clicked === "first car" && <Car data={ALL_CARS} carId={0}  className={styles.carInformation} />}
{clicked === "second car" && <Car data={ALL_CARS} carId={1} className={styles.carInformation} />}
{clicked === "third car" && <Car data={ALL_CARS} carId={2}  className={styles.carInformation}/>}
{clicked === "fourth car" && <Car data={ALL_CARS} carId={3} className={styles.carInformation} />}
{clicked === "fifth car" && <Car data={ALL_CARS} carId={4}  className={styles.carInformation}/>}
{clicked === "sixth car" && <Car data={ALL_CARS} carId={5}  className={styles.carInformation}/>} */}

              </div>

            <div className={styles.rightTable} >

{clicked === "first car" && <Car data={ALL_CARS} carId={0}  className={styles.carInformation} />}
{clicked === "second car" && <Car data={ALL_CARS} carId={1} className={styles.carInformation} />}
{clicked === "third car" && <Car data={ALL_CARS} carId={2}  className={styles.carInformation}/>}
{clicked === "fourth car" && <Car data={ALL_CARS} carId={3} className={styles.carInformation} />}
{clicked === "fifth car" && <Car data={ALL_CARS} carId={4}  className={styles.carInformation}/>}
{clicked === "sixth car" && <Car data={ALL_CARS} carId={5}  className={styles.carInformation}/>}
</div>

            </div>

            {/* <div className={styles.mid}>

            </div>

            <div className={styles.rightTable}>

            </div> */}
        
        </div>
      
        {/* {clicked === "first car" && <Car data={ALL_CARS} carId={0} />}
        {clicked === "second car" && <Car data={ALL_CARS} carId={1} />}
        {clicked === "third car" && <Car data={ALL_CARS} carId={2} />}
        {clicked === "fourth car" && <Car data={ALL_CARS} carId={3} />}
        {clicked === "fifth car" && <Car data={ALL_CARS} carId={4} />}
        {clicked === "sixth car" && <Car data={ALL_CARS} carId={5} />} */}
    </div>
  )
}

export default CarModels;