import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Cover from "./pages/cover";
import About from "./pages/About";
function App() {
  return (
    <Container className="mb-4">
      <Routes>
        <Route path="/" element={<Cover />} />
        <Route path="/About" element={<About/>} />
      </Routes>
    </Container>
  )
}

export default App
