import React from "react";

export default function LoginForm() {
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("submited");
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <label className="mb-2" htmlFor="username">
            Username
          </label>
          <input id="username" type="text" className="form-control" />
        </div>
        <div className="form-group mb-3">
          <label className="mb-2" htmlFor="password">
            Password
          </label>
          <input id="password" type="text" className="form-control" />
        </div>
        <button className="btn btn-primary">Login</button>
      </form>
    </div>
  );
}
