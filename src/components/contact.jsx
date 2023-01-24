import { BsFillTelephoneFill, BsLinkedin } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { RiGitlabFill } from "react-icons/ri";
import { BiMap } from "react-icons/bi";

export const Contact = () => {
  return (
    <div class="mx-auto my-auto pl-40 pr-40 ">
      <div class="container bg-gray-900 flex">
        <div class="flex flex-wrap p-4">
          <div class="w-full p-4">
            <p class=" text-xl font-bold text-3xl text-white">Contact Me</p>
          </div>
          <div class="row p-4">
            <div class="col ">
              <form class="w-full max-w-lg">
                <div class="flex flex-wrap -mx-3 mb-6">
                  <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label
                      class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="grid-first-name"
                    >
                      First Name
                    </label>
                    <input
                      class="w-full text-white border-2 bg-transparent rounded py-3 px-4 mb-3 focus:bg-slate-400"
                      id="grid-first-name"
                      type="text"
                      defaultValue={"Flower"}
                    />
                  </div>
                  <div class="w-full md:w-1/2 px-3">
                    <label
                      class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="grid-last-name"
                    >
                      Last Name
                    </label>
                    <input
                      class="w-full text-white border-2 bg-transparent rounded py-3 px-4 mb-3 focus:bg-slate-400"
                      id="grid-last-name"
                      type="text"
                      defaultValue={"Mariya"}
                    />
                  </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-6">
                  <div class="w-full px-3">
                    <label
                      class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="grid-password"
                    >
                      Email
                    </label>
                    <input
                      class="w-full text-white border-2 bg-transparent rounded py-3 px-4 mb-3 focus:bg-slate-400"
                      id="grid-email"
                      type="email"
                      defaultValue={"flowermariya811@gmail.com"}
                    />
                  </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-6">
                  <div class="w-full px-3">
                    <label
                      class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="grid-password"
                    >
                      Message
                    </label>
                    <textarea
                      rows="4"
                      class=" w-full text-white border-2 bg-transparent rounded py-3 px-4 mb-3 focus:bg-slate-400"
                      id="grid-text"
                      type="text"
                    />
                  </div>
                </div>
                <div class="w-full px-3">
                  <button
                    type="submit"
                    class=" text-gray-900 bg-white focus:outline-none focus:ring-4 text-l rounded-lg  px-5 py-2.5 mr-2 mb-2 "
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div class="col mx-20 my-5 text-white space-y-14">
            <div class="max-w-sm p-6 border-2 border-gray-800 rounded-lg">
              <div class="col">
                <div class="flex my-2">
                  <BsFillTelephoneFill
                    class=" mx-3 text-fuchsia-500"
                    size={25}
                  />
                  <p class="text-slate-300">+919447695491</p>
                </div>
                <div class="flex my-3">
                  <AiOutlineMail class=" mx-3 text-red-500" size={25} />
                  <p class="text-slate-300">flowermariya811@gmail.com</p>
                </div>
                <div class="flex">
                  <BiMap class=" mx-3 text-green-500" size={25} />
                  <p class="text-slate-300">Kerala, India</p>
                </div>
              </div>
            </div>
            <div class="max-w-sm p-6 border-2 border-gray-800 rounded-lg space-y-5">
              <div class="flex flex-wrap">
                <RiGitlabFill class=" mx-3 text-red-500" size={25} />
                <a
                  href="https://gitlab.com/FlowerMariya"
                  class="inline-flex items-center text-white hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://gitlab.com/FlowerMariya
                </a>
              </div>

              <div class="flex">
                <BsLinkedin class=" mx-3 text-blue-500" size={40} />
                <a
                  href="https://www.linkedin.com/in/flower-mariya-varghese-69b333122/"
                  class="inline-flex items-center text-white hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://www.linkedin.com/in/flower-mariya-varghese-69b333122/
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
