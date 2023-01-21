import { CiDark } from "react-icons/ci";
import { BsFacebook, BsLinkedin, BsTwitter } from "react-icons/bs";
import img from "../assets/img/bg-1.png";
export const HomePage = () => {
  return (
    <>
      <div class="container pl-20 pr-20 bg-gray-200  grid grid-cols-2" id="Home">
        <div class="col-span-1">
          <p class="text-xl font-bold">Iam Flower Mariya, </p>
          <p>Software Developer</p>
          <p class="text-justify">
            I'm Creative Director and UI/UX Designer from Sydney, Australia,
            working in web development and print media. I enjoy turning complex
            problems into simple, beautiful and intuitive designs. My aim is to
            bring across your message and identity in the most creative way. I
            created web design for many famous brand companies.
          </p>
          <div class="container mx-auto px-8 py-8 space-x-4 ">
            <button class="bg-gray-300 hover:bg-gray-400 inline-flex items-center rounded-full h-12 w-12 justify-center">
              <BsLinkedin size={20} />
            </button>
            <button class="bg-gray-300 hover:bg-gray-400 inline-flex items-center rounded-full h-12 w-12 justify-center">
              <BsTwitter size={20} />
            </button>
            <button class="bg-gray-300 hover:bg-gray-400 inline-flex items-center rounded-full h-12 w-12 justify-center">
              <BsFacebook size={20} />
            </button>
          </div>
          <button class="bg-primary text-white px-4 py-2 rounded-lg">
            View Resume
          </button>
          <button class="bg-transparent text-black border border-black px-4 py-2 rounded-lg">
            Contact
          </button>
        </div>
        <div class="col-span-1">
          <img
            src={img}
            alt="profile image"
            class="rounded-full object-cover"
          />
        </div>
      </div>
    </>
  );
};
