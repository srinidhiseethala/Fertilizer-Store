// import React from 'react';
// import Confetti from 'react-confetti';
// import { useWindowSize } from 'react-use';
// import './OrderConfirmed.css';

// const OrderConfirmed = ({ order, onClose }) => {
//   const { width, height } = useWindowSize(); // handles full screen width

//   if (!order) return null;

//   return (
//     <div className="OrderConfirmed daj">
//       {/* 🎊 Confetti Animation */}
//       <Confetti width={width} height={height} recycle={true} numberOfPieces={300}/>

//       <div className="box">
//         <div className="emoji-blast">🎇 🧨 🎉 🥳</div>
//         <h2>🎉 Thank you, {order.fullName}!</h2>
//         <p>Your order for <strong>{order.fertilizerName}</strong> (Qty: {order.quantity}) has been placed.</p>
//         <p>Total Paid: ₹{order.totalPrice}</p>
//         <p>Delivery to: {order.address}, {order.city}, {order.state} - {order.pinCode}</p>
//         <button onClick={onClose}>OK</button>
//       </div>
//     </div>
//   );
// };

// export default OrderConfirmed;



import React from 'react';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';
import sri_orderConform_styles from './OrderConfirmed.module.css';

const OrderConfirmed = ({ order, onClose }) => {
  const { width, height } = useWindowSize();

  if (!order) return null;

  return (
    <div className={`${sri_orderConform_styles.OrderConfirmed} daj`}>
      {/* 🎊 Confetti Animation */}
      <Confetti width={width} height={height} recycle={true} numberOfPieces={300} />

      <div className={sri_orderConform_styles.box}>
        <div className={sri_orderConform_styles.emojiBlast}>🎇 🧨 🎉 🥳</div>
        <h2>🎉 Thank you, {order.fullName}!</h2>
        <p>Your order for <strong>{order.fertilizerName}</strong> (Qty: {order.quantity}) has been placed.</p>
        <p>Total Paid: ₹{order.totalPrice}</p>
        <p>Delivery to: {order.address}, {order.city}, {order.state} - {order.pinCode}</p>
        <button onClick={onClose}>OK</button>
      </div>
    </div>
  );
};

export default OrderConfirmed;
