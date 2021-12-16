import { Route, BrowserRouter as Router } from "react-router-dom";
import Layout from "./pages/Layout";
import "../src/style/common.css";
import Login from "./components/member/login";
import Intro from "./components/intro/intro";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Route exact path="/" component={Layout} />
          <Route path="/login" component={Login}></Route>
          <Route path="/intro" component={Intro}></Route>
        </div>
      </Router>
    </>
  );
}

export default App;
