import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home/Home";
import Tablets from "./Components/Tablets/Tablets";
import Televisions from "./Components/Televisions/Televisions";
import Cameras from "./Components/Cameras/Cameras";
import Laptops from "./Components/Laptops/Laptops";

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
    </Router>
  );
}

export default App;
