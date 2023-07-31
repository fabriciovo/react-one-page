import ProfileView from "../views/profileView";

const SideProjectData: IProfileData[] = [
  {
    id: "blurd-data",
    image: "./src/assets/textures/blurd.png",
    link: "",
    descriptionView: (
      <>
        College
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

function College() {
  return <ProfileView profileData={SideProjectData} />;
}

export default College;
