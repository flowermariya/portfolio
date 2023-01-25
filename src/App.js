
import { AboutPage } from "./components/aboutpage";
import { Experience } from "./components/experience&education";
import { Navbar } from "./components/navbar";
import { Route, Routes } from "react-router-dom";
import { Contact } from "./components/contact";
import { Work } from "./components/work";
import { HomePage } from "./components/homepage";


const App = () => {
  return (
    <div className=" bg-black">
      <Navbar />
      <Routes>
      <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
