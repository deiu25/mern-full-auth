import React, { useState } from "react";

export const PasswordInput = ({
  placeholder,
  value,
  name,
  onChange,
  OnPaste,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="form-group mt-2 position-relative">
      <input
        type={showPassword ? "text" : "password"}
        name={name}
        value={value}
        required
        className="form-style"
        placeholder={placeholder}
        id="password"
        autoComplete="off"
        onChange={onChange}
        onPaste={OnPaste}
      />
      <i className="input-icon uil uil-lock-alt"></i>
      <i
        onClick={togglePassword}
        className={`toggle-icon uil ${
          showPassword ? "uil-eye-slash" : "uil-eye"
        }`}
      ></i>
    </div>
  );
};
