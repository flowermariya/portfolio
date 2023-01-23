import { AboutPage } from "./components/aboutpage";
import { Experience } from "./components/experience&education";
import { Navbar } from "./components/navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div class=" bg-black">
      <Navbar />
      <AboutPage/>
      <Experience />
      <Routes>
        <Route path="/about">{AboutPage}</Route>
        <Route path="experience" component={Experience} />
      </Routes>
    </div>
  );
};

export default App;
