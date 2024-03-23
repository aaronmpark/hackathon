import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Form } from "react-bootstrap";


const About = () => {
    const navigate = useNavigate();

    return (
        <Container>
            <div className="text-center"><h1>Congrats!</h1></div>
            <div className="text-center"><h4><b>You</b> have sucessfully breached the vulnerability of our site.</h4></div>
            <div className = "mt-5">
                <div className = "py-3">
                    <h1>Learn more below</h1>
                </div>

                <ul>
                    <h5>What is Cybersecurity?</h5>
                    <li><a href = "https://www.cisa.gov/news-events/news/what-cybersecurity"> What Is Cybersecurity? - Cisco </a> provides an overview of cybersecurity, which is the practice of protecting systems, networks, and programs from digital attacks.</li>
                </ul>
            </div> 
        </Container>
    )
}

export default About;