import React from "react";
import { NavLink } from "react-router-dom";

export const PageMenu = () => {
  return (
    <div>
      <nav className="--btn-google --p --mb">
        <ul className="home-links">
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
          <li>
            <NavLink to="/users">
              Users
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
