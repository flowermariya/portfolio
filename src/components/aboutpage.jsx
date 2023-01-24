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
    <div class="mx-auto my-auto pl-40 pr-40 ">
      <div class="container bg-gray-900 flex">
        <div class="flex flex-wrap p-4">
          <div class="w-full p-4">
            <p class=" text-xl font-bold text-3xl text-white">About Me</p>
          </div>

          <div class="row p-4">
            <div class=" w-1/3">
              <img
                src={img}
                alt="profileimage"
                class="object-cover  w-80 h-80 px-7"
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

            <div class="w-2/3">
              <p class="mb-4 font-bold text-xl text-white">SOFTWARE DEVELOPER</p>
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
                    <p class="text-slate-300">flowermariya811@gmail.com</p>
                  </div>
                </div>
                <div class="col">
                  <div class="flex flex-wrap">
                    <MdOutlineDateRange
                      class=" mx-3 text-violet-500"
                      size={25}
                    />
                    <p class="text-slate-300">08th November 1998</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

         
        </div>
      </div>
    </div>
  );
};
