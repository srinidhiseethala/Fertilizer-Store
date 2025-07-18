// Sidebar.jsx
import React from "react";
import "./Sidebar.css";
import { MdFilterListAlt } from "react-icons/md";

const Sidebar = ({
  sidebarOpen,
  closeSidebar,
  selectedType,
  handleTypeClick,
  setDisplayedFertilizers,
  fertilizers,
  setSelectedType,
}) => {
  return (
    <>
      {sidebarOpen && <div className="dim-overlay" onClick={closeSidebar}></div>}
      <div className={`sidebar slide-in ${sidebarOpen ? "open" : ""}`}>
        <div className="side_bg">
          <div className="filter">
            Filter <MdFilterListAlt />
          </div>

          <div className="side_heading">By Type of Fertilizer🌿</div>
          {["Organic", "Inorganic", "Biofertilizers"].map((type) => (
            <div
              key={type}
              className={`side_text ${selectedType === type ? "selected" : ""}`}
              onClick={() => handleTypeClick(type)}
            >
              {type}
            </div>
          ))}

          <div className="side_heading">By Nutrient Content🧪</div>
          {["Nitrogen", "Phosphorus", "Potassium"].map((type) => (
            <div
              key={type}
              className={`side_text ${selectedType === type ? "selected" : ""}`}
              onClick={() => handleTypeClick(type)}
            >
              {type} Fertilizers
            </div>
          ))}

          <div className="side_heading">By Crop Type🌱</div>
          {["Fruits & Vegetables", "Flowers & Lawns", "Paddy & Others"].map((type) => (
            <div
              key={type}
              className={`side_text ${selectedType === type ? "selected" : ""}`}
              onClick={() => handleTypeClick(type)}
            >
              {type}
            </div>
          ))}

          <div
            className={`side_text ${selectedType === null ? "selected" : ""}`}
            onClick={() => {
              setDisplayedFertilizers(fertilizers); // Reset to default
              setSelectedType(null);
              closeSidebar();
            }}
          >
            Popular Fertilizers✨
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;



// import React from "react";
// import styles from "./Sidebar.module.css";
// import { MdFilterListAlt } from "react-icons/md";

// const Sidebar = ({
//   sidebarOpen,
//   closeSidebar,
//   selectedType,
//   handleTypeClick,
//   setDisplayedFertilizers,
//   fertilizers,
//   setSelectedType,
// }) => {
//   return (
//     <>
//       {sidebarOpen && <div className={styles.dimOverlay} onClick={closeSidebar}></div>}
//       <div className={`${styles.sidebar} ${styles.slideIn} ${sidebarOpen ? styles.open : ""}`}>
//         <div className={styles.sideBg}>
//           <div className={styles.filter}>
//             Filter <MdFilterListAlt />
//           </div>

//           <div className={styles.sideHeading}>By Type of Fertilizer🌿</div>
//           {["Organic", "Inorganic", "Biofertilizers"].map((type) => (
//             <div
//               key={type}
//               className={`${styles.sideText} ${selectedType === type ? styles.selected : ""}`}
//               onClick={() => handleTypeClick(type)}
//             >
//               {type}
//             </div>
//           ))}

//           <div className={styles.sideHeading}>By Nutrient Content🧪</div>
//           {["Nitrogen", "Phosphorus", "Potassium"].map((type) => (
//             <div
//               key={type}
//               className={`${styles.sideText} ${selectedType === type ? styles.selected : ""}`}
//               onClick={() => handleTypeClick(type)}
//             >
//               {type} Fertilizers
//             </div>
//           ))}

//           <div className={styles.sideHeading}>By Crop Type🌱</div>
//           {["Fruits & Vegetables", "Flowers & Lawns", "Paddy & Others"].map((type) => (
//             <div
//               key={type}
//               className={`${styles.sideText} ${selectedType === type ? styles.selected : ""}`}
//               onClick={() => handleTypeClick(type)}
//             >
//               {type}
//             </div>
//           ))}

//           <div
//             className={`${styles.sideText} ${selectedType === null ? styles.selected : ""}`}
//             onClick={() => {
//               setDisplayedFertilizers(fertilizers);
//               setSelectedType(null);
//               closeSidebar();
//             }}
//           >
//             Popular Fertilizers✨
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Sidebar;
