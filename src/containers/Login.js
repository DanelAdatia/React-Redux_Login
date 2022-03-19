import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RemoveSelected, setUsername } from "../redux/actions/ProductAction";

const Login = () => {
  const [ValueUserName, SetValueUserName] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (event) => {
    SetValueUserName(event.target.value);
    console.log("Handlechange", ValueUserName);
    dispatch(setUsername(event.target.value));
  };

  const handleSubmit = () => {
    navigate("/uponlogin");
    console.log(ValueUserName, "Value On Submit");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>UserName</label>
        <input
          id="email"
          name="email"
          type="text"
          onChange={handleChange}
          value={ValueUserName || ""}
        />
        <br></br>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
