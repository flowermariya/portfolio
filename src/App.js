import { AboutPage } from "./components/aboutpage";
import { HomePage } from "./components/homepage";
import { Navbar } from "./components/navbar";

const App = () => {
  return (
    <div class = " bg-black">
      <Navbar />
      <AboutPage/>
    </div>
  );
};

export default App;
