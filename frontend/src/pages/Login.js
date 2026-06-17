import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });

  console.log(loginData);

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    });
  };

  const handleLogin = async () => {
  try {

        const response = await axios.post(
        "http://localhost:5000/api/login",
        loginData
  );

    alert(response.data.message);

      localStorage.setItem(
        "token",
        response.data.token
);

navigate("/home");

  } catch (error) {
        console.log(error);

        if (error.response) {
            alert(error.response.data.message);
        } else {
            alert("Unable to connect to server");
        }
    }
};

  return (
    <div className="container">
      <h2>Login Page</h2>

      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleChange}
      />

      <br /><br />

      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
      />

      <br /><br />

      <button onClick={handleLogin}>
         Login
      </button>
      <p style={{ textAlign: "center" }}>
         Don't have an account? <a href="/register">Register</a>
      </p>
    </div>
  );
}

export default Login;