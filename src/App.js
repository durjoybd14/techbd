import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home/Home";
import Tablets from "./Components/Tablets/Tablets";
import Televisions from "./Components/Televisions/Televisions";
import Cameras from "./Components/Cameras/Cameras";
import Laptops from "./Components/Laptops/Laptops";
import ScrollToTop from "react-scroll-to-top";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/Home">
          <Home />
        </Route>

        <Route path="/laptops">
          <Laptops />
        </Route>

        <Route path="/tablets">
          <Tablets />
        </Route>

        <Route path="/televisions">
          <Televisions />
        </Route>

        <Route path="/cameras">
          <Cameras />
        </Route>

        <Route exact path="/">
          <Home />
        </Route>

        <Route path="*">
          <h1>No Match</h1>
        </Route>
      </Switch>
      <ScrollToTop
        smooth
        style={{ backgroundColor: "#12d0d9", padding: "5px" }}
      />
    </Router>
  );
}

export default App;
