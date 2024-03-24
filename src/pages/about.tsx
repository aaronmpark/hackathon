import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, ListGroup } from "react-bootstrap";
import { Navbar } from "../components/navBar";

const About = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <Container
        style={{
          fontFamily: "'Verdana', sans-serif",
          fontVariant: "small-caps",
          fontWeight: 500,
        }}
      >
        <div className="text-center mt-5">
          <h1 className="mb-4">Congratulations!</h1>
          <h4>
            You have sucessfully <b>breached the vulnerability</b> of our site.
          </h4>
        </div>
        <div className="mt-5">
          <h2 className="mb-5">Learn more below</h2>
          <ul className="border border-3">
            <Container className="mx-3">
              <h4 className="mt-5">What is Cybersecurity?</h4>
              <li>
                <a
                  className="text-muted"
                  href="https://www.cisa.gov/news-events/news/what-cybersecurity"
                >
                  {" "}
                  What Is Cybersecurity? - Cisco:{" "}
                </a>
                provides an overview of cybersecurity, which is the practice of
                protecting systems, networks, and programs from digital attacks.
              </li>
              <h5>How to hack</h5>
              <li>
                <a href="https://tryhackme.com/">Tryhackme: </a> offers
                interactive cybersecurity training through hands-on challenges
                designed to teach ethical hacking skills
              </li>
              <h5>Title</h5>
              <li>
                <a href="">Example_Web_Name: </a> Example
              </li>
              <h5>Title</h5>
              <li>
                <a href="">Example_Web_Name: </a> Example
              </li>
            </Container>
          </ul>
        </div>
      </Container>
      <footer className="page-footer fixed-bottom">
        <div
          style={{
            fontFamily: "'Verdana', sans-serif",
            fontVariant: "small-caps",
            fontWeight: 500,
          }}
          className="border-top text-center pt-3 pb-3"
        >
          Not Affiliated With The University of Virginia
        </div>
      </footer>
    </>
  );
};

export default About;
