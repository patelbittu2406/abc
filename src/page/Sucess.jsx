import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Sucess = () => {
  const location = useLocation();
  const navigate = useNavigate()

  const goToHome = () => {
    navigate('/')
  }

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
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
        <h1>Thank You</h1>
        <span>for votiong !!</span>
        <p>-{location.state.name}</p>
      </div>
      <button
      onClick={goToHome}
        style={{
          height: "40px",
          width: "80px",
          border: "0px",
          borderRadius: "10px",
        }}
      >
        Home
      </button>
    </div>
  );
};

export default Sucess;
