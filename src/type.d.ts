interface IProfileData {
    id: string,
    image: string,
    link: string,
    descriptionView: JSX.Element;
}

interface IDescriptionData {
    id: string,
    image: string,
    link: string,
}

interface IProfileProps {
    profileData: IBannerData[];

}

interface IBannerDataProps {
    profileData: IBannerData[];
}
interface IDescriptionDataProps {
    descriptionView: JSX.Element;
}