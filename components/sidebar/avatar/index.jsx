import React from "react";
import "./avatar.css";

function Avatar() {
  return (
    <div className="avatar">
      <img src="../assets/profile-photo.jpg" alt="profile photo" id="photo" />
      <h1>Daniel Vilar Costa</h1>
      <p>Desenvolvedor Front End</p>
    </div>
  );
}

export default Avatar;
