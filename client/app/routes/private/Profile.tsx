import React from "react";
import { useAuthStore } from "src/store/useAuthStore";

const Profile = () => {
  const user = useAuthStore((state) => state.user);

  return (
    <div>
      <h3>Profile</h3>
      <div>
       <p>{user?.firstName}</p>
       <p>{user?.lastName}</p>
      </div>
    </div>
  );
};

export default Profile;
