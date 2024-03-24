import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Cover from "./pages/cover";
import About from "./pages/about";
import Instructions from "./pages/instructions";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Cover />} />
        <Route path="/About" element={<About/>} />
        <Route path="/Instructions" element={<Instructions/>} />
      </Routes>
  )
}

export default App
