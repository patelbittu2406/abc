import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { VottingData } from "../Data";

const Home = () => {
  const navigate = useNavigate();

  const [search, setSearch] = useState();

  const handleSearchData = () => {
    return search
      ? VottingData.filter((data) =>
          data.name
            .toLocaleLowerCase()
            .includes(search && search.toLocaleLowerCase())
        )
      : VottingData;
  };

  const onSucess = (name) => {
    navigate("/sucess", { state: { name: name } });
  };

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
      <h1>voting</h1>
      <p style={{fontSize:'10px',color:'gray'}}>naote :- pleace voting any one candidate</p>
      <input
        type="text"
        style={{
          height: "30px",
          margin:'20px',
          mexWidth: "500px",
          border: "1px solid #cbc1c1",
          borderRadius: "10px",
          padding: "10px 30px 10px 30px",
        }}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search"
      />
      <div
        style={{
          maxWidth: "500px",
          height: "100vh",
          overflow: "scroll",
          padding: "5%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {handleSearchData()
          ? handleSearchData().map((data, index) => {
              return (
                <div
                  key={index}
                  style={{
                    width: "100%",
                    height: "50px",
                    border: "1px solid #cbc1c1",
                    borderRadius: "10px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "10px",
                    marginTop: "20px",
                    boxShadow: " rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
                  }}
                >
                  <div
                    style={{
                      height: "40px",
                      width: "40px",
                      borderRadius: "50%",
                      background: "#534d4d",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <p
                      style={{
                        color: "#e7e7e7",
                        fontWeight: "bolder",
                        fontSize: "22px",
                        lineHeight: "0px",
                      }}
                    >
                      {data.name
                        .split(" ")
                        .map((word) => word[0].toUpperCase())
                        .join("")}
                    </p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      height: "40px",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      justifyContent: "space-around",
                    }}
                  >
                    <p>{data.name}</p>
                    <p> vote:- {data.votiingCount}</p>
                  </div>
                  <button
                    onClick={() => onSucess(data.name)}
                    style={{
                      height: "30px",
                      width: "70px",
                      border: "none",
                      borderRadius: "5px",
                      background: "#d1c4e9",
                    }}
                  >
                    vote
                  </button>
                </div>
              );
            })
          : "No Data Found"}
      </div>
    </div>
  );
};

export default Home;
