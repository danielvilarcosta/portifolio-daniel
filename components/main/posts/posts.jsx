import React from "react";
import "./posts.css";

function Posts() {
  return (
    <div className="myPosts">
      <h1>Posts Recentes</h1>
      <div className="postResume">
        <div className="image">
          <img
            src="../assets/profile-photo.jpg"
            alt="profile photo"
            id="photo"
          />
        </div>
        <div className="text">
          <span className="titleText">
            Pós Graduado pela Fatec Rio Preto Desenvolvimento Web
          </span>
          <span className="timestamp">
            <p>Cursando DevInhouse SENAI Santa Catarina</p>
          </span>
          <p className="resumeText">
            Sou formado Em Sistemas de Informações pelo Centro de Universitário
            de Votuporanga. Pós Graduado pela Fatec Rio Preto Desenvolvimento
            Web, atualmente sou aluno do SENAI/SC DevInhouse o qual me pretendo
            tornar um Desenvolvedor Web Full Stack.
          </p>
          <div className="hashtags">
            <p>#react</p>
            <p>#coding</p>
            <p>#exercise</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;
