import {
  FcContacts,
  FcDocument,
  FcHome,
  FcPortraitMode,
  FcPrivacy,
} from "react-icons/fc";
import { CiDark } from "react-icons/ci";
import { Link } from "react-router-dom";

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
        <div class=" container mx-auto px-8 py-8 space-x-4 sticky-top">
          <Link
            to="/home"
            class="bg-gray-800 space-x-1.5 hover:bg-rose-500 text-white font-bold py-2 px-4 rounded inline-flex items-center"
          >
            <FcHome />
            <p class="p-1">Home</p>
          </Link>
          <Link
            to="/about"
            class="bg-gray-800 space-x-1.5 hover:bg-rose-500 text-white font-bold py-2 px-4 rounded inline-flex items-center"
          >
            <FcPortraitMode />
            <p class="p-1">About</p>
          </Link>
          <Link
            to="/experience"
            class="bg-gray-800 space-x-1.5 hover:bg-rose-500 text-white font-bold py-2 px-4 rounded inline-flex items-center"
          >
            <FcDocument />
            <p class="p-1">Experience & Education</p>
          </Link>
          <Link
            to="/work"
            class="bg-gray-800 space-x-1.5 hover:bg-rose-500 text-white font-bold py-2 px-4 rounded inline-flex items-center"
          >
            <FcPrivacy />
            <p class="p-1">Works</p>
          </Link>
          <Link
            to="/contact"
            class="bg-gray-800 space-x-1.5 hover:bg-rose-500 text-white font-bold py-2 px-4 rounded inline-flex items-center"
          >
            <FcContacts />
            <p class="p-1">Contact</p>
          </Link>
          <Link
            to="/"
            class="bg-gray-800 hover:bg-rose-500 text-white inline-flex items-center rounded-full h-12 w-12 justify-center"
          >
            <CiDark />
          </Link>
        </div>
      </div>
    </>
  );
};
