
// // import { useState } from 'react';
// // import axios from 'axios';
// // import './App.css';

// // function App() {

//   // const [Fname, setFname] = useState('');
//   // const [Lname, setLname] = useState('');
//   // const [Number, setNumber] = useState('');
//   // const [Date, setDate] = useState('');
//   // const [Gender, setGender] = useState('');
//   // const [Email, setEmail] = useState('');
//   // const [Hobbies, setHobbies] = useState('');
//   // const [data, setData] = useState([]);

//   // const fetchData = async () => {
//   //   try {
//   //     const response = await axios.get("https://api.jami.ltd/getAllRecords");
//   //     console.log("GET Response:", response.data);
//   //     setData(response.data);
//   //   } catch (error) {
//   //     console.error("Error fetching data:", error);
//   //   }
//   // };

//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();
//   //   const formData = {
//   //     fname: Fname,
//   //     lname: Lname,
//   //     mobile: Number,
//   //     dob: Date,
//   //     gender: Gender,
//   //     email: Email,
//   //     hobbies: Hobbies.split(",")
//   //   };

//   //   try {
//   //     await axios.post("https://api.jami.ltd/createTask", formData, {
//   //       headers: { 'Content-Type': 'application/json' },
//   //     });
//   //     alert("Record Added Successfully!");
//   //     resetForm();
//   //   } catch (error) {
//   //     console.error("Error saving data:", error);
//   //     alert("There was an error");
//   //   }
//   // };

//   // const handleDelete = async (id) => {
//   //   if (window.confirm("Are you sure you want to delete this record?")) {
//   //     try {
//   //       await axios.delete(`https://api.jami.ltd/deleteRecord/${id}`);
//   //       alert("Record Deleted Successfully!");
//   //       fetchData();
//   //     } catch (error) {
//   //       console.error("Error deleting record:", error);
//   //     }
//   //   }
//   // };

//   // const resetForm = () => {
//   //   setFname('');
//   //   setLname('');
//   //   setNumber('');
//   //   setDate('');
//   //   setGender('');
//   //   setEmail('');
//   //   setHobbies('');
//   // };

//   // return (
//   //   <div className="container">
//   //     <h2>CRUD Operations</h2>
//   //     <form onSubmit={handleSubmit}>
//   //       <input value={Fname} type="text" onChange={(e) => setFname(e.target.value)} placeholder="First Name" required />
//   //       <input value={Lname} type="text" onChange={(e) => setLname(e.target.value)} placeholder="Last Name" required />
//   //       <input value={Number} type="number" onChange={(e) => setNumber(e.target.value)} placeholder="Mobile Number" required />
//   //       <input value={Date} type="date" onChange={(e) => setDate(e.target.value)} required />
//   //       <input value={Email} type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
//   //       <input value={Hobbies} type="text" onChange={(e) => setHobbies(e.target.value)} placeholder="Hobbies (comma separated)" required />

//   //       <div>
//   //         <label>Gender:</label>
//   //         <input type="radio" name="Gender" value="Male" checked={Gender === "Male"} onChange={(e) => setGender(e.target.value)} /> Male
//   //         <input type="radio" name="Gender" value="Female" checked={Gender === "Female"} onChange={(e) => setGender(e.target.value)} /> Female
//   //       </div>

//   //       <button type="submit">Add Record</button>
//   //     </form>

//   //     <button onClick={fetchData}>Read Records</button>

//   //     <table>
//   //       <thead>
//   //         <tr>
//   //           <th>First Name</th>
//   //           <th>Last Name</th>
//   //           <th>Mobile</th>
//   //           <th>DOB</th>
//   //           <th>Gender</th>
//   //           <th>Email</th>
//   //           <th>Hobbies</th>
//   //           <th>Actions</th>
//   //         </tr>
//   //       </thead>
//   //       <tbody>
//   //         {data.length > 0 ? (
//   //           data.map((record) => (
//   //             <tr key={record._id}>
//   //               <td>{record.fname}</td>
//   //               <td>{record.lname}</td>
//   //               <td>{record.mobile}</td>
//   //               <td>{record.dob}</td>
//   //               <td>{record.gender}</td>
//   //               <td>{record.email}</td>
//   //               <td>{record.hobbies.join(", ")}</td>
//   //               <td>
//   //                 <button onClick={() => handleDelete(record._id)}>Delete</button>
//   //               </td>
//   //             </tr>
//   //           ))
//   //         ) : (
//   //           <tr><td colSpan="8">No records found.</td></tr>
//   //         )}
//   //       </tbody>
//   //     </table>
//   //   </div>
//   // );

// // }

// // export default App;


// import { useState, useEffect } from "react";
// import './App.css';
// function App() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     number: "",
//     profile: null,
//   });

//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   const fetchUsers = async () => {
//     const res = await fetch("http://localhost:5000/api/users");
//     const data = await res.json();
//     setUsers(data);
//   };

//   const handleChange = (e) => {
//     const { name, value, type, files } = e.target;
//     if (type === "file") {
//       setFormData((prev) => ({ ...prev, profile: files[0] }));
//     } else {
//       setFormData((prev) => ({ ...prev, [name]: value }));
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     alert("Form submitted");
//     const form = new FormData();
//     form.append("Name", formData.name);
//     form.append("Email", formData.email);
//     form.append("MobileNumber", formData.number);
//     form.append("Profile", formData.profile);

//     await fetch("http://localhost:5000/api/insert", {
//       method: "POST",
//       body: form,
//     });

//     fetchUsers(); 
//   };

//   return (
//     <>
//       <h3>Register User</h3>
//       <form onSubmit={handleSubmit}>
//         <h4>Name: <input type="text" name="name" placeholder="Enter name" onChange={handleChange} /></h4>
//         <h4>Email: <input type="email" name="email" placeholder="Enter email" onChange={handleChange} /></h4>
//         <h4>Number: <input type="number" name="number" placeholder="Enter number" onChange={handleChange} /></h4>
//         <h4>Profile: <input type="file" name="profile" onChange={handleChange} /></h4>
//         <button type="submit">Submit</button>
//       </form>

//     </>
//   );
// }

// export default App;





// App.jsx
import React from 'react';
import Prod_page from './Pspace/Product.jsx';
import SupportForm from './Pspace/SupportForm.jsx';
import BulkOrderForm from './Pspace/BulkOrderForm.jsx';
// import Prod_page from './FERTILIZER_FRONTEND/Pspace/Product.jsx';
function App() {
  return (
    <div>
      <Prod_page/>
      {/* <SupportForm /> */}
      {/* <BulkOrderForm /> */}
    </div>
  );
}

export default App;
