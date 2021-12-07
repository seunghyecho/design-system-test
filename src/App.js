import { Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Route exact path="/" component={Home} />
        </div>
      </Router>
    </>
  );
}

export default App;
