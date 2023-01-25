import { DiJavascript1 } from "react-icons/di";

export const Experience = () => {
  return (
    <div class="mx-auto my-auto pl-40 pr-40">
      <div class="container bg-neutral-900 flex">
        <div class="flex flex-wrap p-4">
          <div class="w-full p-4">
            <p class="text-main-heading">Experience</p>
          </div>

          <div class="row p-4 gap-4">
            <div class="col p-4 border-2 border-gray-800 hover:scale-105 rounded-lg">
              <p class="font-bold text-white mb-2 text-lg">
                42Square Technologies
              </p>
              <p class="text-content font-bold">October 2020 - Current</p>
              <p class="text-content">
                42Square is a global player in software consulting and product
                development. Our solutions work across web, mobile, and embedded
                software products for clients in the US, Europe, India & Middle
                East.
              </p>
            </div>
          </div>

          <div class="w-full p-4">
            <p class="text-main-heading">Education</p>
          </div>
          <div class="row p-4 gap-4">
            <div class="col p-4 border-2 border-gray-800 hover:scale-105 rounded-lg">
              <p class=" font-bold text-white mb-2 text-lg">
                BTech In Computer Science
              </p>
              <p class="text-content font-bold">2017 - 2020</p>
              <p class="text-content">Jyothi Engineering College, Thrissur</p>
              <p class="text-gray-400  italic ">
                APJ Abdul Kalam Technological University, Thiruvananthapuram
              </p>
            </div>
            <div class="col p-4 border-2 border-gray-800 hover:scale-105 rounded-lg">
              <p class=" font-bold text-white mb-2 text-lg">
                Diploma In Computer Engineering
              </p>
              <p class="text-content font-bold">2014 - 2017</p>
              <p class="text-content">Govt Womens PolyTechnic, Thrissur</p>
              <p class="text-gray-400  italic">
                Kerala State Board Of Technical Education
              </p>
            </div>
          </div>

          <div class="w-full p-4">
            <p class="text-main-heading">What I do</p>
          </div>
          <div class="row p-4 gap-4">
            <div class="col p-4 border-2 border-gray-800 hover:scale-105 rounded-lg">
              <p class=" font-bold text-white mb-2 text-lg">
                SERVER SIDE MANAGEMENT
              </p>
              <p class="text-content">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam euismod volutpat.
              </p>
            </div>
            <div class="col p-4 border-2 border-gray-800 hover:scale-105 rounded-lg">
              <p class=" font-bold text-white mb-2 text-lg">WEB DEVELOPMENT</p>
              <p class="text-content">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam euismod volutpat.
              </p>
            </div>
            <div class="col p-4 border-2 border-gray-800 hover:scale-105 rounded-lg">
              <p class=" font-bold text-white mb-2 text-lg">
                SOFTWARE DEVELOPMENT
              </p>
              <p class="text-content">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam euismod volutpat.
              </p>
            </div>
          </div>

          <div class="w-full p-4">
            <p class="text-main-heading">Tech Stack</p>
          </div>
          <div class="w-full row p-4 gap-4 text-white">
            <div class="col border-2 p-4 border-gray-800 ">
              <div class="flex flex-wrap">
                <DiJavascript1 class=" mx-3" size={25} />
                <p class="mx-autotext-slate-300">Javasript</p>
              </div>
            </div>
            <div class="col border-2 p-4 border-gray-800 ">
              <div class="flex flex-wrap">
                <DiJavascript1 class=" mx-3" size={25} />
                <p class="mx-autotext-slate-300">Javasript</p>
              </div>
            </div>
            <div class="col border-2 p-4 border-gray-800 ">
              <div class="flex flex-wrap">
                <DiJavascript1 class=" mx-3" size={25} />
                <p class="mx-autotext-slate-300">Javasript</p>
              </div>
            </div>
            <div class="col border-2 p-4 border-gray-800 ">
              <div class="flex flex-wrap">
                <DiJavascript1 class=" mx-3" size={25} />
                <p class="mx-autotext-slate-300">Javasript</p>
              </div>
            </div>
            <div class="col border-2 p-4 border-gray-800 ">
              <div class="flex flex-wrap">
                <DiJavascript1 class=" mx-3" size={25} />
                <p class="mx-autotext-slate-300">Javasript</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
