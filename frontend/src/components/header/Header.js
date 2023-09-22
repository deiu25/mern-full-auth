import React, { useEffect } from "react";
import "./Header.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { RESET, logout } from "../../redux/features/auth/authSlice";
import { useDispatch } from "react-redux";
import { ShowOnLogin, ShowOnLogout } from "../protect/hiddenLink";
import { UserName } from "../../pages/profile/Profile";

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

  useEffect(() => {
    const intervalId = setInterval(() => {
      const bubbles = document.createElement("div");
      bubbles.className = "bubbles";
      bubbles.style.left = Math.random() * window.innerWidth + "px";
      bubbles.style.width = bubbles.style.height = Math.random() * 20 + "px";
      bubbles.style.animationDuration = Math.random() * 2 + 1 + "s";
      document.getElementById("bubblesContainer").appendChild(bubbles);

      setTimeout(() => {
        bubbles.remove();
      }, 2000);
    }, 200);
    // Curăță intervalul când componenta se demontează
    return () => clearInterval(intervalId);
  }, []);

  return (
    <header>
      <nav>
        <div className="logo" onClick={goHome}>
          <div id="bubblesContainer">
            <h1>
              <span>S</span>
              <span>y</span>
              <span>n</span>
              <span>t</span>
              <span>a</span>
              <span>x</span>
              <span>S</span>
              <span>e</span>
              <span>e</span>
              <span>k</span>
              <span>e</span>
              <span>r</span>
            </h1>
          </div>
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
          <ShowOnLogout>
            <Link className="btn" to="/auth">
              Auth
            </Link>
          </ShowOnLogout>
          <ShowOnLogin>
            <li>
              <NavLink to="/profile" className={activeLink}>
                <UserName />
              </NavLink>
            </li>

            <li>
              <button onClick={logoutUser} className="btn --btn-secondary">
                Logout
              </button>
            </li>
          </ShowOnLogin>
        </ul>
      </nav>
    </header>
  );
};
