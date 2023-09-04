import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PasswordInput } from "../../components/passwordInput/PasswordInput";
//import "./style.css";

const initialState = {
  password: "",
  confirmPassword: "",
};

export const Reset = () => {
  const [formData, setFormData] = useState(initialState);
  const { password, confirmPassword } = formData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePasswordReset = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      console.log("Passwords do not match!");
      return;
    }
    // Call to backend or API to actually reset the password
    console.log(`Password has been reset.`);
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
    <div className="section full-bg">
      <div className="container">
        <div className="row full-height justify-content-center">
          <div className="col-12 text-center align-self-center py-5">
            <div className="section pb-5 pt-5 pt-sm-2 text-center">
              <div className="card-3d-wrap mx-auto">
                <div className="card-3d-wrapper">
                  <div className="card-front">
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
                            d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                          ></path>
                        </svg>
                        <h4 className="mb-4 pb-3 text-light">Reset Password</h4>
                        <p className="text-light --text-center --fw-bold">
                          Enter your new password below.
                        </p>
                        <form onSubmit={handlePasswordReset}>
                          <div className="form-group">
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
                          </div>
                          <div className="form-group">
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
                          </div>
                          <button
                            type="submit"
                            className="btn mt-4 --btn --btn-primary btn-block"
                          >
                            Reset Password
                          </button>
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
                        <p className="mb-0 mt-4 text-center">
                          <Link to="/auth">Back to Login</Link>
                        </p>
                        <p className="mb-0 mt-4 text-center">
                          <Link to="/">Back to Home</Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};