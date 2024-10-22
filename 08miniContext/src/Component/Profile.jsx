import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);
  if (!user) return <div>Please Login to get your data</div>;
  return (
    <div>
      <h1>Welcome {user.userName}</h1>
    </div>
  );
}

export default Profile;
