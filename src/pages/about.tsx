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
        <div className = "text-center">
          <h1>Congratulations!</h1>
          <h4>
            You have sucessfully <b>breached the vulnerability</b> of our site.
          </h4>
        </div>
        <div>
          <h3 className="mt-3">Learn more below</h3>
          <ul className=" border border-3 m-5 mt-3 me-1">
            <h5 className="mt-5">What is Cybersecurity</h5>
            <li className="mt-1">
              <a href="https://www.cisa.gov/news-events/news/what-cybersecurity">
                What Is Cybersecurity? - Cisco: </a> provides an overview of cybersecurity, 
                which is the practice of protecting systems, networks, and programs from digital attacks.
            </li>
            <h5>How to hack</h5>
            <li className="mt-2">
              <a href="https://tryhackme.com/">Tryhackme: </a> offers
              interactive cybersecurity training through hands-on challenges
              designed to teach ethical hacking skills
            </li>
            <li className="mt-2">
              <a href="Letsdefend.io">Letsdefend: </a> offers a gamified learning experience where users can engage in real-world scenarios to defend a fictional network against cyber threats.
            </li>
            <li>
              <a href="https://hacksplaining.com/lessons">Hacksplaining: </a> offers interactive cybersecurity training focused on teaching users about various security vulnerabilities and how to defend against them.
            </li>
            <li className="mb-3">
              <a href="HackTheBox">Hackthebox: </a> provides a variety of virtual machines and challenges designed to test and improve penetration testing skills
            </li>
          </ul>
        </div>
      </Container>
    </>
  );
};

export default About;
