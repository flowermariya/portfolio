import "../styles/common.scss";
export const Work = () => {
  return (
    <div class="mx-auto my-auto pl-40 pr-40">
      <div class="container bg-neutral-900 flex">
        <div class="flex flex-wrap p-4">
          <div class="w-full p-4">
            <h2 class="text-main-heading">My Projects</h2>
          </div>

          <div class="row p-4 gap-4">
            <div class="col p-4 border-2 border-gray-800 hover:scale-105 rounded-lg">
              <h3 class=" mb-2 text-heading">Bolder</h3>
              <p class="text-content">
                The world is changing fast. Every time you swipe your credit
                card, Google something, go for a run, rent a movie and interact
                with your phone, you give up valuable and private information.
                <br />
                As you deposit such massive amounts of data, your every move is
                being monitored and stored by powerful global companies
              </p>
              <div class="row p-4 gap-4 text-sub-content">
                <div class="col border-2 p-2 border-gray-800">
                  Nest.Js, Node.Js & RestAPI
                </div>
                <div class="col border-2 p-2 border-gray-800">
                  Amazon Web Services
                </div>
                <div class="col border-2 p-2 border-gray-800">
                  Neo4j & PostgreSQL
                </div>
                <div class="col border-2 p-2 border-gray-800">
                  TypeScript & Javasript
                </div>
              </div>
            </div>

            <div class="col p-4 border-2 border-gray-800 hover:scale-105 rounded-lg">
              <p class=" text-heading mb-2">Trip App</p>
              <p class="text-content">
                The world is changing fast. Every time you swipe your credit
                card, Google something, go for a run, rent a movie and interact
                with your phone, you give up valuable and private information.
                As you deposit such massive amounts of data, your every move is
                being monitored and stored by powerful global companies
              </p>
              <div class="row p-4 gap-4 text-sub-content">
                <div class="col border-2 p-2 border-gray-800">
                  React.Js & Express.js
                </div>
                <div class="col border-2 p-2 border-gray-800">Firebase</div>
                <div class="col border-2 p-2 border-gray-800">
                  TypeScript & Javasript
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
