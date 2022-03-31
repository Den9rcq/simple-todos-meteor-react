import React, { useState } from "react";
import { Meteor } from "meteor/meteor";
import Button from "./Button";

const LoginForm = () => {
  const [data, setData] = useState({
    username: "",
    password: ""
  })

  const handleChange = ({ target }) => {
    setData(prevState => ({
      ...prevState, [target.name]: target.value
    }))
  }

  const submit = e => {
    e.preventDefault();
    const { username, password } = data
    Meteor.loginWithPassword(username, password);
    setData({
      username: "",
      password: ""
    })
  };

  return (
    <form onSubmit={submit} className="flex flex-col items-center justify-center gap-5 mt-20">
        <input
          className="p-2 input input-red w-1/3"
          type="text"
          placeholder="Username"
          name="username"
          required
          onChange={e => handleChange(e)}
        />
        <input
          className="p-2 input input-red w-1/3"
          type="password"
          placeholder="Password"
          name="password"
          required
          onChange={e => handleChange(e)}
        />
        <Button
          className="btn btn-red w-1/3"
          title="Log in"
          type="submit"/>
    </form>
  );
};

export default LoginForm;
