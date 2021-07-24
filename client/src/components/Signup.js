import React, { useState } from "react";
import styles from "./Signup.css";
import Signupimg from "../images/Signupimg.jpg";
import Login from "./Login";
import { useHistory } from "react-router-dom";

function Signup(props) {
  const history = useHistory();

  const [user, setUser] = useState({
    fullname: "",
    username: "",
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

    const { fullname, username, email, password } = user;

    const res = await fetch("http://localhost:5000/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullname,
        username,
        email,
        password,
      }),
    });

    const data = await res.json();
    if (data.status === 404 || !data) {
      window.alert("invalid registraton");
    } else {
      window.alert("sucsess");
      history.push("/login");
    }
  };

  return (
    <div>
      <div className="main">
        <div className="imgbg">
          <img src={Signupimg} alt="" className="imghere" />
        </div>
        <div className="mainlog">
          <div className="btnup">
            <button
              className="singup"
              onClick={() => {
                history.push("/login");
              }}
            >
              LOGIN
            </button>
            <button className="login">SIGN UP</button>
          </div>
          <div className="textone">SIGN UP TO CONTINUE</div>
          <form methos="POST" className="inputbox">
            <input
              type="text"
              placeholder="NAME"
              name="fullname"
              value={user.fullname}
              onChange={handleInputs}
              className="input_username"
            />
            <input
              type="text"
              placeholder="USERNAME"
              name="username"
              value={user.username}
              onChange={handleInputs}
              className="input_username"
            />

            <input
              type="email"
              placeholder="EMAIL ADDRESS"
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
          </form>

          <div className="mainbtn">
            <button className="logintwo" onClick={PostData}>
              SIGN UP
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
