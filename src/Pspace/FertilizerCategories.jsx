// // FertilizerCategories.jsx
// import React from "react";
// import { IoMdFlower } from "react-icons/io";
// import "./FertilizerCategories.css";
// import offer1 from "../assets/offer1.jpg"; 
// import leaf from "../assets/leaf.png";     

// const FertilizerCategories = ({ showScreen2 }) => {
//   if (showScreen2) return null;

//   return (
//     <div className="category daj">
//       {/* Banner */}
//       <div className="Offer_bg">
//         <img src={offer1} alt="Offer background" />
//         <div className="img_txt daj">Fertilizer Categories</div>
//       </div>

//       {/* Category Sections */}
//       <div className="Offer_txt daj">
//         {/* By Type */}
//         <div className="T1">
//           <div className="t1_head daj">By Type of Fertilizer🌿</div>
//           <div className="types daj">
//             <div className="Point daj">
//               <div className="P_circle daj"><IoMdFlower /></div>
//               <div className="P_txt daj">Organic Fertilizers</div>
//             </div>
//             <div className="Point daj">
//               <div className="P_circle daj"><IoMdFlower /></div>
//               <div className="P_txt daj">Inorganic Fertilizers</div>
//             </div>
//             <div className="Point daj">
//               <div className="P_circle daj"><IoMdFlower /></div>
//               <div className="P_txt daj">Biofertilizers</div>
//             </div>
//           </div>
//           <div className="t1_img daj"><img src={leaf} alt="Leaf" /></div>
//         </div>

//         {/* By Nutrient */}
//         <div className="T1">
//           <div className="t1_head daj">By Nutrient Content🧪</div>
//           <div className="types daj">
//             <div className="Point daj">
//               <div className="P_circle daj"><IoMdFlower /></div>
//               <div className="P_txt daj">Nitrogen Fertilizers</div>
//             </div>
//             <div className="Point daj">
//               <div className="P_circle daj"><IoMdFlower /></div>
//               <div className="P_txt daj">Phosphorus Fertilizers</div>
//             </div>
//             <div className="Point daj">
//               <div className="P_circle daj"><IoMdFlower /></div>
//               <div className="P_txt daj">Potassium Fertilizers</div>
//             </div>
//           </div>
//           <div className="t1_img daj"><img src={leaf} alt="Leaf" /></div>
//         </div>

//         {/* By Crop Type */}
//         <div className="T1">
//           <div className="t1_head daj">By Crop Type🌱</div>
//           <div className="types daj">
//             <div className="Point daj">
//               <div className="P_circle daj"><IoMdFlower /></div>
//               <div className="P_txt daj">For Fruits & Vegetables</div>
//             </div>
//             <div className="Point daj">
//               <div className="P_circle daj"><IoMdFlower /></div>
//               <div className="P_txt daj">For Flowers & Lawns</div>
//             </div>
//             <div className="Point daj">
//               <div className="P_circle daj"><IoMdFlower /></div>
//               <div className="P_txt daj">Paddy & Others</div>
//             </div>
//           </div>
//           <div className="t1_img daj"><img src={leaf} alt="Leaf" /></div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FertilizerCategories;




import React from "react";
import { IoMdFlower } from "react-icons/io";
import sri_fcategories_styles from "./FertilizerCategories.module.css";
import offer1 from "../assets/offer1.jpg"; 
import leaf from "../assets/leaf.png";     

const FertilizerCategories = ({ showScreen2 }) => {
  if (showScreen2) return null;

  return (
    <div className={`${sri_fcategories_styles.category} daj`}>
      <div className={sri_fcategories_styles.Offer_bg}>
        <img src={offer1} alt="Offer background" />
        <div className={`${sri_fcategories_styles.img_txt} daj`}>Fertilizer Categories</div>
      </div>

      <div className={`${sri_fcategories_styles.Offer_txt} daj`}>
        {/* By Type */}
        <div className={sri_fcategories_styles.T1}>
          <div className={`${sri_fcategories_styles.t1_head} daj`}>By Type of Fertilizer🌿</div>
          <div className={`${sri_fcategories_styles.types} daj`}>
            {["Organic Fertilizers", "Inorganic Fertilizers", "Biofertilizers"].map((txt, i) => (
              <div className={`${sri_fcategories_styles.Point} daj`} key={i}>
                <div className={`${sri_fcategories_styles.P_circle} daj`}><IoMdFlower /></div>
                <div className={`${sri_fcategories_styles.P_txt} daj`}>{txt}</div>
              </div>
            ))}
          </div>
          <div className={`${sri_fcategories_styles.t1_img} daj`}><img src={leaf} alt="Leaf" /></div>
        </div>

        {/* By Nutrient */}
        <div className={sri_fcategories_styles.T1}>
          <div className={`${sri_fcategories_styles.t1_head} daj`}>By Nutrient Content🧪</div>
          <div className={`${sri_fcategories_styles.types} daj`}>
            {["Nitrogen Fertilizers", "Phosphorus Fertilizers", "Potassium Fertilizers"].map((txt, i) => (
              <div className={`${sri_fcategories_styles.Point} daj`} key={i}>
                <div className={`${sri_fcategories_styles.P_circle} daj`}><IoMdFlower /></div>
                <div className={`${sri_fcategories_styles.P_txt} daj`}>{txt}</div>
              </div>
            ))}
          </div>
          <div className={`${sri_fcategories_styles.t1_img} daj`}><img src={leaf} alt="Leaf" /></div>
        </div>

        {/* By Crop Type */}
        <div className={sri_fcategories_styles.T1}>
          <div className={`${sri_fcategories_styles.t1_head} daj`}>By Crop Type🌱</div>
          <div className={`${sri_fcategories_styles.types} daj`}>
            {["For Fruits & Vegetables", "For Flowers & Lawns", "Paddy & Others"].map((txt, i) => (
              <div className={`${sri_fcategories_styles.Point} daj`} key={i}>
                <div className={`${sri_fcategories_styles.P_circle} daj`}><IoMdFlower /></div>
                <div className={`${sri_fcategories_styles.P_txt} daj`}>{txt}</div>
              </div>
            ))}
          </div>
          <div className={`${sri_fcategories_styles.t1_img} daj`}><img src={leaf} alt="Leaf" /></div>
        </div>
      </div>
    </div>
  );
};

export default FertilizerCategories;
