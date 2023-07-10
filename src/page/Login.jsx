import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../image/text.png";


const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const validation = () => {
    if (!formData.email || formData.password.length < 7) return false;
    return true;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post('https://abc-9z6qj9c5x-patelbittu2406.vercel.app/api/posts',formData );
      if(response.status === 201){
        setTimeout(()=>{
          navigate('/home')
        },2000)
      }
    } catch (err) {
      console.log(err);
    }

  };

  useEffect(() => {
    validation();
  }, [formData]);

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          maxWidth: "500px",
          padding: "10%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img style={{ height: "70px" }} src={Logo} alt="" />
        <input
          onChange={handleChange}
          name="email"
          style={{
            marginTop: "50px",
            width: "100%",
            height: "20px",
            padding: "10px",
            borderRadius: "10px",
            border: "1px solid gray",
          }}
          placeholder="Phone number email or username"
          type="text"
        />
        <input
          onChange={handleChange}
          name="password"
          style={{
            width: "100%",
            height: "20px",
            padding: "10px",
            borderRadius: "10px",
            border: "1px solid gray",
            marginTop: "15px",
          }}
          placeholder="password"
          type="password"
        />
        <button
          disabled={!validation()}
          onClick={handleLogin}
          style={{
            background: "#0095f6",
            height: "35px",
            width: "110%",
            color: "white",
            marginTop: "35px",
            borderRadius: "10px",
            border: "0px solid gray",
            fontWeight: "bold",
          }}
        >
          Login
        </button>
        <p style={{ fontSize: "12px", marginTop: "5px" }}>
          Forgot your login Details?{" "}
          <span style={{ fontWeight: "bold", color: "#0095f6" }}>
            Get help Logging
          </span>{" "}
        </p>
      </div>
    </div>
  );
};

export default Login;
