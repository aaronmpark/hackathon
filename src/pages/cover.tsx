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
            width: "100vh", // Ensure the width and height are equal
            height: "100vh", // Adjust size as needed
            borderRadius: "50%", // Makes the div circular
            backgroundColor: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          <img
            src={"../imgs/owl.png"}
            alt="Owl"
            style={{
              width: "100%",
              height: "auto",
              objectFit: "cover",
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
            border-right: 3px solid black; /* Cursor */
            white-space: nowrap; /* Ensure the text stays in one line */
            letter-spacing: 2px; /* Optional: Adjust spacing between letters */
            animation: 
              typing 4s steps(40, end),
              blinkCursor .75s step-end infinite;
          }
        `}
            </style>
            <div
              className="typing-container"
              style={{
                fontSize: "24px",
                fontFamily: "monospace",
                margin: "20px",
              }}
            >
              <span className="typing">Hoo's curious about Cybersecurity?</span>
            </div>
            <button
              className="btn btn-lg btn-secondary"
              style={{
                backgroundColor: "#282c4c",
                color: "white",
                padding: "10px 20px",
                borderRadius: "50px", // Keeps the button rounded
                marginTop: "20px", // Adds some space between the text and button
              }}
              onClick={() => navigate("/Instructions")}
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
          color: "#ec7808",
          fontFamily: "'Verdana', sans-serif",
          fontVariant: "small-caps",
          fontWeight: 500,
          padding: "20px", // Adjusted padding
        }}
      >
        Not Affiliated With The University of Virginia
      </footer>
    </div>
  );
};

export default Cover;
