import { useContext } from "react";
import UserContext from "../context/UserContext";

const Profile = () => {
  const { user } = useContext(UserContext);
  if (!user) {
    return (
      <div className="flex items-center space-x-2 w-full justify-center ">
        <h1 className="text-4xl capitalize font-medium text-gray-900">
          Please Login ?..
        </h1>
      </div>
    );
  }
  return (
    <div className="flex items-center space-x-2 w-full justify-center ">
      <h1 className="text-4xl capitalize font-medium text-gray-900">
        Username: <p className=" inline text-gray-500">{user.username}</p>
      </h1>
    </div>
  );
};

export default Profile;
