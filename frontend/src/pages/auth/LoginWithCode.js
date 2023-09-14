import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Link, useNavigate, useParams } from "react-router-dom";
import { RESET, loginWithCode, sendLoginCode } from "../../redux/features/auth/authSlice";
import { Loader } from "../../components/loader/Loader";


export const LoginWithCode = () => {
    const [loginCode, setLoginCode] = useState("");
    const { email } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { isLoading, isLoggedIn, isSuccess } = useSelector(
        (state) => state.auth
    );

    const sendUserLoginCode = async () => {
      await dispatch(sendLoginCode(email));
      await dispatch(RESET());
    };

    const loginUserWithCode = async (e) => {
        e.preventDefault();

        if (loginCode.length !== 6) {
            return toast.error("Invalid login code");
        }

        if (!loginCode) {
            return toast.error("Please fill in all fields");
        }

        const code = {
            loginCode,
        };

        await dispatch(loginWithCode({ code, email }));
      };
    
      useEffect(() => {
        if (isSuccess && isLoggedIn) {
          navigate("/profile");
        }
    
        dispatch(RESET());
      }, [isLoggedIn, isSuccess, dispatch, navigate]);

  return (
    <div className="section full-bg">
      <div className="container">
        {isLoading && <Loader />}
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
                          Enter Access Code
                        </h4>
                        <form onSubmit={loginUserWithCode}>
                          <div className="form-group">
                            <input
                              type="text"
                              name="LoginCode"
                              value={loginCode}
                              className="form-style"
                              placeholder="Access Code"
                              id="email"
                              autoComplete="off"
                              required
                              onChange={(e) => setLoginCode(e.target.value)}
                            />
                            <i className="input-icon uil uil-at"></i>
                          </div>
                          <button
                            type="submit"
                            className="btn mt-4 --btn --btn-primary btn-block"
                          >
                            Proced To Login
                          </button>
                          <span className="d-block mt-4 text-light">
                            Check your email for the access code.
                            </span>
                        </form>
                        <p onClick={sendUserLoginCode} className="v-link --color-primary">
                          <b>Resend Code</b>
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
