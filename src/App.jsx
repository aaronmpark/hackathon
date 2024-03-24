import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Cover from "./pages/cover";
import About from "./pages/about";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Cover />} />
        <Route path="/About" element={<About/>} />
      </Routes>
  )
}

export default App
