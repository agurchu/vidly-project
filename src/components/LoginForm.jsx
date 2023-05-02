import React, { useState } from "react";
import Input from "./common/Input";
import Joi from "joi-browser";
import { Link } from "react-router-dom";
import FormProvider, { FormContext } from "../FormContext";

export default function LoginForm() {
  const [data, setData] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({});

  const schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  const doSubmit = () => {
    // call server
    console.log("submitted");
  };

  return (
    <FormProvider schema={schema} onSubmit={doSubmit}>
      <div>
        <h1>Login</h1>
        <FormContext.Consumer>
          {({ data, errors, handleChange, handleSubmit, validate }) => (
            <form onSubmit={handleSubmit}>
              <Input
                name="username"
                label=" Username"
                onChange={handleChange}
                value={data[username]}
                type="text"
                error={errors.username}
              />

              <Input
                name="password"
                label="Password"
                onChange={handleChange}
                type="password"
                value={data[password]}
                error={errors.password}
              />

              <button disabled={validate()} className="btn btn-primary">
                Login
              </button>
            </form>
          )}
        </FormContext.Consumer>
        <p>
          Not registered? <Link to="/register">Register Now!</Link>{" "}
        </p>
      </div>
    </FormProvider>
  );
}
