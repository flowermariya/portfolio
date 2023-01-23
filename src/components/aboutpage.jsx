import {
  BsFacebook,
  BsFillTelephoneFill,
  BsLinkedin,
  BsTwitter,
} from "react-icons/bs";
import { BiMap } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { MdOutlineDateRange } from "react-icons/md";
import img from "../assets/img/propic1.jpeg";

export const AboutPage = () => {
  return (
    <div class="mx-auto my-auto pl-40 pr-40">
      <div class="container mx-auto my-auto bg-gray-900 flex">
        <div class="flex flex-wrap">
          <div class="w-full mb-4 p-4">
            <p class=" text-xl font-bold text-3xl text-white">About Me</p>
          </div>
          <div class="w-1/3 rounded-md">
            <img
              src={img}
              alt="profile image"
              class="object-cover w-3/4 h-80 px-7"
            />
            <div class="mx-auto px-8 py-8 space-x-4 text-white">
              <button class=" hover:bg-rose-500 inline-flex items-center rounded-full h-12 w-12 justify-center">
                <BsLinkedin size={20} />
              </button>
              <button class=" hover:bg-rose-500 inline-flex items-center rounded-full h-12 w-12 justify-center">
                <BsTwitter size={20} />
              </button>
              <button class=" hover:bg-rose-500 inline-flex items-center rounded-full h-12 w-12 justify-center">
                <BsFacebook size={20} />
              </button>
            </div>
          </div>
          <div class="w-1/2 text-xl">
            <p class="mb-4 font-bold text-white">SOFTWARE DEVELOPER</p>
            <p class="mb-4 text-justify text-slate-300">
              I'm Creative Director and UI/UX Designer from Sydney, Australia,
              working in web development and print media. I enjoy turning
              complex problems into simple, beautiful and intuitive designs.
              companies.
            </p>
            <p class="mb-4 text-slate-300">
              My aim is to bring across your message and identity in the most
              creative way. I created web design for many famous brand
              companies.
            </p>
            <div class="w-full">
              <p class=" mb-4 text-xl font-bold text-white">Personal Info</p>
            </div>
            <div class="row text-white my-4">
              <div class="col">
                <div class="flex flex-wrap">
                  <BsFillTelephoneFill class="text-blue-500 mx-3" size={25} />
                  <p class="text-slate-300">+919447695491</p>
                </div>
              </div>
              <div class="col">
                <div class="flex flex-wrap">
                  <BiMap class="text-green-500 mx-3" size={25} />
                  <p class="text-slate-300">India, Kerala</p>
                </div>
              </div>
            </div>
            <div class="row text-white">
              <div class="col">
                <div class="flex flex-wrap">
                  <AiOutlineMail class=" mx-3 text-red-500" size={25} />
                  <p class="text-slate-300">flowermariya811</p>
                </div>
              </div>
              <div class="col">
                <div class="flex flex-wrap">
                  <MdOutlineDateRange class=" mx-3 text-violet-500" size={25} />
                  <p class="text-slate-300">08th November 1998</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container bg-gray-900 flex">
        <div class="flex flex-wrap">
          <div class="w-full p-4">
            <p class=" text-xl font-bold text-3xl text-white">What I do</p>
          </div>
          <div class="row p-4 gap-4">
            <div class="col p-4 border-2 border-gray-800">
              <p class=" font-bold text-white mb-2 text-lg">
                SERVER SIDE MANAGEMENT
              </p>
              <p class="text-slate-300 xs:bg-blue-500">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam euismod volutpat.
              </p>
            </div>
            <div class="col p-4 border-2 border-gray-800">
              <p class=" font-bold text-white mb-2 text-lg">WEB DEVELOPMENT</p>
              <p class="text-slate-300 xs:bg-blue-500">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam euismod volutpat.
              </p>
            </div>
            <div class="col p-4 border-2 border-gray-800">
              <p class=" font-bold text-white mb-2 text-lg">
                SOFTWARE DEVELOPMENT
              </p>
              <p class="text-slate-300 xs:bg-blue-500">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam euismod volutpat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
