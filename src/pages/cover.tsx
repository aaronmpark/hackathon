import React from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../components/navBar";

const Cover = () => {
  const navigate = useNavigate();

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Navbar />
      <div
        style={{
          flexGrow: 1,
          backgroundColor: "#282c4c",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            position: "relative",
            width: "calc(100% - 210px)",
            backgroundColor: "white",
          }}
        >
          <img
            src={"../imgs/owl.png"}
            alt="Owl"
            style={{
              width: "100%",
              height: "auto",
              maxHeight: "70vh",
              objectFit: "contain",
              filter: "blur(2px)",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              color: "white",
              textAlign: "center",
            }}
          >
            <h1
              style={{
                color: "black",
                display: "flex",
                fontFamily: "'Verdana', sans-serif",
                fontVariant: "small-caps",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                fontSize: "3vw",
                fontWeight: "500",
              }}
            >
              Hoo's curious about Cybersecurity?
            </h1>
            <button
              className="btn btn-lg btn-secondary"
              style={{
                backgroundColor: "#282c4c",
                color: "white",
                padding: "10px 20px",
                borderRadius: "50px",
              }}
              onClick={() => navigate("/About")}
            >
              Begin
            </button>
          </div>
        </div>
      </div>
      <footer
        className="text-center"
        style={{
          backgroundColor: "#282c4c",
          color: "#d9451e",
          fontFamily: "'Verdana', sans-serif",
          fontVariant: "small-caps",
          fontWeight: 500,
          padding: "54px",
        }}
      >
        Not Affiliated With The University of Virginia
      </footer>
    </div>
  );
};

export default Cover;
