import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useStateValue } from "../../StateProvider";
import "./style.scss";

function Header({ fav }) {
  const history = useHistory();
  const [{ user }, dispatch] = useStateValue();

  const logout = () => {
    history.push("/");
    localStorage.setItem("auth-token", "");
    dispatch({
      type: "log-user",
      token: undefined,
      user: undefined,
    });
  };

  useEffect(() => {
    if (!user) history.push("/");
  }, []);
  return (
    <>
      {fav ? (
        <div className="header-container">
          <Link to="/home" style={{ textDecoration: "none" }}>
            <div className="header-container-left">
              <h2 className="header-mainTitle">Home</h2>
              <img
                className="header-logo"
                src="https://logos-world.net/wp-content/uploads/2020/11/GitHub-Emblem.png"
                alt=""
              />
            </div>
          </Link>
          <div className="header-container-center">
            <img
              className="header-logo-hb"
              src="https://media-exp1.licdn.com/dms/image/C4E0BAQEilOKrebYwSA/company-logo_200_200/0/1519869435858?e=2147483647&v=beta&t=OXHkpn5SgGcOGMqqB5lKqBjj0bl6Uji-WSnO55Q_WWM"
              alt=""
            />
          </div>
          <div className="header-container-right">
            <h3 className="header-logout">
              <button className="button-logout" onClick={logout}>
                LOG OUT
              </button>
            </h3>
          </div>
        </div>
      ) : (
        <div className="header-container">
          <Link to="/home" style={{ textDecoration: "none" }}>
            <div className="header-container-left">
              <h2 className="header-mainTitle">Home</h2>
              <img
                className="header-logo"
                src="https://logos-world.net/wp-content/uploads/2020/11/GitHub-Emblem.png"
                alt="github-logo"
              />
            </div>
          </Link>
          <div className="header-container-center">
            <img
              className="header-logo-hb"
              src="https://media-exp1.licdn.com/dms/image/C4E0BAQEilOKrebYwSA/company-logo_200_200/0/1519869435858?e=2147483647&v=beta&t=OXHkpn5SgGcOGMqqB5lKqBjj0bl6Uji-WSnO55Q_WWM"
              alt=""
            />
          </div>
          <div className="header-container-right">
            <Link to="/home/github/fav" style={{ textDecoration: "none" }}>
              <div className="header-profile">
                <h4 className="header-profile-title">
                  YOUR LIST
                </h4>
              </div>
            </Link>
            <h3 className="header-logout">
              <button className="button-logout" onClick={logout}>
                LOG OUT
              </button>
            </h3>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
