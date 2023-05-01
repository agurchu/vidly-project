import React, { useState } from "react";

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
        <div className="form-group mb-3">
          <label className="mb-2" htmlFor="username">
            Username
          </label>
          <input
            value={account.username}
            onChange={handleChange}
            autoFocus
            name="username"
            id="username"
            type="text"
            className="form-control"
          />
        </div>

        <div className="form-group mb-3">
          <label className="mb-2" htmlFor="password">
            Password
          </label>
          <input
            value={account.password}
            name="password"
            onChange={handleChange}
            id="password"
            type="password"
            className="form-control"
          />
        </div>
        <button className="btn btn-primary">Login</button>
      </form>
    </div>
  );
}
