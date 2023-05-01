import React, { useState } from "react";
import Input from "./common/Input";

export default function LoginForm() {
  const [account, setAccount] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errors = {};

    if (account.username.trim() === "")
      errors.username = "Username is required.";
    if (account.password.trim() === "")
      errors.password = "password is required.";
    return Object.keys(errors).length === 0 ? null : errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = validate();

    setErrors(errors || {});
    if (errors) return;

    console.log("submitted");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAccount((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <Input
          name="username"
          label=" Username"
          onChange={handleChange}
          value={account.username}
          type="text"
          error={errors.username}
        />
        <Input
          name="password"
          label="Password"
          onChange={handleChange}
          type="password"
          value={account.password}
          error={errors.password}
        />

        <button className="btn btn-primary">Login</button>
      </form>
    </div>
  );
}
