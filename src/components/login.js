import "../stylesheets/login.css";
import { useNavigate } from "react-router-dom";

import { ReactComponent as Logo } from "../icons/logologin.svg";
import { useState } from "react";

// import fetch from "fetch";
require("dotenv").config();
export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [error1, setErrorf] = useState(false);

  const login = async () => {
    console.log(process.env);

    await fetch(`${process.env.REACT_APP_STAGING}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        localStorage.setItem("userData", JSON.stringify(data));

        if (data.message == "Invalid Credentials, Please try agin") {
          console.log(data.message);
          setError("Invalid Credentials, Please try again");
          setErrorf(true);
        } else {
          setErrorf(false);
          navigate("/table");
        }
      });

    // console.log(a);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className="loginblock">
      <div className="loginlogo">
        <Logo />
      </div>
      <div className="spacing">
        <div className="textediting">
          <div className="textlabel">
            {" "}
            <label> Email </label>
          </div>
          <input type="text" value={email} onChange={handleEmail} />
        </div>

        <div className="textediting2">
          <div className="textlabel2">
            {" "}
            <label> Password </label>
          </div>

          <input
            type="password"
            id="inputID"
            value={password}
            onChange={handlePassword}
          />
        </div>
      </div>
      <div className="forgetpassword">
        <label style={{ cursor: "pointer" }}> Forgot Password? </label>
      </div>

      <div className="loginb" onClick={login}>
        <label
          style={{
            cursor: "pointer",
          }}
        >
          {" "}
          Login
          {error1 ? (
            <div>
              {" "}
              <h4 style={{ color: "red", fontSize: "1vw" }}>{error}</h4>
              {console.log("llllllll")}
            </div>
          ) : (
            <div></div>
          )}
        </label>
      </div>
    </div>
  );
}
