// import React from 'react'
// import bbmmww from "../../Assets/bbmmww.png";
// import bbmmww1 from "../../Assets/bbmmww1.png";
// import bgbgbg from "../../Assets/bgbgbg.png";
// import {useState} from "react";
// import AnotherLanding from './AnotherLanding';


// function AnotherImages() {

//     let images =[ bbmmww, bbmmww1, bgbgbg];
//     const [currentIndex, setCurrentIndex] = useState(0);


//     const changeImage = () => {
//       const newIndex = (currentIndex + 1) % images.length; // Loop back to the first image when reaching the end
//       setCurrentIndex(newIndex);
//     };
  

//   return (

//     <div className="slider" style={{ backgroundImage: `url(${images[currentIndex]})` }}>
//     {/* Slider content */}
//   </div>

//     // <div>
//     //     <AnotherLanding   images={images}   />
//     // </div>
//   )
// }

// export default AnotherImages