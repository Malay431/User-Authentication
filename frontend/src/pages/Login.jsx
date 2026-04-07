import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8000/auth/login",
        loginForm
      );
      console.log(response);
      if (response.status) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("UserName", response.data.user.name);
        setInterval(() => {
          navigate("/");
        }, 5000);
      }
    } catch (error) {
      return console.log(error);
    }
  };
  return (
    <div>
      <form onSubmit={handleLoginSubmit}>
        <div>
          <label>Email: </label>
          <input
            name="email"
            value={loginForm.email}
            onChange={(e) =>
              setLoginForm({ ...loginForm, email: e.target.value })
            }
            type="email"
            placeholder="Enter Your Email..."
          />
        </div>
        <div>
          <label>Password: </label>
          <input
            name="password"
            value={loginForm.password}
            onChange={(e) =>
              setLoginForm({ ...loginForm, password: e.target.value })
            }
            type="password"
            placeholder="Enter Your Password..."
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
