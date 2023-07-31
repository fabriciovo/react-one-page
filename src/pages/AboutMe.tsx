import ProfileView from "../views/profileView";

const AboutData: IProfileData[] = [
  {
    id: "blurd-data",
    image: "./src/assets/textures/blurd.png",
    link: "",
    descriptionView: <>fddasgdgasdg</>,
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
