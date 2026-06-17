import axios from "axios";
import { useState } from "react";

function Register() {

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobileNumber: "",
    password: ""
  });
  console.log(formData);

  const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value
  });
};

const handleSubmit = async () => {
  try {

    const response = await axios.post(
      "http://localhost:5000/api/register",
      formData
    );

    alert(response.data.message);

  } catch (error) {

    alert(error.response.data.message);

  }
};

  return (
    <div className="container">
      <h2>Register Page</h2>

      <input
        type="text"
        name="fullName"
        placeholder="Full Name"
        onChange={handleChange}
      />

      <br /><br />

      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleChange}
      />

      <br /><br />

      <input
        type="text"
        name="mobileNumber"
        placeholder="Mobile Number"
        onChange={handleChange}
      />

      <br /><br />

      <input
        type="password"
        placeholder="Password"
        onchange={handleChange}
      />

      <br /><br />

      <button onClick={handleSubmit}>
         Register
      </button>
      <p style={{ textAlign: "center" }}>
         Already have an account? <a href="/">Login</a>
      </p>
    </div>
  );
}

export default Register;