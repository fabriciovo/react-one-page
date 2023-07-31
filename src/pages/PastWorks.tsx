import ProfileView from "../views/profileView";

const AboutData: IProfileData[] = [
  {
    id: "blurd-data",
    image: "./src/assets/textures/blurd.png",
    link: "",
    descriptionView: (
      <>
        Past Works
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

function PastWorks() {
  return <ProfileView profileData={AboutData} />;
}

export default PastWorks;
