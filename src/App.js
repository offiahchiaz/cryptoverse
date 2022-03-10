import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { useAppContext } from "./hooks/useAppContext";
import Navbar from "./components/Navbar";
import Login from "./pages/Login/Login";
import Signup from "./pages/signup/Signup";
import Home from "./pages/home/Home";
//import SubNavbar from "./components/SubNavbar";


function App() {
  const { authIsReady, user } = useAppContext()
  return (
    <div className="">
      { authIsReady && (
        <BrowserRouter>
          {/* <SubNavbar /> */}
          <Navbar />
          <Switch>
            
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/login">
                {user && <Redirect to="/" />}
                {!user && <Login />}
              </Route>
              <Route path="/signup">
                {user && <Redirect to="/" />}
                {!user && <Signup />}
              </Route>
          </Switch>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
