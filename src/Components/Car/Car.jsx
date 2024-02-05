import React from 'react'
import styles from   "./Car.module.css" ;


function Car({data, carId}) {


    return (
    <>

    {/* <div className={styles.carContainer}> */}
        {
            
            data ? data[carId].map((car, idx) => (
                <>
                <div key={idx} className={styles.carInfo} >

                    <div className={styles.leftHalf} key ={idx}>
                        <img src={car.img}  className={styles.carImg}/>
                    </div>

                    <div className={styles.rightHalf} key={idx}> 

                            <div className={styles.col}>
                                <h1 className={styles.carName}>Car Model : {car.name}</h1>
                            </div>

                            {/* <div className={styles.col}> 
                                <h1 className={styles.carName}>{car.name}</h1>
                            </div> */}

                            <div className={styles.col}>           
                                <h1 className={styles.carAir}> {car.air}</h1>
                            </div>

                            <div className={styles.col}> 
                                <h1 className={styles.carDoors}>Door Number: {car.doors}</h1>
                            </div>

                             <div className={styles.col}>
                                <h1 className={styles.carModel}>Car Make:  {car.model}</h1>
                            </div>

                            <div className={styles.col}>
                                <h1 className={styles.carTransmission}>{car.transmission}</h1>
                            </div>

                            <div className={styles.col}>                      
                                 <h1 className={styles.carPrive}>{car.price}</h1>
                            </div>


                    </div>
                               

                </div>
                </>
            ))
           

            : console.log("nope")
        } 
    {/* </div> */}
    </>
  )
}

export default Car