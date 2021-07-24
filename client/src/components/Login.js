import React, { useState } from "react";
import styles from "./Login.css";
import Loginimg from "../images/Loginimg.jpg";

import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import { makeStyles, FormControlLabel, FormLabel } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import FormControl from "@material-ui/core/FormControl";
const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: "block",
  },
});
function Login(props) {
  const history = useHistory();
  const classes = useStyles();

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
          <div >
            <Container size="sm">
              <Typography
                variant="h6"
                color="textPrimary"
                component="h2"
                gutterBottom
              >
                Login to Continue
              </Typography>
              <form noValidate autoComplete="off">
                <TextField
                  className={classes.field}
                  label="Username or Email"
                  variant="outlined"
                  color="secondary"
                  fullWidth
                  required
                />
                <TextField
                  className={classes.field}
                  label="Password"
                  variant="outlined"
                  colors="primary"
                  fullWidth
                  required
                />
              </form>
              <div className="forget">
                {" "}
                <a href="" className="first">
                  Forgot Password?
                </a>{" "}
              </div>
              <Button
                type="submit"
                color="secondary"
                variant="contained"
                endIcon={<KeyboardArrowRightIcon />}
              >
                Submit
              </Button>
            </Container>
          </div>

          <div className="mainbtn">
            <button className="facebook">FACEBOOK</button>
            <button className="google">GOOGLE</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
