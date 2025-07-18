// import React, { useState } from "react";
// import axios from "axios";
// // import "./SupportForm.css"; 

// const SupportForm = () => {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     orderId: "",
//     issueType: "Order Issue",
//     message: ""
//   });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async () => {
//     try {
//       const res = await axios.post("http://localhost:5000/api/submit-ticket", form);
//       alert("Support ticket created: " + res.data.ticket);
//     } catch (error) {
//       alert("Failed to create ticket. Please try again.");
//     }
//   };

//   return (
//     <div className="support-form">
//       <h2>Need Help?</h2>
//       <input type="text" name="name" placeholder="Your Name" onChange={handleChange} />
//       <input type="email" name="email" placeholder="Email Address" onChange={handleChange} />
//       <input type="text" name="orderId" placeholder="Order ID (if any)" onChange={handleChange} />
//       <select name="issueType" onChange={handleChange}>
//         <option>Order Issue</option>
//         <option>Fertilizer Help</option>
//         <option>Refund Request</option>
//         <option>Other</option>
//       </select>
//       <textarea name="message" placeholder="Describe your issue..." onChange={handleChange}></textarea>
//       <button onClick={handleSubmit}>Submit Ticket</button>
//     </div>
//   );
// };

// export default SupportForm;




import React, { useState } from "react";
import axios from "axios";
import "./SupportForm.css"; // optional styling

const SupportForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    orderId: "",
    issueType: "Order Issue",
    message: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/submit-ticket", form);
      alert("Support ticket created: " + res.data.ticket);
    } catch (error) {
      alert("Failed to create ticket. Please try again.");
    }
  };

  return (
    <div className="support-form">
      <h2>Need Help?</h2>
      <input type="text" name="name" placeholder="Your Name" onChange={handleChange} />
      <input type="email" name="email" placeholder="Email Address" onChange={handleChange} />
      <input type="text" name="orderId" placeholder="Order ID (if any)" onChange={handleChange} />
      <select name="issueType" onChange={handleChange}>
        <option>Order Issue</option>
        <option>Fertilizer Help</option>
        <option>Refund Request</option>
        <option>Other</option>
      </select>
      <textarea name="message" placeholder="Describe your issue..." onChange={handleChange}></textarea>
      <button onClick={handleSubmit}>Submit Ticket</button>
    </div>
  );
};

export default SupportForm;
