// // BuyForm.jsx
// import React from "react";
// import { FaPlus, FaMinus } from "react-icons/fa";
// import { ImCross } from "react-icons/im";
// import { FaBuilding } from "react-icons/fa";
// import { motion } from "framer-motion";
// import "./BuyForm.css";

// const BuyForm = ({
//   showBuyForm,
//   setShowBuyForm,
//   selectedFertilizer,
//   quantity,
//   totalPrice,
//   formData,
//   handleChange,
//   increaseQty,
//   decreaseQty,
//   handleSubmit,
//   isCartMode, cartItems
// }) => {
//   if (!showBuyForm) return null;
//   const itemsToOrder = isCartMode
//     ? cartItems
//     : [{ name: selectedFertilizer.name, image: selectedFertilizer.image, quantity, subtotal: totalPrice }];
//   return (
//     <div className="Buy_bg daj">
//       {!isCartMode && (
//       <div className="base1">
//         <div className="cross daj" onClick={() => setShowBuyForm(false)}>
//           <ImCross />
//         </div>
//         <div className="Order_img">
//           <div className="photo daj">
//             <img src={selectedFertilizer.image} alt={selectedFertilizer.name} />
//           </div>
//           <div className="Quantity">
//             <div className="Qt daj">Qt:</div>
//             <motion.div
//               className="inc daj"
//               onClick={increaseQty}
//               whileTap={{ scale: 1.4 }}
//               whileHover={{ scale: 1.2 }}
//             >
//               <FaPlus />
//             </motion.div>
//             <motion.div
//               key={quantity}
//               className="num daj"
//               initial={{ scale: 0.9 }}
//               animate={{ scale: 1.3 }}
//             >
//               {quantity}
//             </motion.div>
//             <motion.div
//               className="dec daj"
//               onClick={decreaseQty}
//               whileTap={{ scale: 1.4 }}
//               whileHover={{ scale: 1.2 }}
//             >
//               <FaMinus />
//             </motion.div>
//           </div>
//           <div className="Total daj">
//             <div className="total daj">Total :</div>
//             <motion.div
//               key={totalPrice}
//               className="amount daj"
//               initial={{ scale: 1 }}
//               animate={{ scale: 1.3 }}
//             >
//               ₹{totalPrice}
//             </motion.div>
//           </div>
//         </div>
//       </div>
//       )}

//       {/* {isCartMode && (
//         <>
//         <div className="cartOrderSummary">
//           <h3>Review your cart items:</h3>
//           {itemsToOrder.map((item, idx) => (
//             <div key={idx}>• {item.name} x {item.quantity} = ₹{item.subtotal.toFixed(2)}</div>
//           ))}
//           <h4>Total: ₹{cartItems.reduce((acc, i) => acc + i.subtotal, 0).toFixed(2)}</h4>
//         </div>
//         </>
//       )} */}
      
//       <div className="base2">
//         <div className="Rect">
//           <div className="key">Full Name :</div>
//           <div className="value">
//             <input type="text" name="fullName" placeholder="Enter your full name"
//               value={formData.fullName}
//               onChange={handleChange}
//             />
//           </div>
//         </div>
//         <div className="Rect">
//           <div className="key">Email :</div>
//           <div className="value">
//             <input
//               type="email"
//               name="email"
//               placeholder="Enter your email"
//               value={formData.email}
//               onChange={handleChange}
//             />
//           </div>
//         </div>
//         <div className="Rect">
//           <div className="key">Phone Number :</div>
//           <div className="value">
//             <input
//               type="tel"
//               name="phone"
//               placeholder="Enter your phone number"
//               value={formData.phone}
//               onChange={handleChange}
//             />
//           </div>
//         </div>

//         <div className="Rect1">Shipping Address <FaBuilding /></div>

//         <div className="Rect">
//           <div className="key">City :</div>
//           <div className="value">
//             <input
//               type="text"
//               name="city"
//               placeholder="Enter your city"
//               value={formData.city}
//               onChange={handleChange}
//             />
//           </div>
//         </div>
//         <div className="Rect">
//           <div className="key">State :</div>
//           <div className="value">
//             <input
//               type="text"
//               name="state"
//               placeholder="Enter your state"
//               value={formData.state}
//               onChange={handleChange}
//             />
//           </div>
//         </div>
//         <div className="Rect">
//           <div className="key">Pin Code :</div>
//           <div className="value">
//             <input
//               type="text"
//               name="pinCode"
//               placeholder="Enter your pin code"
//               value={formData.pinCode}
//               onChange={handleChange}
//             />
//           </div>
//         </div>
//         <div className="Rect">
//           <div className="key">Address :</div>
//           <div className="value">
//             <textarea
//               name="address"
//               placeholder="Enter full address"
//               rows="3"
//               value={formData.address}
//               onChange={handleChange}
//             ></textarea>
//           </div>
//         </div>

//         <div className="Rect">
//           <div className="key">Payment :</div>
//           <div className="value payment-options">
//             <label>
//               <input
//                 type="radio"
//                 name="payment"
//                 value="upi"
//                 checked={formData.payment === "upi"}
//                 onChange={handleChange}
//               />{" "}
//               UPI
//             </label>
//             <label>
//               <input
//                 type="radio"
//                 name="payment"
//                 value="netbanking"
//                 checked={formData.payment === "netbanking"}
//                 onChange={handleChange}
//               />{" "}
//               Net Banking
//             </label>
//             <label>
//               <input
//                 type="radio"
//                 name="payment"
//                 value="cod"
//                 checked={formData.payment === "cod"}
//                 onChange={handleChange}
//               />{" "}
//               Cash on Delivery
//             </label>
//           </div>
//         </div>

//         <div className="Rect2" onClick={handleSubmit}>
//           PLACE ORDER
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BuyForm;



import React from "react";
import { FaPlus, FaMinus, FaBuilding } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { motion } from "framer-motion";
import sri_buy_form_styles from "./BuyForm.module.css";

const BuyForm = ({
  showBuyForm,
  setShowBuyForm,
  selectedFertilizer,
  quantity,
  totalPrice,
  formData,
  handleChange,
  increaseQty,
  decreaseQty,
  handleSubmit,
  isCartMode,
  cartItems
}) => {
  if (!showBuyForm) return null;

  const itemsToOrder = isCartMode
    ? cartItems
    : [
        {
          name: selectedFertilizer.name,
          image: selectedFertilizer.image,
          quantity,
          subtotal: totalPrice
        }
      ];

  return (
    <div className={`${sri_buy_form_styles.Buy_bg} daj`}>
      {!isCartMode && (
        <div className={sri_buy_form_styles.base1}>
          <div className={`${sri_buy_form_styles.cross} daj`} onClick={() => setShowBuyForm(false)}>
            <ImCross />
          </div>
          <div className={sri_buy_form_styles.Order_img}>
            <div className={`${sri_buy_form_styles.photo} daj`}>
              <img src={selectedFertilizer.image} alt={selectedFertilizer.name} />
            </div>
            <div className={sri_buy_form_styles.Quantity}>
              <div className={`${sri_buy_form_styles.Qt} daj`}>Qt:</div>
              <motion.div
                className={`${sri_buy_form_styles.inc} daj`}
                onClick={increaseQty}
                whileTap={{ scale: 1.4 }}
                whileHover={{ scale: 1.2 }}
              >
                <FaPlus />
              </motion.div>
              <motion.div
                key={quantity}
                className={`${sri_buy_form_styles.num} daj`}
                initial={{ scale: 0.9 }}
                animate={{ scale: 1.3 }}
              >
                {quantity}
              </motion.div>
              <motion.div
                className={`${sri_buy_form_styles.dec} daj`}
                onClick={decreaseQty}
                whileTap={{ scale: 1.4 }}
                whileHover={{ scale: 1.2 }}
              >
                <FaMinus />
              </motion.div>
            </div>
            <div className={sri_buy_form_styles.Total}>
              <div className={`${sri_buy_form_styles.total} daj`}>Total :</div>
              <motion.div
                key={totalPrice}
                className={`${sri_buy_form_styles.amount} daj`}
                initial={{ scale: 1 }}
                animate={{ scale: 1.3 }}
              >
                ₹{totalPrice}
              </motion.div>
            </div>
          </div>
        </div>
      )}

      <div className={sri_buy_form_styles.base2}>
        <div className={sri_buy_form_styles.Rect}>
          <div className={sri_buy_form_styles.key}>Full Name :</div>
          <div className={sri_buy_form_styles.value}>
            <input
              type="text"
              name="fullName"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className={sri_buy_form_styles.Rect}>
          <div className={sri_buy_form_styles.key}>Email :</div>
          <div className={sri_buy_form_styles.value}>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className={sri_buy_form_styles.Rect}>
          <div className={sri_buy_form_styles.key}>Phone Number :</div>
          <div className={sri_buy_form_styles.value}>
            <input
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className={sri_buy_form_styles.Rect1}>Shipping Address <FaBuilding /></div>

        <div className={sri_buy_form_styles.Rect}>
          <div className={sri_buy_form_styles.key}>City :</div>
          <div className={sri_buy_form_styles.value}>
            <input
              type="text"
              name="city"
              placeholder="Enter your city"
              value={formData.city}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className={sri_buy_form_styles.Rect}>
          <div className={sri_buy_form_styles.key}>State :</div>
          <div className={sri_buy_form_styles.value}>
            <input
              type="text"
              name="state"
              placeholder="Enter your state"
              value={formData.state}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className={sri_buy_form_styles.Rect}>
          <div className={sri_buy_form_styles.key}>Pin Code :</div>
          <div className={sri_buy_form_styles.value}>
            <input
              type="text"
              name="pinCode"
              placeholder="Enter your pin code"
              value={formData.pinCode}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className={sri_buy_form_styles.Rect}>
          <div className={sri_buy_form_styles.key}>Address :</div>
          <div className={sri_buy_form_styles.value}>
            <textarea
              name="address"
              placeholder="Enter full address"
              rows="3"
              value={formData.address}
              onChange={handleChange}
            ></textarea>
          </div>
        </div>

        <div className={sri_buy_form_styles.Rect}>
          <div className={sri_buy_form_styles.key}>Payment :</div>
          <div className={`${sri_buy_form_styles.value} ${sri_buy_form_styles["payment-options"]}`}>
            <label>
              <input
                type="radio"
                name="payment"
                value="upi"
                checked={formData.payment === "upi"}
                onChange={handleChange}
              />{" "}
              UPI
            </label>
            <label>
              <input
                type="radio"
                name="payment"
                value="netbanking"
                checked={formData.payment === "netbanking"}
                onChange={handleChange}
              />{" "}
              Net Banking
            </label>
            <label>
              <input
                type="radio"
                name="payment"
                value="cod"
                checked={formData.payment === "cod"}
                onChange={handleChange}
              />{" "}
              Cash on Delivery
            </label>
          </div>
        </div>

        <div className={sri_buy_form_styles.Rect2} onClick={handleSubmit}>
          PLACE ORDER
        </div>
      </div>
    </div>
  );
};

export default BuyForm;
