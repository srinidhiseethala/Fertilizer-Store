import React, { useState } from "react";
import axios from "axios";
// import "./BulkOrderForm.css";

const BulkOrderForm = () => {
  const [form, setForm] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    fertilizerTypes: "",
    quantity: "",
    deliveryAddress: "",
    preferredDate: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/bulk-order/submit-bulk-order", form);
      alert("✅ Bulk order submitted! Request ID: " + res.data.requestNumber);
    } catch (err) {
      console.error(err);
      alert("❌ Failed to submit bulk order.");
    }
  };

  return (
    <div className="bulk-order-form">
      <h2>Enterprise Bulk Order Form</h2>
      <input name="companyName" placeholder="Company Name" onChange={handleChange} />
      <input name="contactPerson" placeholder="Contact Person" onChange={handleChange} />
      <input name="email" type="email" placeholder="Email Address" onChange={handleChange} />
      <textarea name="fertilizerTypes" placeholder="Fertilizer Types (comma separated)" onChange={handleChange}></textarea>
      <input name="quantity" type="number" placeholder="Quantity in KG" onChange={handleChange} />
      <textarea name="deliveryAddress" placeholder="Delivery Address" onChange={handleChange}></textarea>
      <input name="preferredDate" type="date" onChange={handleChange} />
      <button onClick={handleSubmit}>Submit Order</button>
    </div>
  );
};

export default BulkOrderForm;
