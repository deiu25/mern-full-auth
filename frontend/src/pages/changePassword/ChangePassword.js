import React, { useEffect, useState } from "react";
import { PageMenu } from "../../components/pageMenu/PageMenu";
import { PasswordInput } from "../../components/passwordInput/PasswordInput";

const initialState = {
  oldPassword: "",
  newPassword: "",
  confirmPassword: "",
};

export const ChangePassword = () => {
  const [formData, setFormData] = useState(initialState);

  const { oldPassword, newPassword, confirmPassword } = formData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const changePassword = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      alert("The passwords do not match!");
      return;
    }
    console.log("Password changed with the following data:", formData);
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
    if (newPassword.length > 7) {
      setPassLength(true);
    } else {
      setPassLength(false);
    }

    if (newPassword.match(/[A-Z]/)) {
      setUCase(true);
    } else {
      setUCase(false);
    }

    if (newPassword.match(/[0-9]/)) {
      setNum(true);
    } else {
      setNum(false);
    }

    if (newPassword.match(/[!@#$%^&*]/)) {
      setSChar(true);
    } else {
      setSChar(false);
    }
  }, [newPassword]);

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8">
          <div className="card">
            <PageMenu />
            <div className="card-header text-center">
              <h2>ChangePassword</h2>
            </div>
            <div className="card-body">
              <form>
                <p>
                  <PasswordInput
                    className="form-style"
                    id="password"
                    autoComplete="off"
                    placeholder="Old Password"
                    name="oldPassword"
                    required
                    value={oldPassword}
                    onChange={handleInputChange}
                  />
                </p>
                <p>
                  <PasswordInput
                    className="form-style"
                    id="password"
                    autoComplete="off"
                    placeholder="New Password"
                    name="newPassword"
                    required
                    value={newPassword}
                    onChange={handleInputChange}
                  />
                </p>
                <p>
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
                </p>
                <div className="password-info text-center">
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
                <div className="text-center mt-3">
                  <button className="btn">Change Password</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
