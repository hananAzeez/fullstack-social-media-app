import { useParams } from "react-router-dom";

const ProfilePage = () => {
  const params = useParams();
  console.log(params);
  return <div>profilePage - {params.userId}</div>;
};

export default ProfilePage;
