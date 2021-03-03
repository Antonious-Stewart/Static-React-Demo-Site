import "./App.scss";
import Footer from "./components/Footer";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { Header } from "./components/Header";
import { Navigation } from "./components/Navigation";
import { Home } from "./Containers/Home/Index";

function App() {
  return (
    <Router>
      <Navigation />
      <div className='App'>
        <Switch>
          <Route exact={true} path='/'>
            <Redirect to='Home' />
          </Route>
          <Route path='/Home' component={Home} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
