import "../styles/home.scss";
import img from "../assets/img/pro.jpg";
import { BsFacebook, BsLinkedin, BsTwitter } from "react-icons/bs";
import resume from "../assets/Resume_Updated.pdf";

export const HomePage = () => {
  return (
    <div class="mx-auto my-auto pl-40 pr-40 flex">
      <div class="row p-4 gap-4">
        <div class="col p-4">
          <img
            class="rounded-full w-[250px] h-[250px] 2xl:w-[280px] 2xl:h-[280px]"
            src={img}
            alt="about avatar"
          />
          <p class="mx-auto px-12 py-4 space-x-4 text-heading">Flower Mariya</p>
          <p class="px-14 text-content">Software Developer</p>
          <div class="mx-auto px-12 py-4 space-x-4 text-white ">
            <button class="bg-slate-700 inline-flex items-center rounded-lg h-12 w-12 justify-center">
              <BsLinkedin size={20} />
            </button>
            <button class=" bg-slate-700 inline-flex items-center rounded-lg h-12 w-12 justify-center">
              <BsTwitter size={20} />
            </button>
            <button class=" bg-slate-700 inline-flex items-center rounded-lg h-12 w-12 justify-center">
              <BsFacebook size={20} />
            </button>
          </div>
          <div class="mx-auto px-11 py-1 space-x-4">
            <button
              onClick={() => window.open(resume)}
              class="bg-rose-500 text-white font-bold py-2 px-4 rounded-full hover:scale-105 hover: text-white"
            >
              View My Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
