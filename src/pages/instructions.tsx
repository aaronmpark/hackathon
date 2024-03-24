import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Container, Button, Collapse } from "react-bootstrap";

const Instruction = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  return (
    <Container>
      <>
        <Button
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
        >
          click
        </Button>
        <Collapse in={open}>
          <div id="example-collapse-text">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
            labore wes anderson cred nesciunt sapiente ea proident.
          </div>
        </Collapse>
      </>
      <button onClick={() => navigate("/About")}>TO THE COVER PAGE</button>
    </Container>
  );
};

export default Instruction;
