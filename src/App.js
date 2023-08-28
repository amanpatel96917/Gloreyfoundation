import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Component/Header";
import Home from "./Pages/Home";
import Navbar from "./Component/Navbar";
import About from "./Pages/About";
import Footer from "./Component/Footer";
import Services from "./Pages/Services";
import Pricing from "./Pages/Pricing";
import Contact from "./Pages/Contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
