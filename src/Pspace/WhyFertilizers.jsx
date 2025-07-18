// // WhyFertilizers.jsx
// import React from "react";
// import Lottie from "lottie-react";
// import "./WhyFertilizers.css";
// import Green_Lottie from '../assets/Green_Lottie.json.json';

// const WhyFertilizers = ({ showScreen2, setShowScreen2 }) => {
//   if (showScreen2) return null;

//   return (
//     <div className="Uses daj">
//       <div className="First1">
//         {/* Left Section */}
//         <div className="F1">
//           <div className="F_heading">
//             <span className="F_heading_text">Why Fertilizers Matter?🌱</span>
//           </div>

//           <div className="F_Matter daj">
//             <div className="F_mat">
//               <p>
//                 Fertilizers are the foundation of modern agriculture.
//                 Healthy soil is the key to healthy crops.
//                 Over time, soil loses its natural nutrients due to continuous farming, erosion, and climate factors.
//                 Fertilizers restore these vital elements like nitrogen, phosphorus, and potassium—ensuring your crops grow strong and healthy.
//               </p>
//               <p>With balanced and timely use of fertilizers:</p>
//               <ul>
//                 <li>Plants grow faster and healthier</li>
//                 <li>Yields improve significantly</li>
//                 <li>Soil fertility is maintained over time</li>
//                 <li>Resistance to pests and diseases increases</li>
//               </ul>
//             </div>
//           </div>

//           <div className="F_button">
//             <div className="F_btn daj" onClick={() => setShowScreen2(true)}>Explore</div>
//           </div>
//         </div>

//         {/* Right Section */}
//         <div className="F2">
//           <div className="Circle1 daj">
//             <div className="Circle2 daj">
//               <Lottie animationData={Green_Lottie} loop={true} className="small-lottie" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WhyFertilizers;




// WhyFertilizers.jsx
import React from "react";
import Lottie from "lottie-react";
import styles from "./WhyFertilizers.module.css";
import Green_Lottie from '../assets/Green_Lottie.json.json';

const WhyFertilizers = ({ showScreen2, setShowScreen2 }) => {
  if (showScreen2) return null;

  return (
    <div className={`${styles.Uses} daj`}>
      <div className={styles.First1}>
        <div className={styles.F1}>
          <div className={styles.F_heading}>
            <span className={styles.F_heading_text}>Why Fertilizers Matter?🌱</span>
          </div>

          <div className={`${styles.F_Matter} daj`}>
            <div className={styles.F_mat}>
              <p>
                Fertilizers are the foundation of modern agriculture.
                Healthy soil is the key to healthy crops.
                Over time, soil loses its natural nutrients due to continuous farming, erosion, and climate factors.
                Fertilizers restore these vital elements like nitrogen, phosphorus, and potassium—ensuring your crops grow strong and healthy.
              </p>
              <p>With balanced and timely use of fertilizers:</p>
              <ul>
                <li>Plants grow faster and healthier</li>
                <li>Yields improve significantly</li>
                <li>Soil fertility is maintained over time</li>
                <li>Resistance to pests and diseases increases</li>
              </ul>
            </div>
          </div>

          <div className={styles.F_button}>
            <div className={`${styles.F_btn} daj`} onClick={() => setShowScreen2(true)}>Explore</div>
          </div>
        </div>

        <div className={styles.F2}>
          <div className={`${styles.Circle1} daj`}>
            <div className={`${styles.Circle2} daj`}>
              <Lottie animationData={Green_Lottie} loop={true} className={styles.smallLottie} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyFertilizers;
