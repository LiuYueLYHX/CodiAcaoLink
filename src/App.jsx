import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Start from "./pages/Start"; 
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Start />} />

        <Route path="/home" element={
          <>
            <Navbar />
            <Home />
          </>
        } />

        <Route path="/about" element={
          <>
            <Navbar />
            <About />
          </>
        } />

        <Route path="/contact" element={
          <>
            <Navbar />
            <Contact />
          </>
        } />
      </Routes>
    </BrowserRouter>
  );
}
export default App;

