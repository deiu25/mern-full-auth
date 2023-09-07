import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { PasswordInput } from "../../components/passwordInput/PasswordInput";
import { useDispatch, useSelector } from "react-redux";
import { Loader } from "../../components/loader/Loader";
import { toast } from "react-toastify";
import { validateEmail } from "../../redux/features/auth/authService";
import {login, RESET } from "../../redux/features/auth/authSlice";


const initialState = {
  email: "",
  password: "",
};


export const Login = () => {
  const [formData, setFormData] = useState(initialState);
  const { email, password } = formData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoading, isLoggedIn, isSuccess } = useSelector(
    (state) => state.auth
  );

  const loginUser = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      return toast.error("Please fill in all fields");
    }
    if (!validateEmail(email)) {
      return toast.error("Invalid email");
    }

    const userData = {
      email,
      password,
    };
    await dispatch(login(userData));
  };

  useEffect(() => {
    if (isSuccess && isLoggedIn) {
      navigate("/profile");
    }
    dispatch(RESET());
  }, [isSuccess, isLoggedIn, navigate]);

  return (
    <div className="card-front">
      {isLoading && <Loader />}
      <div className="center-wrap">
        <div className="section text-center">
          <svg
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 26"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            width="50"
            height="50"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
            ></path>
          </svg>
          <h4 className="mb-4 pb-3 text-light">Log In</h4>
          <div className="--flex-center">
            <button className="btn btn-primary">
              <i className="fab fa-google mr-2"></i>
              Sign in with Google
            </button>
          </div>
          <br />
          <p className="text-light --text-center --fw-bold">or</p>
          <form onSubmit={loginUser}>
            <div className="form-group">
              <input
                type="email"
                name="email"
                value={email}
                className="form-style"
                placeholder="Your Email"
                id="email"
                autoComplete="off"
                required
                onChange={handleInputChange}
              />
              <i className="input-icon uil uil-at"></i>
            </div>
            <PasswordInput
              className="form-style"
              id="password"
              autoComplete="off"
              placeholder="Your Password"
              name="password"
              value={password}
              onChange={handleInputChange}
            />
            <button
              type="submit"
              className="btn mt-4 --btn --btn-primary btn-block"
            >
              Login
            </button>
          </form>
          <p className="mb-0 mt-4 text-center">
            <Link to="/forgot">Forgot your password?</Link>
          </p>
          <p className="mb-0 mt-4 text-center">
            <Link to="/">Back to Home</Link>
          </p>
        </div>
      </div>
    </div>
  );
};
