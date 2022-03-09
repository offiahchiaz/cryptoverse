import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Login/Login";
import Signup from "./pages/signup/Signup";
//import SubNavbar from "./components/SubNavbar";


function App() {
  return (
    <div className="">
      <BrowserRouter>
        {/* <SubNavbar /> */}
        <Navbar />
        <Switch>
          
            <Route exact path="/">
          
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
        </Switch>
      </BrowserRouter>
      {/* <h1>Welcome to Cryptoverse</h1> */}
    </div>
  );
}

export default App;
