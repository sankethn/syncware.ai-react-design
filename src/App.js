import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Main from "./components/Main/Main";
import Navigation from "./components/Navigation/Navigation";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Main />
      </div>
    </Router>
  );
}

export default App;
