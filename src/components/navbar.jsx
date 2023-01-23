import {
  FcContacts,
  FcDocument,
  FcHome,
  FcPortraitMode,
  FcPrivacy,
} from "react-icons/fc";
import { CiDark } from "react-icons/ci";
import {
  BrowserRouter as Router,
  Routes ,
  Route,
  Redirect,
} from "react-router-dom";
import { AboutPage } from "./aboutpage";
import { Experience } from "./experience&education";

export const Navbar = () => {
  return (
    <>
      <div class="float-left px-8">
        <div class="container mx-auto px-8 py-8 space-x-4 ">
          <p class="p-2 text-rose-500 text-3xl text-center font-bold ">
            FLOWER MARIYA
          </p>
        </div>
      </div>
      <div class="float-right">
        <div class="container mx-auto px-8 py-8 space-x-4 ">

          {/* <Router>
            <Routes >
              <Route path="/about" component={AboutPage} />
              <Route path="/experience" component={Experience} />
            </Routes >
          </Router> */}

          <a href="homepage.jsx">
            <button
              href="#Home"
              class="bg-gray-800 hover:bg-rose-500 text-white font-bold py-2 px-4 rounded inline-flex items-center"
            >
              <FcHome />
              <p class="p-1">Home</p>
            </button>
          </a>
          <a href="#aboutpage.jsx">
            <button class="bg-gray-800 hover:bg-rose-500 text-white font-bold py-2 px-4 rounded inline-flex items-center">
              <FcPortraitMode />
              <p class="p-1">About</p>
            </button>
          </a>
          <button class="bg-gray-800 hover:bg-rose-500 text-white font-bold py-2 px-4 rounded inline-flex items-center">
            <FcDocument />
            <p class="p-1">Experience & Education</p>
          </button>
          <button class="bg-gray-800 hover:bg-rose-500 text-white font-bold py-2 px-4 rounded inline-flex items-center">
            <FcPrivacy />
            <p class="p-1">Works</p>
          </button>
          <button class="bg-gray-800 hover:bg-rose-500 text-white font-bold py-2 px-4 rounded inline-flex items-center">
            <FcContacts />
            <p class="p-1">Contact</p>
          </button>
          <button class="bg-gray-800 hover:bg-rose-500 text-white inline-flex items-center rounded-full h-12 w-12 justify-center">
            <CiDark />
          </button>
        </div>
      </div>
    </>
  );
};
