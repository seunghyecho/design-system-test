import { Route, BrowserRouter as Router } from "react-router-dom";
import Layout from "./pages/Layout";
import "../src/style/common.css";
import Login from "./components/member/login";
import Intro from "./components/intro/intro";
import User from "./components/user/user";
import CashCharge from "./components/cash/cashCharge";
import Set from "./components/set/set";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Route exact path="/" component={Intro}></Route>
          <Route path="/layout" component={Layout} />
          <Route path="/login" component={Login}></Route>
          <Route path="/user" component={User}></Route>
          <Route path="/cash" component={CashCharge}></Route>
          <Route path="/set" component={Set}></Route>
        </div>
      </Router>
    </>
  );
}

export default App;
