import { FaGraduationCap } from "react-icons/fa";
import { MdOutlineWork } from "react-icons/md";
import { SiJavascript, SiKnowledgebase, SiTypescript } from "react-icons/si";
import { DiJavascript1 } from "react-icons/di";
export const Experience = () => {
  return (
    <div class="mx-auto my-auto pl-40 pr-40">
      <div class="container bg-gray-900 flex">
        <div class="flex flex-wrap">
          <div class="row text-white my-4">
            <div class="col px-4">
              <div class="flex flex-wrap">
                <MdOutlineWork class="text-red-500 mx-3" size={40} />
                <p class=" text-xl font-bold text-3xl text-white">Experience</p>
              </div>
            </div>
          </div>
          <div class="row p-4 gap-4">
            <div class="col p-4 border-2 border-gray-800">
              <p class=" font-bold text-white mb-2 text-lg">
                42Square Technologies
              </p>
              <p class=" font-bold text-slate-300 mb-2 text-lg">
                October 2020 - Current
              </p>
              <p class="text-slate-300 xs:bg-blue-500">
                42Square is a global player in software consulting and product
                development. Our solutions work across web, mobile, and embedded
                software products for clients in the US, Europe, India & Middle
                East.
              </p>
            </div>
            <div class="row text-white my-4">
              <div class="col">
                <div class="flex flex-wrap">
                  <SiKnowledgebase class="text-fuchsia-500 mx-3" size={40} />
                  <p class=" text-xl font-bold text-3xl text-white">
                    Tech Stack
                  </p>
                </div>
              </div>
            </div>
            
            <div class="row mx-auto gap-4 text-white">
              <div class="col border-2 p-2 border-yellow-500 ">
                <div class="flex flex-wrap">
                  <DiJavascript1 class=" mx-3" size={25} />
                  <p class="mx-autotext-slate-300">Javasript</p>
                </div>
              </div>
              <div class="col border-2 p-2 border-blue-500 ">
                <div class="flex flex-wrap">
                  <SiTypescript class=" mx-3" size={25} />
                  <p class="mx-autotext-slate-300">Typescript</p>
                </div>
              </div>
              <div class="col border-2 p-2 border-yellow-500 ">
                <div class="flex flex-wrap">
                  <DiJavascript1 class=" mx-3" size={25} />
                  <p class="mx-autotext-slate-300">Javasript</p>
                </div>
              </div>
              <div class="col border-2 p-2 border-yellow-500 ">
                <div class="flex flex-wrap">
                  <DiJavascript1 class=" mx-3" size={25} />
                  <p class="mx-autotext-slate-300">Javasript</p>
                </div>
              </div>
              <div class="col border-2 p-2 border-yellow-500 ">
                <div class="flex flex-wrap">
                  <DiJavascript1 class=" mx-3" size={25} />
                  <p class="mx-autotext-slate-300">Javasript</p>
                </div>
              </div>
            </div>

            <div class="row text-white my-4">
              <div class="col">
                <div class="flex flex-wrap">
                  <FaGraduationCap class="text-blue-500 mx-3" size={40} />
                  <p class=" text-xl font-bold text-3xl text-white">
                    Education
                  </p>
                </div>
              </div>
            </div>
            <div class="col p-4 border-2 border-gray-800">
              <p class=" font-bold text-white mb-2 text-lg">
                BTech In Computer Science
              </p>
              <p class=" font-bold text-slate-300 mb-2 text-lg">2017 - 2020</p>
              <p class="text-slate-300 xs:bg-blue-500 font-bold">
                Jyothi Engineering College, Thrissur
              </p>
              <p class="text-slate-300 xs:bg-blue-500 italic">
                APJ Abdul Kalam Technological University, Thiruvananthapuram
              </p>
            </div>
            <div class="col p-4 border-2 border-gray-800">
              <p class=" font-bold text-white mb-2 text-lg">
                Diploma In Computer Engineering
              </p>
              <p class=" font-bold text-slate-300 mb-2 text-lg">2014 - 2017</p>
              <p class="text-slate-300 xs:bg-blue-500 font-bold">
                Govt Womens PolyTechnic, Thrissur
              </p>
              <p class="text-slate-300 xs:bg-blue-500 italic">
                Kerala State Board Of Technical Education
              </p>
            </div>
            <div class="col p-4 border-2 border-gray-800">
              <p class=" font-bold text-white mb-2 text-lg">SSLC</p>
              <p class=" font-bold text-slate-300 mb-2 text-lg">2014</p>
              <p class="text-slate-300 xs:bg-blue-500 font-bold">
                St. Annes C G H S West Fort, Thrissur
              </p>
              <p class="text-slate-300 xs:bg-blue-500 italic">
                Board Of Public Examination, Kerala
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
