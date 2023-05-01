import React, { useState } from "react";
import Input from "./common/Input";

export default function LoginForm() {
  const [account, setAccount] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(account);
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
        />
        <Input
          name="password"
          label="Password"
          onChange={handleChange}
          type="password"
          value={account.password}
        />

        <button className="btn btn-primary">Login</button>
      </form>
    </div>
  );
}
