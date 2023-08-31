import React, { useEffect, useState } from "react";
import { PasswordInput } from "../../components/passwordInput/PasswordInput";
import { Link } from "react-router-dom";

const initialState = {
  firstname: "",
  lastname: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export const SignUp = () => {
  const [formData, setFormData] = useState(initialState);
  const { firstname, lastname, email, password, confirmPassword } = formData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const registerUser = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("The passwords do not match!");
      return;
    }
    console.log("Înregistrare utilizator cu următoarele date:", formData);
  };

  const [uCase, setUCase] = useState(false);
  const [num, setNum] = useState(false);
  const [sChar, setSChar] = useState(false);
  const [passLength, setPassLength] = useState(false);

  const timesIcon = <i className="uil uil-times"></i>;
  const checkIcon = <i className="uil uil-check"></i>;

  const switchIcon = (condition) => {
    return condition ? checkIcon : timesIcon;
  };

  useEffect(() => {
    if (password.length > 7) {
      setPassLength(true);
    } else {
      setPassLength(false);
    }

    if (password.match(/[A-Z]/)) {
      setUCase(true);
    } else {
      setUCase(false);
    }

    if (password.match(/[0-9]/)) {
      setNum(true);
    } else {
      setNum(false);
    }

    if (password.match(/[!@#$%^&*]/)) {
      setSChar(true);
    } else {
      setSChar(false);
    }
  }, [password]);


  return (
    <div className="card-back">
      <div className="center-wrap">
        <div className="section text-center">
          <svg
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            width="50"
            height="50"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
            ></path>
          </svg>
          <h4 className="mb-4 pb-3 text-light">Sign Up</h4>
          <form className="form-group" onSubmit={registerUser}>
            <div className="name-group form-group-flex">
              <div className="form-group">
                <input
                  type="text"
                  name="firstname"
                  value={firstname}
                  onChange={handleInputChange}
                  className="form-style"
                  placeholder="First Name"
                  id="firstname"
                  autoComplete="off"
                />
                <i className="input-icon uil uil-user"></i>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="lastname"
                  value={lastname}
                  onChange={handleInputChange}
                  className="form-style"
                  placeholder="Last Name"
                  id="lastname"
                  autoComplete="off"
                />
                <i className="input-icon uil uil-user"></i>
              </div>
            </div>
            <div className="form-group mt-2">
              <input
                type="email"
                name="email"
                value={email}
                onChange={handleInputChange}
                className="form-style"
                placeholder="Email"
                id="logemail"
                autoComplete="off"
              />
              <i className="input-icon uil uil-at"></i>
            </div>
            <PasswordInput
              className="form-style"
              id="password"
              autoComplete="off"
              placeholder="Password"
              name="password"
              required
              value={password}
              onChange={handleInputChange}
            />
            <PasswordInput
              className="form-style"
              id="password"
              autoComplete="off"
              placeholder="Repeat Password"
              name="confirmPassword"
              required
              value={confirmPassword}
              onChange={handleInputChange}
            />
          </form>
          <div className="password-info">
            <div className="password-info-item">
              {switchIcon(passLength)}
              At least 8 characters
            </div>
            <div className="password-info-item">
              {switchIcon(uCase)}
              At least 1 uppercase letter
            </div>
            <div className="password-info-item">
              {switchIcon(num)}
              At least 1 number
            </div>
            <div className="password-info-item">
              {switchIcon(sChar)}
              At least 1 special character
            </div>
          </div>
          <button type="submit" className="btn mt-4" onClick={registerUser}>
            Submit
          </button>
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
