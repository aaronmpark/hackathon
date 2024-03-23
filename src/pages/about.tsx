import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, ListGroup } from "react-bootstrap";


const About = () => {
    const navigate = useNavigate();

    return (
        <Container>
            <div className="text-center"><h1>Congratulations!</h1></div>
            <div className="text-center"><h4><b>You</b> have sucessfully breached the vulnerability of our site.</h4></div>
            <div className = "mt-5">
                <h2>Learn more below</h2>
                <ul>
                    <h5>What is Cybersecurity</h5>
                    <li><a href = "https://www.cisa.gov/news-events/news/what-cybersecurity"> What Is Cybersecurity? - Cisco: </a> 
                    provides an overview of cybersecurity, which is the practice of protecting systems, networks, and programs from digital attacks.</li>
                    <h5>How to hack</h5>
                    <li><a href = "https://tryhackme.com/">Tryhackme: </a> offers interactive cybersecurity training through hands-on challenges designed to teach ethical hacking skills</li>
                    <h5>Title</h5>
                    <li><a href = "">Example_Web_Name: </a> Example</li> 
                    <h5>Title</h5>
                    <li><a href = "">Example_Web_Name: </a> Example</li> 
                </ul>

                
            </div> 
        </Container>
    )
}

export default About;