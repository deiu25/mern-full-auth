import React from "react";
import "./Home.css";
import loginImg from "../../assets/login.svg";
import { ShowOnLogout } from "../../components/protect/hiddenLink";
import LinkButton from "../../components/button/LinkButton";

export const Home = () => {
  return (
    <>
      <section className="section-home container hero">
        <div className="hero-text">
          <h2>Welcome to my Advanced MERN Stack Authentication System</h2>
          <p>
            Experience the robustness of full-stack development through our
            state-of-the-art authentication system, leveraging the power of
            React, Redux, Cloudinary, Node, Express, and MongoDB.
          </p>
          <p>
            This system provides a comprehensive suite of features, including
            robust user registration, secure login mechanisms, password reset
            options, google login integration, user permissions management,
            email notifications, profile image upload to cloudinary and much
            more.
          </p>
          <p>
            Start exploring my advanced features and experience seamless
            authentication now!
          </p>
          <div className="hero-buttons flex-start">
            <ShowOnLogout>
              <LinkButton to="/auth">Auth</LinkButton>
            </ShowOnLogout>
          </div>
        </div>
        <div className="hero-image">
          <img src={loginImg} alt="Login" />
        </div>
      </section>
    </>
  );
};
