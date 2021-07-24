import React, { useState } from "react";
import styles from "./Login.css";
import Loginimg from "../images/Loginimg.jpg";

import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

function Login(props) {
  const history = useHistory();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  let name, value;

  const handleInputs = e => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const PostData = async e => {
    e.preventDefault();
    const { email, password } = user;

    const res = await fetch("http://localhost:5000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await res.json();
    if (data.status === 400 || !data) {
      window.alert("invalid signup");
      console.log("invalid");
    } else {
      window.alert("sucsess");
      history.push("/home");
    }
  };

  return (
    <div>
      <div className="main" id="left-sidebar">
        <div className="imgbg">
          <img src={Loginimg} alt="" className="imghere" />
        </div>
        <div className="mainlog">
          <div className="btnup">
            <button className="singup">LOGIN</button>

            <button
              className="Login"
              onClick={() => {
                history.push("/signup");
              }}
            >
              SIGN UP
            </button>
          </div>
          <div className="textone">LOGIN TO CONTINUE</div>
          <div className="inputbox">
            <input
              type="text"
              placeholder="USERNAME OR EMAIL ADDRESS"
              name="email"
              value={user.email}
              onChange={handleInputs}
              className="input_username"
            />
            <input
              type="password"
              placeholder="PASSWORD"
              name="password"
              value={user.password}
              onChange={handleInputs}
              className="input_username"
            />
            <div className="forget">
              {" "}
              <a href="" className="first">
                Forgot Password?
              </a>{" "}
            </div>
          </div>

          <div className="mainbtn">
            <button className="logintwo" onClick={PostData}>
              LOGIN
            </button>

            <button className="facebook">FACEBOOK</button>
            <button className="google">GOOGLE</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
