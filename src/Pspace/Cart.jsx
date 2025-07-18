import React from "react";
import { FaArrowLeft, FaMinus, FaPlus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { RiShoppingBag4Fill } from "react-icons/ri";
import { BsBagCheckFill } from "react-icons/bs";

import "./Cart.css";

const Cart = ({
  cartItems,
  setShowCart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  setShowBuyForm,
  setIsCartMode,
}) => {
  const grandTotal = cartItems.reduce((acc, item) => acc + item.subtotal, 0);

  return (
    <div className="CART daj container-fluid py-4">
      {/* Header with arrow and bag icon */}
      <div className="phrase daj">
        <div className="arr_box daj" onClick={() => setShowCart(false)}>
          <FaArrowLeft />
        </div>
        Ready to grow? Let's get these fertilizers to your doorstep!
        <div className="phrase_bag">
          <RiShoppingBag4Fill />
        </div>
      </div>

      {/* Cart Items */}
      <div className="cart-items-scroll px-3">
      <div className="row g-4 justify-content-center">
        {cartItems.map((item, index) => (
          <div
            key={index}
            className="cart_prod col-12 col-md-6 d-flex p-2 align-items-center"
          >
            <div className="c_image">
              <img src={item.image} alt={item.name} />
            </div>

            <div className="c_details ps-3">
              <div className="c_name">
                <div className="c_key">Name:</div>
                <div className="c_value">{item.name}</div>
              </div>

              <div className="c_name">
                <div className="c_key">Quantity:</div>
                <div className="c_value">
                  <button onClick={() => decreaseQuantity(index)}>
                    <FaMinus />
                  </button>
                  <span className="mx-2">{item.quantity}</span>
                  <button onClick={() => increaseQuantity(index)}>
                    <FaPlus />
                  </button>
                </div>
              </div>

              <div className="c_name">
                <div className="c_key">Sub Total:</div>
                <div className="c_value">₹{item.subtotal.toFixed(2)}</div>
              </div>
            </div>

            <div className="Delete ms-auto" onClick={() => removeFromCart(index)}>
              <MdDelete />
            </div>
          </div>
        ))}
      </div>
      </div>

      {/* Grand Total */}

      {cartItems.length > 0 && (
        <>
          <div className="Grand">Grand Total: ₹{grandTotal.toFixed(2)}</div>
          <div
            className="ProceedBuy btn btn-primary mt-3"
            onClick={() => {
              setShowCart(false);       // hide cart
              setIsCartMode(true);      // activate cart-mode
              setShowBuyForm(true);     // show BuyForm
            }}
          >
            Proceed to Buy
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
