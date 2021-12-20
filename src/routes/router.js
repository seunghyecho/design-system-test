import { Route, Switch } from "react-router-dom";
import { useState } from "react";
import Home from "../components/home/home";
import Login from "../components/member/login";
import Intro from "../components/intro/intro";
import User from "../components/user/user";
import CashCharge from "../components/cash/cashCharge";
import Set from "../components/set/set";
import Auth from "../components/auth/auth";
import { AuthRoute } from "../components/auth/authRoute";
import SideMenu from "../components/menu/sideMenu";
import DailyFortune from "../components/home/dailyFortune";
import SearchContents from "../components/search/searchContents";
export default function Router() {
  const [user, setUser] = useState(null);
  const authenticated = user != null;
  const login = ({ email, password }) => setUser(Auth({ email, password }));
  return (
    <div>
      <Switch>
        <Route exact={true} path="/" component={Home}></Route>
        <Route path="/intro" component={Intro}></Route>
        <Route path="/cash" component={CashCharge}></Route>
        <Route path="/dailyfortune" component={DailyFortune}></Route>
        <Route path="/set" component={Set}></Route>
        <Route path="/search" component={SearchContents}></Route>
        <Route
          path="/login"
          render={(props) => (
            <Login authenticated={authenticated} login={login} {...props} />
          )}
        />
        <AuthRoute
          authenticated={authenticated}
          path="/sidemenu"
          render={(props) => <SideMenu user={user} {...props} />}
        />
        <AuthRoute
          authenticated={authenticated}
          path="/user"
          render={(props) => <User user={user} {...props} />}
        />
      </Switch>
    </div>
  );
}
