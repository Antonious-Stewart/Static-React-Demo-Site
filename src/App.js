import "./App.scss";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Header } from "./components/Header";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
