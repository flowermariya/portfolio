import * as React from "react";
import { AboutPage } from "./components/aboutpage";
import { Experience } from "./components/experience&education";
import { Navbar } from "./components/navbar";
import { Route, Routes } from "react-router-dom";
import { Contact } from "./components/contact";


const App = () => {
  return (
    <div className=" bg-black">
      <Navbar />
      <Routes>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
