import { BrowserRouter } from "react-router-dom";
import Layout from "./pages/layout";
import "../src/style/common.css";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </div>
  );
}

export default App;
