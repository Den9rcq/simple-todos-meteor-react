import React, { useState } from "react";
import { Meteor } from "meteor/meteor";

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
      username: "", password: ""
    })
  };

  return (<form onSubmit={submit} className="login-form">
    <div>
      <label htmlFor="username">Username</label>

      <input
        type="text"
        placeholder="Username"
        name="username"
        required
        onChange={e => handleChange(e)}
      />
    </div>
    <div>
      <label htmlFor="password">Password</label>

      <input
        type="password"
        placeholder="Password"
        name="password"
        required
        onChange={e => handleChange(e)}
      />
    </div>
    <div>
      <button type="submit">Log In</button>
    </div>
  </form>);
};

export default LoginForm;
