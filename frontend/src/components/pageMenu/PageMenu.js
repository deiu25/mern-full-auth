import React from "react";
import { NavLink } from "react-router-dom";
import { AdminAuthorLink } from "../protect/hiddenLink";
import "./PageMenu.scss";

export const PageMenu = () => {
  return (
      <nav className="navi">
        <ul>
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
