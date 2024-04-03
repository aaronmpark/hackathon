import React from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../components/navBar";

const Cover = () => {
  const navigate = useNavigate();

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <Navbar />
        <div style={{ background: "#181c3c" }}>&nbsp;</div>
        <div
          style={{
            position: "relative",
            flexGrow: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
            maxHeight: "calc(100vh - 160px)", // Adjust based on actual Navbar and Footer height
            background:
              "linear-gradient(to bottom left, #232e4c 50%, white 50%)",
          }}
        >
          <img
            src={"../imgs/owl.png"}
            alt="Owl"
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              objectFit: "contain", // Use 'contain' to ensure the image fits within the div without cropping
              filter: "blur(3.5px)",
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
            <style>
              {`
              @keyframes typing {
                from { width: 0; }
                to { width: 100%; }
              }
              @keyframes blinkCursor {
                from { border-right-color: transparent; }
                to { border-right-color: black; }
              }
              .typing {
                display: inline-block;
                overflow: hidden;
                border-right: 3px solid black;
                white-space: nowrap;
                letter-spacing: 2px;
                animation: 
                  typing 4s steps(40, end),
                  blinkCursor .75s step-end infinite;
              }
            `}
            </style>
            <div
              className="typing-container"
              style={{
                fontSize: "35px",
                fontFamily: "'Verdana', sans-serif",
                fontVariant: "small-caps",
                fontWeight: 500,
                margin: "20px",
                color: "black",
              }}
            >
              <span className="typing">Hoo's curious about Cybersecurity?</span>
            </div>
            <button
              className="btn btn-lg btn-secondary"
              style={{
                fontFamily: "'Verdana', sans-serif",
                backgroundColor: "#232e4c",
                color: "white",
                padding: "10px 20px",
                marginTop: "20px",
              }}
              onClick={() => navigate("/Instructions")}
            >
              Begin
            </button>
          </div>
        </div>
        <footer
          className="border-top text-center"
          style={{
            fontFamily: "'Verdana', sans-serif",
            fontVariant: "small-caps",
            fontWeight: 500,
            padding: "20px", // Consider this in your total height calculation
          }}
        >
          Not Affiliated With The University of Virginia
        </footer>
      </div>
    </>
  );
};

export default Cover;
