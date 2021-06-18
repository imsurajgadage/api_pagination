import "./App.css";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import NewsFeed from "./components/NewsFeed/NewsFeed";
import Contactus from "./components/Contactus/Contactus";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <NewsFeed />
          </Route>
          <Route path="/contact">
            <Contactus />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
