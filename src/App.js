import { Route, BrowserRouter as Router } from "react-router-dom";
import Layout from "./pages/Layout";
import "../src/style/common.css";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Route exact path="/" component={Layout} />
        </div>
      </Router>
    </>
  );
}

export default App;
