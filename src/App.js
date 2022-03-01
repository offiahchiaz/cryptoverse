import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
//import SubNavbar from "./components/SubNavbar";


function App() {
  return (
    <div className="container-fluid">
      <BrowserRouter>
        {/* <SubNavbar /> */}
        <Navbar />
        <Switch>

        </Switch>
      </BrowserRouter>
      <h1>Welcome to Cryptoverse</h1>
    </div>
  );
}

export default App;
