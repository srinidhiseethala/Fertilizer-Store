// // FertilizerDetail.jsx
// import React from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import { FaArrowLeft } from "react-icons/fa";
// import "./FertilizerDetail.css";

// const FertilizerDetail = ({
//   selectedFertilizer,
//   setSelectedFertilizer,
//   setShowBuyForm,
//   addToCart,
//   bgImage,
// }) => {
//   return (
//     <AnimatePresence mode="wait">
//       {selectedFertilizer && (
//         <motion.div
//           key="detail"
//           className="screen3 daj"
//           initial={{ x: '100%', opacity: 0 }}
//           animate={{ x: 0, opacity: 1 }}
//           exit={{ x: '-100%', opacity: 1 }}
//           transition={{ duration: 0.3 }}
//         >
//           <img src={bgImage} alt="background" />
//           <div className="img_details daj">
//             <div className="arrow">
//               <div className="arr_box daj" onClick={() => setSelectedFertilizer(null)}>
//                 <FaArrowLeft />
//               </div>
//             </div>

//             <div className="content">
//               <div className="pimage">
//                 <div className="photo daj">
//                   <img src={selectedFertilizer.image} alt={selectedFertilizer.name} />
//                 </div>
//               </div>

//               <div className="matter">
//                 {[
//                   ["Name", selectedFertilizer.name],
//                   ["Description", selectedFertilizer.description],
//                   ["Cost per Unit", selectedFertilizer.price],
//                   ["Packaging Size", selectedFertilizer.packaging],
//                   ["Suitable Crops/Soils", selectedFertilizer.crops],
//                   ["Nutrient Composition", selectedFertilizer.nutrients],
//                   ["Application Instructions", selectedFertilizer.usage],
//                   ["Benefits", selectedFertilizer.benefits],
//                   ["Precautions", selectedFertilizer.precautions]
//                 ].map(([label, value], i) => (
//                   <div className="m_heading" key={i}>
//                     <div className="name daj">{label} :</div>
//                     <div className="text daj">{value}</div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className="order daj">
//               <div className="place daj">
//                 <div className="Buy daj" onClick={() => setShowBuyForm(true)}>BUY NOW</div>
//                 <div className="Add2Cart daj" onClick={() => addToCart(selectedFertilizer)}>ADD TO CART</div>
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// };

// export default FertilizerDetail;


// FertilizerDetail.jsx
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa";
import sri_FDetail_styles from "./FertilizerDetail.module.css";

const FertilizerDetail = ({
  selectedFertilizer,
  setSelectedFertilizer,
  setShowBuyForm,
  addToCart,
  bgImage,
}) => {
  return (
    <AnimatePresence mode="wait">
      {selectedFertilizer && (
        <motion.div
          key="detail"
          className={`${sri_FDetail_styles.screen3} daj`}
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "-100%", opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <img src={bgImage} alt="background" />

          <div className={`${sri_FDetail_styles.img_details} daj`}>
            <div className={sri_FDetail_styles.arrow}>
              <div
                className={`${sri_FDetail_styles.arr_box} daj`}
                onClick={() => setSelectedFertilizer(null)}
              >
                <FaArrowLeft />
              </div>
            </div>

            <div className={sri_FDetail_styles.content}>
              <div className={sri_FDetail_styles.pimage}>
                <div className={`${sri_FDetail_styles.photo} daj`}>
                  <img
                    src={selectedFertilizer.image}
                    alt={selectedFertilizer.name}
                  />
                </div>
              </div>

              <div className={sri_FDetail_styles.matter}>
                {[
                  ["Name", selectedFertilizer.name],
                  ["Description", selectedFertilizer.description],
                  ["Cost per Unit", selectedFertilizer.price],
                  ["Packaging Size", selectedFertilizer.packaging],
                  ["Suitable Crops/Soils", selectedFertilizer.crops],
                  ["Nutrient Composition", selectedFertilizer.nutrients],
                  ["Application Instructions", selectedFertilizer.usage],
                  ["Benefits", selectedFertilizer.benefits],
                  ["Precautions", selectedFertilizer.precautions],
                ].map(([label, value], i) => (
                  <div className={sri_FDetail_styles.m_heading} key={i}>
                    <div className={`${sri_FDetail_styles.name} daj`}>{label} :</div>
                    <div className={`${sri_FDetail_styles.text} daj`}>{value}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className={`${sri_FDetail_styles.order} daj`}>
              <div className={`${sri_FDetail_styles.place} daj`}>
                <div
                  className={`${sri_FDetail_styles.Buy} daj`}
                  onClick={() => setShowBuyForm(true)}
                >
                  BUY NOW
                </div>
                <div
                  className={`${sri_FDetail_styles.Add2Cart} daj`}
                  onClick={() => addToCart(selectedFertilizer)}
                >
                  ADD TO CART
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FertilizerDetail;
