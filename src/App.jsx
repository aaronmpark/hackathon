import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Cover from "./pages/cover";

function App() {
  return (
    <Container className="mb-4">
      <Routes>
        <Route path="/" element={<Cover />} />
      </Routes>
    </Container>
  )
}

export default App
