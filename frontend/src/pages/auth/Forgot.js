import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Forgot = () => {
  const [email, setEmail] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") setEmail(value);
  };

  const resetPassword = (e) => {
    e.preventDefault();
    // Call to backend or API to initiate password reset
    console.log(`Password reset link sent to: ${email}`);
  };

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
                          strokeWidth="1.5"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width="50"
                          height="50"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                          ></path>
                        </svg>
                        <h4 className="mb-4 pb-3 text-light">
                          Forgot Password
                        </h4>
                        <p className="text-light --text-center --fw-bold">
                          Enter your email to receive a password reset link.
                        </p>
                        <form onSubmit={resetPassword}>
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
                          <button
                            type="submit"
                            className="btn mt-4 --btn --btn-primary btn-block"
                          >
                            Send Reset Link
                          </button>
                        </form>
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
