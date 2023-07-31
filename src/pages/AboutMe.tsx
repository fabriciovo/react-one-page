import { Balancer } from "react-wrap-balancer";
import ProfileView from "../views/profileView";

const AboutData: IProfileData[] = [
  {
    id: "blurd-data",
    image: "./src/assets/textures/blurd.png",
    link: "",
    descriptionView: (
      <>
          <div className="m-8">
            <div className="max-w-sm w-full lg:max-w-full lg:flex">
              <div
                className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                style={{ backgroundImage: `url(./src/assets/profile-pic.png)` }}
                title="Woman holding a mug"
              ></div>
              <div className="w-full border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div className="mb-8">
                  <div className="text-gray-900 font-bold text-xl mb-2">
                    Fabricio Varisco
                  </div>
                  <Balancer className="text-gray-700 text-base">
                    Desenvolvedor Senior Front-end na Culligan, apaixonado por
                    JavaScript, React, Vue e tudo relacionado a 3D, como WebGL e
                    ThreeJS. Nos meus momentos livres, curto desenvolver jogos
                    principalmente no Game Maker e principalmente jogar Honkai
                    Star Rail xD
                  </Balancer>
                </div>
              </div>
            </div>
          </div>
          <div className="m-8">
            <div className="max-w-sm w-full lg:max-w-full lg:flex">
  
              <div className="w-full border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div className="mb-8">
                  <div className="text-gray-900 font-bold text-xl mb-2">
                    Curiosidades
                  </div>
                  <Balancer className="text-gray-700 text-base">
                    Desenvolvedor Senior Front-end na Culligan, apaixonado por
                    JavaScript, React, Vue e tudo relacionado a 3D, como WebGL e
                    ThreeJS. Nos meus momentos livres, curto desenvolver jogos
                    principalmente no Game Maker e principalmente jogar Honkai
                    Star Rail xD
                  </Balancer>
                </div>
                <div className="mb-8">
                  <div className="text-gray-900 font-bold text-xl mb-2">
                    Skills
                  </div>
                  <Balancer className="text-gray-700 text-base">
                    Desenvolvedor Senior Front-end na Culligan, apaixonado por
                    JavaScript, React, Vue e tudo relacionado a 3D, como WebGL e
                    ThreeJS. Nos meus momentos livres, curto desenvolver jogos
                    principalmente no Game Maker e principalmente jogar Honkai
                    Star Rail xD
                  </Balancer>
                </div>
              </div>
            </div>
          </div>
      </>
    ),
  },
  {
    id: "culligan-data",
    image: "./src/assets/textures/culligan.png",
    link: "",
    descriptionView: <>sdafdfdfdsfdfassdfsd</>,
  },
];

function AboutMe() {
  return <ProfileView profileData={AboutData} />;
}

export default AboutMe;
