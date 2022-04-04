import Login from "./views/Login";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useStateValue } from "./StateProvider";
import Home from "./views/Home";
import SignUp from "./views/SignUp";
import FavList from "./views/FavList";
import Search from "./views/Search";

function App() {
  const [{ user }, dispatch] = useStateValue();
 
  useEffect(() => {
      const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }
      const tokenRes = await axios.post(
        "http://localhost:5000/users/tokenIsValid",
        null,
        { headers: { "x-auth-token": token } }
      );
      if (tokenRes.data) {
        const userRes = await axios("http://localhost:5000/users", {
          headers: { "x-auth-token": token },
        });
        dispatch({
          type: "log-user",
          user: userRes.data,
          token,
        });
      }
    };
    checkLoggedIn();
  }, []);

  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/home/github" component={Search} />
          <Route exact path="/home/github/fav" component={FavList} />
          <Route exact path="/register" component={SignUp} />
          <Route exact path="/home" component={Home} />
          <Route path="/" render={() => {
            return user ? <Redirect to="/home"></Redirect> : <Login />
          }} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
