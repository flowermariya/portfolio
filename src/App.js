import { AboutPage } from "./components/aboutpage";
import { Experience } from "./components/experience&education";
import { HomePage } from "./components/homepage";
import { Navbar } from "./components/navbar";

const App = () => {
  return (
    <div class=" bg-black">
      <Navbar />
      <AboutPage />
      <Experience />
    </div>
  );
};

export default App;
