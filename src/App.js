import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './components/Home/Home';
import AllPackages from './components/AllPackages/AllPackages';
import Reviews from './components/Reviews/Reviews';
import Login from './components/Login/Login';
import Header from './components/Header/Header';
import ComingSoon from './components/ComingSoon/ComingSoon';
import NotFound from './components/NotFound/NotFound';
import AddPackage from './components/AddPackage/AddPackage';
import Register from './components/Register/Register';
import AuthProvider from './contexts/AuthProvider';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>

          <Route path="/all-packages">
            <AllPackages></AllPackages>
          </Route>

          <Route path="/reviews">
            <Reviews></Reviews>
          </Route>

          <Route path="/coming-soon">
            <ComingSoon></ComingSoon>
          </Route>

          <Route path="/login">
            <Login></Login>
          </Route>

          <Route path="/register">
            <Register></Register>
          </Route>

          <Route path="/add-package">
            <AddPackage></AddPackage>
          </Route>

          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="*">
            <NotFound></NotFound>
          </Route>

        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;