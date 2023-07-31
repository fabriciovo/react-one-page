import Banner from "../components/Banner";
import Layout from "../components/Layout";

function ProfileView({ profileData }: IProfileProps) {
  return (
    <Layout>
      <Banner profileData={profileData} />
    </Layout>
  );
}

export default ProfileView;
