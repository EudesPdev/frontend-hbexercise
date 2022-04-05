import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./style.scss";
import axios from "axios";
import { useStateValue } from "../../StateProvider";
import MsgError from "../../components/MsgError";

function Login() {
  const history = useHistory();
  const [{}, dispatch] = useStateValue();
  const [error, setError] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async (e) => {
    e.preventDefault();
    try {
      const loginRes = await axios.post("http://localhost:5000/users/login", {
        email,
        password,
      });
      dispatch({
        type: "log-user",
        user: loginRes.data.user,
        token: loginRes.data.token,
      });
      localStorage.setItem("auth-token", loginRes.data.token);
      history.push("/home");
    } catch (err) {
      err.response.data.msg && setError(err.response.data.msg);
    }
  };

  const register = (e) => {
    e.preventDefault();
    history.push("/register");
  };

  return (
    <div className="login">
      <div className="login-logos">
        <img
          className="login-logo"
          src="https://logos-world.net/wp-content/uploads/2020/11/GitHub-Emblem.png"
          alt=""
        />
        <img
          className="login-logo"
          src="https://media-exp1.licdn.com/dms/image/C4E0BAQEilOKrebYwSA/company-logo_200_200/0/1519869435858?e=2147483647&v=beta&t=OXHkpn5SgGcOGMqqB5lKqBjj0bl6Uji-WSnO55Q_WWM"
          alt=""
        />
      </div>
      <div className="login-container">
        <h1 className="login-title">Sign In</h1>
        {error && <MsgError msg={error} clear={() => setError(undefined)} />}
        <form className="form-container">
          <div className="input-container">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder="Email"
            />
          </div>

          <div className="input-container">
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
            />
          </div>

          <button onClick={login} type="submit" className="login-signIn-btn">
            SIGN IN
          </button>
        </form>
        <p className="login-text">
          Don't have an account?
        </p>
        <button onClick={register} className="login-signup-btn">
          SIGN UP NOW
        </button>
      </div>
    </div>
  );
}

export default Login;
