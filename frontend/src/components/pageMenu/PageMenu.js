import React from "react";
import { NavLink } from "react-router-dom";
import { AdminAuthorLink } from "../protect/hiddenLink";
import "./PageMenu.css";

export const PageMenu = () => {
  return (
      <nav className="navi flex-center">
        <input type="checkbox" id="checkbox1" />
        <label htmlFor="checkbox1" id="icon1">
          <svg
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
            ></path>
          </svg>
        </label>
        <ul className="profile-navi">
          <li>
            <NavLink to="/profile">
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink to="/changePassword">
              Change Password
            </NavLink>
          </li>
          <AdminAuthorLink>
          <li>
            <NavLink to="/users">
              Users
            </NavLink>
          </li>
          </AdminAuthorLink>
        </ul>
      </nav>
  );
};
