import React from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";

const Cover = () => {
  const navigate = useNavigate();

  return (
    <div
      className="cover-page d-flex align-items-center justify-content-center"
      style={{ minHeight: "80vh" }}
    >
      <Container>
        <div className="text-center">
          <header className="mb-auto">
            <div className="inner"></div>
          </header>

          <main role="main">
            <h1 className="cover-heading">Aaron Park = 🤓</h1>
            <p className="lead">
              Design Your Perfect Keyboard: Customization at Your Fingertips
            </p>
            <p className="lead">
              <button
                className="btn btn-lg btn-secondary"
                onClick={() => navigate("/home")}
              >
                Begin
              </button>
            </p>
          </main>
        </div>
      </Container>
    </div>
  );
};

export default Cover;
