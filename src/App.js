import "./App.scss";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="App-header"></div>
      <Router>
        <Switch>
          <Route />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
