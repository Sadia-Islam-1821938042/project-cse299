import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './components/Home/Home';
import AllPackages from './components/AllPackages/AllPackages';

function App() {
  return (
    <Router>
      <Switch>
        
      

        <Route path="/home">
          <Home></Home>
        </Route>

        <Route path="/all-packages">
          <AllPackages></AllPackages>
        </Route>

        <Route path="/">
          <Home></Home>
        </Route>

      </Switch>
    </Router>
  );
}

export default App;