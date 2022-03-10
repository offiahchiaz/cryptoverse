import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { useAppContext } from "./hooks/useAppContext";
import Navbar from "./components/Navbar";
import Login from "./pages/Login/Login";
import Signup from "./pages/signup/Signup";
//import SubNavbar from "./components/SubNavbar";


function App() {
  const { authIsReady } = useAppContext()
  return (
    <div className="">
      { authIsReady && (
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
      )}
    </div>
  );
}

export default App;
