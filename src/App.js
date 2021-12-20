import { useState } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Layout from "./pages/layout";
import "../src/style/common.css";
import Login from "./components/member/login";
import Intro from "./components/intro/intro";
import User from "./components/user/user";
import CashCharge from "./components/cash/cashCharge";
import Set from "./components/set/set";

import Auth from "./components/auth/auth";
import { AuthRoute } from "./components/auth/authRoute";
import SideMenu from "./components/menu/sideMenu";
import DailyFortune from "./components/home/dailyFortune";

function App() {
  const [user, setUser] = useState(null);
  const authenticated = user != null;

  const login = ({ email, password }) => setUser(Auth({ email, password }));
  return (
    <>
      <Router>
        <div className="App">
          <Route exact path="/" component={Intro}></Route>
          <Route path="/layout" component={Layout} />
          <Route
            path="/login"
            render={(props) => (
              <Login authenticated={authenticated} login={login} {...props} />
            )}
          />
          <AuthRoute
            authenticated={authenticated}
            path="/user"
            render={(props) => <User user={user} {...props} />}
          />
          <AuthRoute
            authenticated={authenticated}
            path="/sidemenu"
            render={(props) => <SideMenu user={user} {...props} />}
          />
          <Route path="/cash" component={CashCharge}></Route>
          <Route path="/dailyfortune" component={DailyFortune}></Route>
          <Route path="/set" component={Set}></Route>
        </div>
      </Router>
    </>
  );
}

export default App;
