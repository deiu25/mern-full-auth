import React from "react";
import "./Header.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { RESET, logout } from "../../redux/features/auth/authSlice";
import { useDispatch } from "react-redux";

const activeLink = ({ isActive }) => (isActive ? "active" : "");

export const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const goHome = () => {
    navigate("/");
  };

  const logoutUser = async () => {
    dispatch(RESET());
    await dispatch(logout());
    navigate("/auth");
  };

  return (
    <header>
      <nav>
        <div className="logo" onClick={goHome}>
          Syntax Seeker
        </div>
        <input type="checkbox" id="checkbox" />
        <label htmlFor="checkbox" id="icon">
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
        <ul>
          <li>
            <button className="btn">
              <Link className="btn btn-primary" to="/auth">Auth</Link>
            </button>
          </li>
          <li>
            <NavLink to="/profile" className={activeLink}>
              Profile
            </NavLink>
          </li>
          <li>
            <button onClick={logoutUser} className="--btn --btn-secondary">Logout</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};
