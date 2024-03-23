import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Stack } from "react-bootstrap";


const About = () => {
    const navigate = useNavigate();

    return (
        <Stack gap={3}>
            <div className="p2"> <h1>About</h1></div>
            <div className="p2"> <p>This is very informative</p></div>
        </Stack>
    )
}

export default About;