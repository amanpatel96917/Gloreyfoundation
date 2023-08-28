import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Component/Header";
import Home from "./Pages/Home";
import Navbar from "./Component/Navbar";
import About from "./Pages/About";
import Footer from "./Component/Footer";
import Contact from "./Pages/Contact";
import OurCauses from "./Pages/OurCauses";
import Blog from "./Pages/Blog";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/causes" element={<OurCauses/>} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
